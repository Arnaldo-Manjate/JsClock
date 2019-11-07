
const secondsHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(params) {
    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();
    // convert seconds to degrees
    var secondDegrees = ((seconds/60) * 360) + 90; // we Add the 90 deg to make up for 
    var minuteDegrees = ((minutes/60) * 360) + 90; // the rotate 90 we added in the css file.
    var hourDegrees = ((hours/12) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(hours,'\n',hourDegrees);
}
// Running The Timer
setInterval(setDate,1000);