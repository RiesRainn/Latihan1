function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hrRotation = 360 * (hh / 12) + 30 * (mm / 60);
    let mnRotation = 360 * (mm / 60);
    let scRotation = 360 * (ss / 60);

    let hr = document.querySelector('.hour-hand');
    let mn = document.querySelector('.minute-hand');
    let sc = document.querySelector('.second-hand');

    hr.style.transform = `rotate(${hrRotation}deg)`;
    mn.style.transform = `rotate(${mnRotation}deg)`;
    sc.style.transform = `rotate(${scRotation}deg)`;
}

setInterval(displayTime, 1000);