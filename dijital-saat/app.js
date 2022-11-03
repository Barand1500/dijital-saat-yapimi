function GetTime(){
    var now=new Date();
    var hour= now.getHours();
    var minutes= now.getMinutes();
    var second= now.getSeconds();

    var day=now.getDate();
    var month=now.getMonth()+1;
    var year= now.getFullYear();
    
    document.getElementById("hour").innerText=hour;
    document.getElementById("minute").innerText=minutes;
    document.getElementById("second").innerText=second;

    document.getElementById("date").innerText=day+"/"+month+"/"+year;

    if(second<10){
        document.getElementById("second").innerText="0"+second;
    }
    if(minutes<10){
        document.getElementById("minute").innerText="0"+minutes;
    }

    if(hour<10){
        document.getElementById("hour").innerText="0"+hour;
    }
}

setInterval(function(){GetTime();},1000);