const lang=navigator.language;
let date=new Date();

let month=date.getMonth();
let dayNumber=date.getDate();
let dayName=date.toLocaleString(lang,{weekday:"long"});
let monthName=date.toLocaleString(lang,{month:"long"});
let year=date.getFullYear();



document.getElementById("monthName").innerHTML=monthName;
document.getElementById("dayName").innerHTML=dayName;
document.getElementById("dayNumber").innerHTML=dayNumber;
document.getElementById("year").innerHTML=year;

function currentTime (){
    const time = document.getElementById("time");
   time.textContent = new Date().toLocaleTimeString();
}

setInterval(currentTime, 1000);





