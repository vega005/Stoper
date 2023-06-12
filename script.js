var milisecond = 0;
var second = 0;
var minutes = 0;
var houers = 0;
var timer = true;

function stopwatch(){
    if(timer != true){
        timer = true;
        return;
    }
    document.getElementById("stop").disabled = false;
    document.getElementById("reset").disabled = false;
    document.getElementById("start").disabled = true;
    var el = document.getElementById("screen");
    milisecond += 1;
    //1000ms=1s
    if(milisecond==10){
        second += 1;
        milisecond = 0;
    }//60s=1m
    if(second==60){
        minutes += 1;
        second = 0;
    }//60m=1h
    if(minutes==60){
        houers += 1;
        minutes = 0;
    }

    el.innerHTML = houers + ' : ' + addZero(minutes) + ' : ' + addZero(second) + ' : ' + addZero(milisecond);
    setTimeout(stopwatch, 100);
}

function stop(){
    timer = false;
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}

function reset(){
    milisecond = 0;
    second = 0;
    minutes = 0;
    houers = 0;
    var el = document.getElementById("screen");
    el.innerHTML='0 : 00 : 00 : 00';
}

function addZero(n){
    return (n < 10 ? '0' : '') + n;
}
