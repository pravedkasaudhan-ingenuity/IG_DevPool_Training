import { brickTemp } from "./brickTemp.js";
export class platform extends brickTemp {
    constructor(rect) {
        super(rect);
        this.maxmove = rect.maxmove - rect.width;
        this.speed = 0;
        this.maxspeed = 5;
        this.direction = '';
    }
    move(dir) {
        this.direction = dir;
    }
    stop() {
        this.direction = '';
    }
    update() {
        // console.log("moving paddle");
        if (this.direction === "left") {
            if (this.x > 0) {
                this.speed = -this.maxspeed;
                this.x += this.speed;
            }
        }
        if (this.direction === "right") {
            if (this.x < this.maxmove) {
                this.speed = this.maxspeed;
                this.x += this.speed;
            }

        }
    }
}