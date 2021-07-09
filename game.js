
export class game {
    car = new Image();
    road = new Image();
    bg = new Image();
    canvas;
    carW = 48;
    carH = 92;
    x;
    y;
    speed = 5;
    dir = 0;
    mod = 0;
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
        this.x = canvas.width / 3;
        this.y = canvas.height - this.carH;
        this.car.src = "https://th.bing.com/th/id/R.2144a2fae2c7e97c3b6e2ae01d065593?rik=Q0l6D0MdNHufcQ&pid=ImgRaw";
        // this.road.src = "https://th.bing.com/th/id/R.3a63900ec9badf280238bee1798b2a4c?rik=54WNLTwy12TnIQ&pid=ImgRaw";
        this.road.src = "./images/i.jpg";
        this.bg.src = "https://thumbs.dreamstime.com/b/top-view-stripe-grass-soccer-field-green-lawn-pattern-background-top-view-stripe-grass-soccer-field-175065164.jpg"
    }
    adjust() {
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
        this.x = canvas.width / 3;
        this.y = canvas.height - this.carH;
    }

}
