var hh = 0;
var mm = 0;
var ss = 0;
var dd = 0

var tempo = 10; //Quanto milésimos valem 1 segundos?
var cron;

function start(){

    cron = setInterval(function(){
        timer()
    }, tempo);

}

function pause(){
    clearInterval(cron);
}

function stop(){
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById("counter").innerText = "00:00:00:00";
}

function timer(){

    dd++

    if(dd == 100){
        dd = 0
        ss++
        if(ss == 60){
            ss = 0;
            mm++;
    
            if(mm == 60){
                mm = 0;
                hh++;
            }
        }
    }


    var format = (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss) + ":" + (dd < 10 ? "0" + dd : dd);
    document.getElementById("counter").innerText = format;
}