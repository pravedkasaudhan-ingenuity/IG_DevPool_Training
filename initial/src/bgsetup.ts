import { Application, Container, Graphics, Sprite, Texture, Text } from "pixi.js"
import { selectTexture } from "./texture";
import { symbols } from "./details";
import { Button } from "./button";
import { putReel } from "./reel";

export class Setup extends Container {
    private app: Application;
    private bg: Sprite | undefined;
    private reel_bg: Sprite | undefined;
    private logo: Sprite | undefined;
    payline: Sprite | undefined;
    reel: putReel;

    constructor(app: Application) {
        super();
        this.app = app;
        this.reel = new putReel(this.app);
    }
    createBase() {
        this.bg = this.createSprite(selectTexture('bg') as Texture, this.app.view.width / 2, this.app.view.height / 2, 0.5);

        this.reel_bg = this.createSprite(selectTexture('reel_bg') as Texture, this.app.view.width / 2, this.app.view.height / 2 + 20, 0.5);
        this.reel_bg.width = 0.7 * innerWidth;
        this.reel_bg.height = 0.8 * innerHeight;

        this.logo = this.createSprite(selectTexture('logo') as Texture, this.app.view.width / 2, 40, 0.5);
        this.logo.scale.set(0.8);

        this.createReel();
        const base_bar = this.createSprite(selectTexture('Base_Bar.png') as Texture, this.app.view.width / 2, this.app.view.height - 30, 0.5)
        base_bar.height = 50;
        base_bar.width = this.app.view.width * 0.7;
        base_bar.scale.x = -1 * base_bar.scale.x;

        this.createButton();
        const payline = this.createSprite(selectTexture("payline") as Texture, this.app.view.width * 0.14, 250, 0);
        payline.width = this.app.view.width * 0.12 * 3.7;
        payline.height=80;
        this.payline = payline;
        //    payline.scale.set(0.3);
           payline.visible=false;
    }
    createReel() {

        this.reel.createReel();
        this.addChild(this.reel);

    }
    createButton() {
        const btn = new Button("Play_Normal.png");
        btn.width = 100;
        btn.height = 60;
        btn.position.set(this.app.view.width * 0.78, this.app.view.height * 0.9);
        this.addChild(btn);

        const plus_btn = new Button("Auto_btn_Disable.png");
        plus_btn.width = 30;
        plus_btn.height = 20;
        plus_btn.position.set(this.app.view.width * 0.28, this.app.view.height * 0.92);
        this.addChild(plus_btn);
        const minus_btn = new Button("Auto_btn_Disable.png");
        minus_btn.width = 30;
        minus_btn.height = 20;
        minus_btn.position.set(this.app.view.width * 0.20, this.app.view.height * 0.92);
        this.addChild(minus_btn);

        btn.on('click', () => {
            document.querySelector('audio')?.play();
            (this.payline as Sprite).visible=false;
            this.reel.spin(this.payline as Sprite);

        })
        const bet_txt = this.createText("BET", this.app.view.width * 0.25, this.app.view.height - 20, 0.5, 0.6);
        const totalBet_txt = this.createText("TOTAL BET", this.app.view.width * 0.45, this.app.view.height - 20, 0.5, 0.6);

        const betAmt = this.createText("250.00", this.app.view.width * 0.252, this.app.view.height - 40, 0.5, 0.6);
        betAmt.style.fontWeight = "bolder";
        const betTotalAmt = this.createText("50000", this.app.view.width * 0.452, this.app.view.height - 40, 0.5, 0.6);
        betTotalAmt.style.fontWeight = "bolder";
        const plus = this.createText("+", this.app.view.width * 0.292, this.app.view.height * 0.935, 0.5, 0.6);
        plus.style.fontWeight = "bolder";
        const minus = this.createText("-", this.app.view.width * 0.212, this.app.view.height * 0.935, 0.5, 0.6);
        minus.style.fontWeight = "bolder";
        // const bet_plus=new Button("")
    }

    createText(entry: string, x: number, y: number, a: number, scale: number): Text {
        let text: Text = new Text(entry);
        text.position.set(x, y);
        text.scale.set(scale);
        text.anchor.set(a);
        return this.addChild(text);
    }
    createSprite(texture: Texture, x: number, y: number, anc: number): Sprite {
        const img = new Sprite(texture);
        img.position.set(x, y);
        img.anchor.set(anc);
        img.width = this.app.view.width;
        img.height = this.app.view.height;
        return this.addChild(img);

    }
}