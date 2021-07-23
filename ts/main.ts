import { playlist } from './list';
import '../audio.css';
import './images/song-i1.jpg';
import './images/song-i2.jpg';
import './images/song-i3.jpg';
import './images/song-i4.jpg';
import './images/song-i5.jpg';
import './images/song-i6.jpg';
import './images/song-i7.jpg';

import './mp3/song1.mp3';
import './mp3/song2.mp3';
import './mp3/song3.mp3';
import './mp3/song4.mp3';
import './mp3/song5.mp3';
import './mp3/song6.mp3';
import './mp3/song7.mp3';

let all: HTMLUListElement = document.querySelector('#list');
let image: HTMLImageElement = document.querySelector('#image>img');
let audio: HTMLAudioElement = document.querySelector('#audio');
let play_pause: HTMLElement = document.querySelector("#play");
let prev: HTMLElement = document.querySelector("#prev");
let next: HTMLElement = document.querySelector("#next");
let shuffle: HTMLElement = document.querySelector('#shuffle');
let volume: HTMLInputElement = document.querySelector('#vol-control');
let bar: HTMLElement = document.querySelector('#loader');
let runningbar: HTMLElement = document.querySelector('#runningBar');
let vol: HTMLElement = document.querySelector('#volume');
let start_time: HTMLElement = document.querySelector('#S_time');
let end_time: HTMLElement = document.querySelector('#E_time');
start_time.innerText='start';
end_time.innerText='end';

onload = () => {
    createPlaylist();
}

function discStop(){
    image.style.animationPlayState='paused';
    
}
function discStart(){
    image.style.animationPlayState='running';
    
}
// adjust volume
setInterval(loadvolume,1);
function loadvolume(){

        var x:number =Number( volume.value);
        var y :number= x / 100;
       
        audio.volume = y;
       
       
}

// moving bar of the song
setInterval(runningBar,1);
function runningBar(){
    let current:number=audio.currentTime;
    let duration:number=audio.duration;
    let load=Math.floor(current/duration*100);
    bar.style.width=`${load}%`;
    
}


// display current and total duration of the song
setInterval(xyz,1);
function xyz(){
    var curMins :any = Math.floor(audio.currentTime / 60);
    var curSecs :any = Math.floor(audio.currentTime %60);
    var durMins :any = Math.floor(audio.duration / 60);
    var durSecs :any = Math.floor(audio.duration % 60);
    if (curSecs < 10) { 
        curSecs = "0" + curSecs;
     }
    if (durSecs < 10) {
         durSecs = "0" + durSecs; 
        }
    if (curMins < 10) { 
        curMins = "0" + curMins;
     }
    if (durMins < 10) {
         durMins = "0" + durMins; 
        }
    if(!audio.paused){
    start_time.innerHTML = curMins + ":" + curSecs;
    end_time.innerHTML = durMins + ":" + durSecs;
    }
    
}


function createPlaylist() {
    playlist.forEach(detail => {
        let song: HTMLElement = document.createElement('li');
        let link: HTMLAnchorElement = document.createElement('a');
        let img: HTMLImageElement = document.createElement('img');
        song.setAttribute('class', 'list_song')
        link.href = detail['href']['song'];
        link.name = detail['href']['image'];
        link.setAttribute('class', 'queue');
        link.innerText = detail['title'];
        link.addEventListener('click', loadandplay);
        song.append(link);
        all.append(song);
        
    })
}
let playing='';

// playlist play
function loadandplay(e) {
    e.preventDefault();
    image.src = e.target.name;
    audio.src = e.target.href;
    playing=e.target.href;
    audio.load();
    audio.play();
    image.style.border = "5px solid magenta";
    image.style.boxShadow = "0px 0px 100px 20px white";
    discStart();
}

// play button option
play_pause.addEventListener('click', () => {
    if (audio.src == '') {
        audio.src = playlist[0]['href']['song'];
        playing="http://localhost:8080/"+playlist[0]['href']['song'];
        image.src = playlist[0]['href']['image'];
        
        discStart();
        image.style.boxShadow = "0px 0px 100px 20px white";
        image.style.border = "5px solid magenta";
    }
    if(audio.paused){
        audio.play();
        discStart();
    } else{
     audio.pause();
     discStop();
    }

})

// shuffling playlist
shuffle.addEventListener('click', () => {
    playlist.sort(() => .5 - Math.random());
    all.innerHTML = '';
    createPlaylist();
    discStart();
    audio.pause();
    audio.src=playlist[0]['href']['song'];
    image.src=playlist[0]['href']['image'];
    image.style.boxShadow = "0px 0px 100px 20px white";
    image.style.border = "5px solid magenta";
    playing="http://localhost:8080/"+playlist[0]['href']['song'];
    audio.play(); 
})

// adjust volume
vol.addEventListener('click',(e)=>{
    volume.style.display=(volume.style.display==='inline')?'none':'inline';
    volume.style.left=`${e.clientX-e.offsetX-100}px`;
    volume.style.top=`${e.clientY-e.offsetY-100}px`;
})

// next song
audio.addEventListener('ended',nextone);
next.addEventListener('click',nextone);
function nextone(){
    if(audio.paused){
        discStart();
    }
let len:number=playlist.length;
for(let i:number=0;i<len;i++){
if("http://localhost:8080/"+playlist[i]['href']['song']===playing){
    if(i==len-1){
        i=-1;
    }
    audio.src=playlist[i+1]['href']['song'];
    playing="http://localhost:8080/"+playlist[i+1]['href']['song'];
    image.src=playlist[i+1]['href']['image'];
    audio.play();
    return;

}
}
}

// previous song
prev.addEventListener('click',prevone);
function prevone(){
    if(audio.paused){
        discStart();
    }
    let len:number=playlist.length;
    for(let i:number=0;i<len;i++){
    if("http://localhost:8080/"+playlist[i]['href']['song']===playing){
        if(i==0){
            i=len;
        }
        audio.src=playlist[i-1]['href']['song'];
        playing="http://localhost:8080/"+playlist[i-1]['href']['song'];
        image.src=playlist[i-1]['href']['image'];
        audio.play();
        return;
    
    }
    }
}

// adjusting song length
runningbar.addEventListener("mousedown",adjust);
function adjust(e){
    audio.currentTime=((e.offsetX/255)*100)/100*audio.duration;
}

setInterval(playpause,1);
setInterval(curr,1);
function playpause(){
    let ppimg= document.getElementById("play_pause_image");
    if(audio.paused){
       ppimg['src']="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c4fa.png";
    }
    else{
        ppimg['src']="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ITx1KlhmxXH3CTDi5dVGAkeN1ztxYJjFrg&usqp=CAU";
    }
}
function curr(){
    let state:HTMLElement=document.querySelector("#status");
    let len:number=playlist.length;
    for(let i:number=0;i<len;i++){
        if(playlist[i]['href']['song']===playing){
           state.innerText=`Track On :- ${playlist[i]['title']}`;
            return;
        
        }
        }
}