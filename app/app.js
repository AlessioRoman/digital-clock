let seconds = 0;
let minutes = 0;
let timer = null

document.getElementById("start").onclick = function startTimer(){
    timer = setInterval(function mainCounter(){ 
        seconds += 1;
        if(seconds < 10){
            document.getElementById("seconds").innerHTML = '0' + seconds.toString();
        } else if(seconds < 59 && seconds >= 10){
            appendSeconds = seconds.toString();
            document.getElementById("seconds").innerHTML = seconds.toString();
        } else if(seconds == 60){
            minutes += 1;
            seconds = 0;
            document.getElementById("seconds").innerHTML = '0' + seconds.toString();
            if (minutes < 10){
                document.getElementById("minutes").innerHTML = '0' + minutes.toString();
            } else {
                document.getElementById("minutes").innerHTML = minutes.toString();
            }
        }
    }, 1000);
}

document.getElementById("stop").onclick = function stopTimer(){
    clearInterval(timer);
    if (seconds < 10){
        document.getElementById("seconds").innerHTML = '0' + seconds.toString();
    } else {
        document.getElementById("seconds").innerHTML = seconds.toString();
    }

    if (minutes < 10){
        document.getElementById("minutes").innerHTML = '0' + minutes.toString();
    } else {
        document.getElementById("minutes").innerHTML = minutes.toString();
    }
}

document.getElementById("reset").onclick = function startTimer(){
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    document.getElementById("seconds").innerHTML = '0' + seconds.toString();
    document.getElementById("minutes").innerHTML = '0' + minutes.toString();
}