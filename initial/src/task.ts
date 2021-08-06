import { Application, Container, Text, Ticker } from "pixi.js";

import { preloader } from "./preloader";
import list from './assets';
import { ParticleAni } from "./fountain";

export class Game {
    app: Application;
    stage: Container;
    fps: Text;
    degign:ParticleAni|undefined
    constructor(app: Application) {
        this.app = app;
        this.stage = app.stage
        this.fps = this.createText("", 0, 0, 0);
        preloader(list, () => {
            const design=new ParticleAni(5000,{scale:true});
            design.position.set(this.app.view.width/2,this.app.view.height-50);
            design.startFountain();
            design.scale.set(5,4);
            this.stage.addChild(design);
            this.degign=design;
        });
        console.log(this.app);

    }
    createText(entry: string, x: number, y: number, a: number): Text {
        let text: Text = new Text(entry);
        text.position.set(x, y);
        text.anchor.set(a);
        return this.stage.addChild(text);
    }
    animate(delta: number) {
        this.fps.text = Ticker.shared.FPS.toFixed(2);
        this.degign?.runFountain(delta);
    }
}