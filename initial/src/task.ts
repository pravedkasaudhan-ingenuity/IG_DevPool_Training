import {  Application, Container,  Resource, Sprite, Text, Texture, Ticker } from "pixi.js";

import {Spine} from 'pixi-spine';
import { preloader } from "./preloader";
import list from './assets';
import { loadtexture, selectResource, selectTexture } from "./texture";
import { Setup } from "./bgsetup";
export class Game {
    app: Application;
    stage: Container;
    fps: Text;
     
    constructor(app: Application) {
        this.app = app;
        this.stage = app.stage;
        
        this.fps = this.createText("", 0, 0, 0);
        preloader(list, () => {
           const start= this.createSprite(selectTexture('loading')as Texture,this.app.view.width/2,this.app.view.height/2);
           start.scale.set(0.8);
           start.interactive=true;
           start.buttonMode=true;
           this.createText("CLICK TO START THE GAME",this.app.view.width/2,this.app.view.height*0.9,0.5);
           start.on('click',()=>{
               start.interactive=false;
               start.destroy();
               (document.getElementById('loader_bar')as HTMLDivElement ).style.display='none';
               const setup=new Setup(app);
               this.stage.addChild(setup);
               setup.createBase();
               
            })
           console.log(this.app);
            
        });
    }
     
    createText(entry: string, x: number, y: number, a: number): Text {
        let text: Text = new Text(entry);
        text.position.set(x, y);
        text.anchor.set(a);
        return this.stage.addChild(text);
    }
    createSprite(texture: Texture<Resource>, x: number, y: number): Sprite {
        let img = Sprite.from(texture);
        img.position.set(x, y);
        img.anchor.set(0.5);
        return this.stage.addChild(img);
    }
    animate(delta: number) {
        this.fps.text = Ticker.shared.FPS.toFixed(2);
      

    }
}