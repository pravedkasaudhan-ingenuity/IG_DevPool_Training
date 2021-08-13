import { Application } from "pixi.js";
import { Game } from "./task";
import '../css/style.css';

const audio=document.createElement("audio");
audio.src='../assets/preload/audio/ReelSpin.wav';
audio.style.visibility='false';
document.body.append(audio);
const canvas:HTMLCanvasElement=document.getElementById("canvas")as HTMLCanvasElement;
canvas.style.visibility='false';
window.onclick=()=>{
canvas.style.visibility='true';
}
    const app= new Application({
        view:canvas,
        width:innerWidth,
        height:innerHeight,
        backgroundColor:0xeeffee,
        sharedTicker:true,
        sharedLoader:true
    });
    // app.resize();
    const task=new Game(app);
    app.ticker.add(task.animate.bind(task));
    
    addEventListener('resize',()=>{
        console.log("adjust");
        app.view.width=innerWidth;
        app.view.height=innerHeight;
        app.renderer.resize;
    })