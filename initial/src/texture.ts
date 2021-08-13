import { BaseTexture, ILoaderResource, Rectangle, Resource, Texture } from "pixi.js";

let resource: { [key: string]: ILoaderResource };
let texture: { [key: string]: Texture<Resource> } = {} as { [key: string]: Texture<Resource> };
export function loadtexture(res: { [key: string]: ILoaderResource }) :{ [key: string]: Texture<Resource> }{
    resource=res;
    const keys = Object.keys(res);
    // console.log(keys);
    keys.forEach(ele => {
        // console.log(res[ele], ele);
        // console.log(res[ele].url);
        if(resource[ele].texture){
            texture[ele] = res[ele].texture as Texture<Resource>
        }
        else if(resource[ele].textures){
            const test=resource[ele].textures;
            // console.log(test);
            
            if(test){
                // let xyz=((resource[ele] as ILoaderResource).data as any).frames;
                const xyz:[]= resource[ele].data.frames;
                console.log(xyz);
                // console.log(((resource[ele] as ILoaderResource).data as any).frames);
                (xyz).forEach((ele:any,index:number)=>{
                    texture[ele.filename]=test[index] as Texture<Resource>;
                })
            }
        }
    });
    // console.log(texture);
    return texture;
}
export function selectResource(id:string){
        return resource[id] ;
}
export function selectTexture(id:string):Texture<Resource>|null{
    if(id in texture){
        // console.log("selected",texture[id],"selected");
        return texture[id] as Texture<Resource>
    }
    return null;
}

