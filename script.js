var timer = 60;
var score = 0;
var hitrn = 0;



function increaseScore(){
   score += 10;
   document.querySelector(".scoreval").textContent = score;
}

function getNewHit(){
   hitrn = Math.floor(Math.random() * 10);
   document.querySelector(".hitval").textContent = hitrn;
}

function makeBubble(){
   var x="";


for(var i = 1;i<=102; i++){
   var y = Math.floor(Math.random()*10)
   x +=  `<div class="bubble">${y} </div>`;
}

document.querySelector("#pbtm").innerHTML=x;
}


function runTime(){
var timerint = setInterval(function(){
      if(timer>0){
         timer--;
         document.querySelector(".timerval").textContent = timer;
      }else{
         clearInterval(timerint);
         document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
      }
      
    },1000);
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
   var clickednum = Number(dets.target.textContent);
     if(clickednum === hitrn)
     increaseScore();
     makeBubble();
     getNewHit();
})



 getNewHit();
 runTime();
 makeBubble();