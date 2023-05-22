const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

const hourHandMoscow = document.querySelector('[data-hour-hand-moscow]');
const minuteHandMoscow = document.querySelector('[data-minute-hand-moscow]');
const secondHandMoscow = document.querySelector('[data-second-hand-moscow]');

const hourHandBrisbane = document.querySelector('[data-hour-hand-brisbane]');
const minuteHandBrisbane = document.querySelector('[data-minute-hand-brisbane]');
const secondHandBrisbane = document.querySelector('[data-second-hand-brisbane]');

function setClocks() {
  const currentTime = new Date();
  const moscowTime = new Date(currentTime.toLocaleString("en-US", { timeZone: "Europe/Moscow" }));
  const brisbaneTime = new Date(currentTime.toLocaleString("en-US", { timeZone: "Australia/Brisbane" }));

  const currentSecondsRatio = currentTime.getSeconds() / 60;
  const currentMinutesRatio = (currentSecondsRatio + currentTime.getMinutes()) / 60;
  const currentHoursRatio = (currentMinutesRatio + currentTime.getHours()) / 12;
  
  const moscowSecondsRatio = moscowTime.getSeconds() / 60;
  const moscowMinutesRatio = (moscowSecondsRatio + moscowTime.getMinutes()) / 60;
  const moscowHoursRatio = (moscowMinutesRatio + moscowTime.getHours()) / 12;
  
  const brisbaneSecondsRatio = brisbaneTime.getSeconds() / 60;
  const brisbaneMinutesRatio = (brisbaneSecondsRatio + brisbaneTime.getMinutes()) / 60;
  const brisbaneHoursRatio = (brisbaneMinutesRatio + brisbaneTime.getHours()) / 12;

  setRotation(secondHand, currentSecondsRatio);
  setRotation(minuteHand, currentMinutesRatio);
  setRotation(hourHand, currentHoursRatio);

  setRotation(secondHandMoscow, moscowSecondsRatio);
  setRotation(minuteHandMoscow, moscowMinutesRatio);
  setRotation(hourHandMoscow, moscowHoursRatio);

  setRotation(secondHandBrisbane, brisbaneSecondsRatio);
  setRotation(minuteHandBrisbane, brisbaneMinutesRatio);
  setRotation(hourHandBrisbane, brisbaneHoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
}

setInterval(setClocks, 1000);
setClocks();
