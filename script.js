let seconds_Watch = 0;
let minutes_Watch = 0;
let hours_Watch   = 0;

var interval_Watch;
let   stop_Watch    = document.getElementsByClassName("stopwatch")[0] 
const  button_Beggin = document.getElementsByClassName("button_beggin")[0];
const  button_Stop   = document.getElementsByClassName("button_stop")[0];
const  button_Stop_2 = document.getElementsByClassName("button_stop_2")[0];


button_Beggin.addEventListener("click", intervalWatch);
button_Stop.addEventListener("click", stopTime);
button_Stop_2.addEventListener("click", stopTheTime);

function begginWatch(){
    
    stop_Watch.innerHTML = '<p>' + "0" + hours_Watch + ':' + "0" + minutes_Watch + ":" + "0" + seconds_Watch + '</p>';
    seconds_Watch++;

    if (seconds_Watch > 60){

        seconds_Watch = 0;
        minutes_Watch++;
        stop_Watch.innerHTML = '<p>' + "0" + hours_Watch + ':' + "0" + minutes_Watch + ":" + "0" + seconds_Watch + '</p>';

    }


    if (seconds_Watch > 10){

        seconds_Watch--;
        stop_Watch.innerHTML = '<p>' + "0" + hours_Watch + ':' + "0" + minutes_Watch + ":" + seconds_Watch + '</p>';
        seconds_Watch++;

    }

    if (minutes_Watch > 59){

        seconds_Watch = 0;
        minutes_Watch = 0;
        hours_Watch++;
        stop_Watch.innerHTML = '<p>' + "0" + hours_Watch + ":" + minutes_Watch + ":" + "0" + seconds_Watch + '</p>';

    }

    if (minutes_Watch > 9){

        stop_Watch.innerHTML = '<p>' + "0" + hours_Watch + ":" + minutes_Watch + ":" + seconds_Watch + '</p>';

    }

    if (hours_Watch > 9){

        stop_Watch.innerHTML = '<p>' + hours_Watch + ":" + minutes_Watch + ":" + seconds_Watch + '</p>';

    }
}

function intervalWatch(e){
    
    interval_Watch = setInterval(begginWatch, 1 * 1000);
    e.target.removeEventListener(e.type, arguments.callee);

}

function stopTime(){
    
    button_Beggin.addEventListener("click", intervalWatch);
    clearInterval(interval_Watch);
  
}

function stopTheTime(){

    button_Beggin.addEventListener("click", intervalWatch);
    stop_Watch.innerHTML = '<p>' + "00:00:00" + '</p>';

    seconds_Watch = 0;minutes_Watch = 0;hours_Watch   = 0;
    clearInterval(interval_Watch);

}
