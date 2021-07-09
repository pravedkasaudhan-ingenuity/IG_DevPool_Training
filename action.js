import { draw } from './draw.js'

class move extends draw {
    start() {
        console.log("p called");
        window.addEventListener('resize', this.resize.bind(this));
        this.car.addEventListener('load', () => {
            window.addEventListener('keydown', this.movement.bind(this));
            window.addEventListener('keyup', this.movement.bind(this));
            this.bg.addEventListener('load', this.startdraw.bind(this));
        });
    }
    resize() {
        this.adjust();
        this.startdraw();
    }
    movement(e) {
        switch (e.type) {
            case 'keydown':
                switch (e.code) {
                    case 'KeyW':
                    case 'ArrowUp':
                        this.dir = -1;
                        console.log("W pressed", this.dir);
                        break;
                    case 'KeyS':
                    case 'ArrowDown':
                        this.dir = 1;
                        console.log("S pressed", this.dir);
                        break;
                    case 'KeyA':
                    case 'ArrowLeft':
                        this.mod = -1;
                        console.log("A pressed", this.mod);
                        break;
                    case 'KeyD':
                    case 'ArrowRight':
                        this.mod = 1;
                        console.log("D pressed", this.mod);
                        break;
                }
                break;
            case 'keyup':
                switch (e.code) {
                    case 'KeyW':
                    case 'ArrowUp':
                    case 'KeyS':
                    case 'ArrowDown':
                        this.dir = 0;
                        break;
                    case 'KeyA':
                    case 'ArrowLeft':
                    case 'KeyD':
                    case 'ArrowRight':
                        this.mod = 0;
                        break;
                }
                break;
        }
    }
}

let carrace = new move();
carrace.start();

