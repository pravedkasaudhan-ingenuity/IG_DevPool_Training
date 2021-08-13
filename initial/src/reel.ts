import { gsap } from "gsap";
import { Application, Container, Graphics, Resource, Sprite, Texture } from "pixi.js";
import { symbols,Reels_info } from "./details";
import { selectTexture } from "./texture";
import { winning } from "./winning";


export class putReel extends Container {
    app: Application;
    Reels: Array<Sprite>[] = [];
    symbols: Array<object>[] =[];

    private symbolHeight: number;
    private symbolGapH: number;
    private currentStop = 90;

    y_Top: number;

    constructor(app: Application) {
        super();
        this.app = app;
        this.y_Top = this.app.view.height * 0.01;
        this.symbolHeight = this.app.view.height * 0.22;
        this.symbolGapH = this.app.view.height * 0.031;
    }
    createReel() {
       

        const startx = this.app.view.width * 0.22;
        const starty = this.app.view.height * 0.01;
        const gapW = this.app.view.width * 0.02;
        const gapH = this.app.view.height * 0.031;
        const reelW = this.app.view.width * 0.12;
        const reelH = this.app.view.height * 0.22;

        for (let col = 0; col < 5; col++) {
            let reel = new Container();
            let ss:Array<object>=[];
            let rr:Array<Sprite>=[];
            for (let row = 0; row < 5; row++) {
                let symID = symbols[Math.floor(Math.random() * 10)];
                const img = this.createSprite(selectTexture(symID) as Texture, (col + 1) * startx, (row + 1) * starty, 0.5);
                img.x = startx + col * (reelW +  gapW);
                img.y = starty + row * (reelH + gapH);
                img.width = reelW;
                img.height = reelH;
                reel.addChild(img)

                ss.push({ id: symID, image: img });
                rr.push(img);
            }
            this.Reels.push(rr);
            this.symbols.push(ss);
            this.addChild(reel);
        }
        const mask = new Graphics();
        // mask.beginFill();
        mask.drawRect((startx - (reelW + gapW) / 2), (starty + (gapH + reelH) / 2), 5 * (gapW + reelW), 3 * (gapH + reelH));
        this.addChild(mask);
        this.mask = mask;
        console.log(this.Reels);
        console.log(this.symbols);
    }
    createSprite(texture: Texture, x: number, y: number, anc: number): Sprite {
        const img = new Sprite(texture);
        img.position.set(x, y);
        img.anchor.set(anc);
        img.width = this.app.view.width;
        img.height = this.app.view.height;
        return this.addChild(img);

    }
    spin(payline:Sprite) {
        console.log("spin");
        
        this.Reels?.forEach((reel,index) => {
            let counter=89;
          setTimeout(()=>{
              gsap.to(reel, 
                {
                    y: `-=${2*this.symbolHeight + this.symbolGapH}`,
                    duration: 0.3,
                    yoyo: true,
                    onComplete: () => {
                        // console.log("spinning")
                        this.symbols[index].forEach((symbol_det) => {
                            const sym_key = Object.values(symbol_det)[0];
                            const sym_Sprite = Object.values(symbol_det)[1];
                            sym_Sprite.texture = selectTexture(sym_key.substring(0, 2) + '_blur.png') as Texture;
                        });
                   
                        gsap.to(reel, 
                            {
                        y: `+=${2*this.symbolHeight }`,
                        duration:0.1,
                        repeat: 15,
                        onRepeat:()=>{
                            let alpha:any=[];
                            this.symbols[index].forEach((symbol_det,num)=>{
                                const xyz=Reels_info[index][Math.floor(Math.random()*counter)];
                                let sym_key = Object.values(symbol_det)[0];
                                const sym_Sprite = Object.values(symbol_det)[1];
                                sym_Sprite.texture=selectTexture(symbols[xyz].substring(0, symbols[xyz].length-4) + '_blur.png')as Texture;
                                sym_key=symbols[xyz].substring(0, symbols[xyz].length-4) + '_blur.png';
                                
                                (this.symbols[index][num])={id:sym_key,image:sym_Sprite};

                            })
                        },
                        
                        onComplete: () => {
                            gsap.fromTo(reel, { y: `+=${2*this.symbolHeight + this.symbolGapH}`}, {
                                y: `-=${2*this.symbolHeight }`,
                                duration:0.2,
                                ease: 'Bounce.out',
                                onStart: () => {
                                    this.symbols[index].forEach((symbol_det,num) => {
                                        let sym_key = Object.values(symbol_det)[0];
                                        const sym_Sprite = Object.values(symbol_det)[1];
                                        sym_Sprite.texture = selectTexture(sym_key.substring(0, sym_key.length-9) + '.png') as Texture;
                                        sym_key=sym_key.substring(0, sym_key.length-9) + '.png';
                                        (this.symbols[index][num])={id:sym_key,image:sym_Sprite};
                                    });
                                },
                                onComplete:()=>{
                                    if(index==4){
                                        const result=new winning(this.symbols);
                                        console.log(result.decideWIN());
                                        const win_loc=result.decideWIN();
                                        win_loc.forEach(loc=>{
                                            payline.x=this.app.view.width * 0.22 + loc[1] * (this.app.view.width * 0.12 )-this.app.view.width * 0.06;
                                            payline.y=this.app.view.height * 0.01 + loc[0] * (this.app.view.height * 0.22 );
                                            payline.visible=true;
                                        })
                                    }
                                }
                            });
                        },
                    });
                },
            });
        },200*index);
         
        });
        if (this.symbols)
        console.log(this.symbols);
    }
}