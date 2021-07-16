export class brickTemp{
    constructor(rect){
        this.x=rect.x-rect.width/2;
        this.y=rect.y;
        this.width=rect.width,
        this.height=rect.height;
        this.color=rect.color;
        this.living=true;
    }
    hitandturn(object){
       
        let X=Math.abs((this.x+this.width/2)-object.x);
        let Y=Math.abs((this.y+this.height/2)-object.y);
        if(X<object.radius+this.width/2 && Y<object.radius+this.height/2){
            return true; 
        }
        else{
            return false;
        }
    }
    draw(ctx) {
        if(this.living){
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
    
        }

    }
}