// let inp=prompt("enter an number from 0 to 100");
let num=Math.floor(Math.random()*100);
console.log("num is",num);
let entry=document.getElementById("entry");
let clicked=document.getElementById("btn");
let res=document.getElementById("result");
clicked.addEventListener('click',()=>{
    let val=entry.value;
    if(val<num){
        res.innerHTML+=`number ${val} is less <br>`;
    }
    else if(val>num){
        res.innerHTML+=`number ${val} is bigger<br>`;
    }
    else{
        alert("you won");
        res.innerHTML="";
    }
    entry.value="";
})