import { Application } from "pixi.js";
import { Game } from "./Game";

import '../css/style.css'
import '../assets/images/img1.jpg';
import '../assets/images/img2.jpg';
import '../assets/images/img3.jpg';


const canvas:HTMLCanvasElement=document.getElementById("canvas")as HTMLCanvasElement;
const app= new Application({
    view:canvas,
    width:innerWidth*0.8,
    height:innerHeight*0.8,
    backgroundColor:0x0ffff0,
    sharedTicker:true,
    sharedLoader:true
});

const task=new Game(app);
app.ticker.add(task.animate.bind(task));
window.addEventListener('keydown',task.events.bind(task));


