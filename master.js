var score = 0;
var hitrn=0;
function getscore(){
    score+=10;
    document.querySelector(".scoreval").textContent=score;
}
function makeBubble(){
    var clutter= " ";
for(var i=0;i<=100;i++){
    var rn= Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbottom").innerHTML = clutter;
}
var timer = 60;
function runtimmer(){
    var time = setInterval(function (){
        if(timer>0){
        timer--;
        document.querySelector(".timerval").textContent=timer;}
        else{
            clearInterval(time);
            document.querySelector("#pbottom").innerHTML= `<h1>Game Over Score is ${score}</h1>`;
        }
    },1000);
}
function getnewhit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector(".hit").innerHTML=hitrn;
}

document.querySelector("#pbottom").addEventListener("click",function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum==hitrn){
        getscore();
        makeBubble();
        getnewhit();
    }
})
getnewhit();
runtimmer();
makeBubble();
getscore();