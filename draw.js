import { game } from './game.js';
export class draw extends game {

    startdraw() {
        console.log("startdraw called")
        let con = this.canvas.getContext('2d');
    
        if(this.car.complete && this.road.complete && this.bg.complete){
            if(((this.x + this.speed * this.mod)>=(this.canvas.width/3))&&(this.x + this.speed * this.mod)<=(this.canvas.width*(2/3))-this.carW){
                this.x += this.speed * this.mod;
            }
            if((this.y + this.speed * this.dir)>=0 && (this.y + this.speed * this.dir)<=this.canvas.height-this.carH){
                this.y += this.speed * this.dir;
            }
            console.log(this.x,this.y);
        
        con.clearRect(0, 0, canvas.width, canvas.height);
        con.drawImage(this.bg, 0 ,0 , canvas.width,canvas.height);
        con.drawImage(this.road, this.canvas.width/3 ,0 , this.canvas.width/3, this.canvas.height);
        con.drawImage(this.car, this.x, this.y, this.carW, this.carH);
        requestAnimationFrame(this.startdraw.bind(this));
        }
        
    }

}
