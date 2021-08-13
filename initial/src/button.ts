import { Sprite, Texture } from "pixi.js";
import { selectTexture } from "./texture";


export class Button extends Sprite{
    play:Texture;
    // stop:Texture;
    constructor(texture_id:string){
        super();
        this.play=selectTexture(texture_id) as Texture;
        
        this.texture=this.play;
        this.interactive=true;
        this.buttonMode=true;
        // let test=this.interactive;
        // this.addListener('mousedown',()=>{
        //     console.log(this.interactive);
        //     if(test){
        //         this.texture=this.stop;
        //         test=false;
        //     }
        //     else{
        //         this.texture=this.play;
        //         test=true;
        //     }
        // })
    }
}