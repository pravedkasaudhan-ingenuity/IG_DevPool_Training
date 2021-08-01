import { Application, Container, Graphics, Resource, Sprite, Text, Texture, Ticker } from "pixi.js";

import { preloader } from "./preloader";
import list from './assets';
import { FOOD, food_Position, snake_eaten_food, timeUpdate } from "./food";
import { drawSnake, gameOver, addBlock, move } from "./snake";
import { selectTexture } from "./texture";
export class Game {
    app: Application;
    stage: Container;
    fps: Text;
    image1: Sprite | undefined;
    index: number;
    food: Graphics | undefined;
    food_radi: number;
    snake: Container | undefined;
    vert: number | undefined;
    hori: number | undefined;
    direction: string | undefined;
    // timer:number=20000;
    constructor(app: Application) {
        this.index = 1;
        this.app = app;
        this.stage = app.stage;
        this.food_radi = 10;
        this.fps = this.createText("", 0, 0, 0);
        preloader(list, () => {
            setInterval(() => {
                timeUpdate();
            }, 1000);
            this.food = FOOD(this.app, this.food_radi)        
        });
    }
    events(e: KeyboardEvent) {
        console.log(e);
      
        console.log(this.vert, this.hori)
        if (this.vert && (e.code == "ArrowLeft" || e.code == "ArrowRight")) {
            clearInterval(this.vert);
            this.vert = undefined;
        }
        if (this.hori && (e.code == "ArrowUp" || e.code == "ArrowDown")) {
            clearInterval(this.hori);
            this.hori = undefined;
        }
        if (this.hori == undefined) {
            if (e.code == 'ArrowLeft') {
                this.direction = 'left';
                addBlock(-30, 0);
                this.hori = Number(setInterval(() => move(), 200));
            }
            if (e.code == 'ArrowRight') {
                this.direction = 'right';
                addBlock(30, 0);
                this.hori = Number(setInterval(() => move(), 200));
            }
        }
        if (this.vert == undefined) {
            if (e.code == 'ArrowDown') {
                this.direction = 'down';
                addBlock(0, 30);
                this.vert = Number(setInterval(() => move(), 200));
            }
            if (e.code == 'ArrowUp') {
                this.direction = 'up';
                addBlock(0, -30);
                this.vert = Number(setInterval(() => move(), 200));
            }
        }

    }

    test() {
        console.log("test called");
        this.createGameOver();
    }
    createGameOver(): Text | undefined {
        if (gameOver()) {
            this.app.ticker.stop();
            let text = new Text("GAMEOVER");
            text.x = this.app.view.width / 2;
            text.y = this.app.view.height / 2;
            text.anchor.set(0.5);
            console.log(text);
            this.stage.removeChildren();
            return this.stage.addChild(text);
        }
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
    animate() {
        this.fps.text = Ticker.shared.FPS.toFixed(0);
        // console.log(this.index,this.food_radi);

        // if(this.food){
        //     this.food.destroy();
        //     this.food = FOOD(this.app,this.food_radi);
        // }
        if (this.food) {
            if (this.index <= 50) {
                this.food_radi += 0.3
                this.food.destroy();
                this.food = FOOD(this.app, this.food_radi)
                this.index++;
            }
            else if (this.index <= 100) {
                this.food_radi -= 0.3
                this.food.destroy();
                this.food = FOOD(this.app, this.food_radi)
                this.index++;
            }
            if (this.index > 100) {
                this.index = 1;
                this.food.destroy();
                this.food = FOOD(this.app, this.food_radi)
            }
        }


        if (this.snake) {
            this.snake.destroy();
        }
        this.snake = drawSnake(this.app);


        this.createGameOver();

        if (this.food)
            snake_eaten_food();
    }
}