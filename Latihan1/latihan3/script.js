// function updateTime(){
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
//     const clock = document.querySelector('.clock');
//     clock.querySelector('.hour').textContent = hours;
//     clock.querySelector('.minute').textContent = minutes;
//     clock.querySelector('.second').textContent = seconds;
// }

// setInterval(updateTime, 1000);

// updateTime();

function showTime(){
    var date = new Date();
    var h = date.getHours(); //0-23
    var m = date.getMinutes(); //0-59
    var s = date.getSeconds();//0-59
    var session = "AM";

    if(h==0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session
    document.getElementById("clock_digital").innerText = time;
    document.getElementById("clock_digital").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();