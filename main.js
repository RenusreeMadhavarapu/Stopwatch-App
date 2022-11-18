let timeCount= document.querySelector(".watch .time");
let startBtn= document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let count=0;
let interval=null;
startBtn.addEventListener("click",start);
stopBtn.addEventListener("click",stop);
resetBtn.addEventListener("click",reset);

function stopWatch(){
    count++;
    
     
    let hrs = Math.floor(count/3600);
    let mins = Math.floor((count-(hrs*3600))/60);
    let seconds=count%60;

    if(seconds<10){seconds="0"+seconds}
    if(mins<10){mins="0"+mins}
    if(hrs<10){hrs="0"+hrs}
    timeCount.innerText=`${hrs}:${mins}:${seconds}`;
  

}


function start(){


    if(interval){

        return
    }
    interval =setInterval(stopWatch,1000)
}

function stop(){

    clearInterval(interval);
    interval=null;
}

function reset(){

    stop();
    count=0;
    timeCount.innerText="00:00:00"
}