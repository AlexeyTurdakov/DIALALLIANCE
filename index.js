"use strict";

let btnTimerStart = document.querySelector(".btn-timer-start");
let btnTimerStop = document.querySelector(".btn-timer-stop");
let spanTimerOut = document.querySelector(".span-timer-out");
let btnReset = document.querySelector(".btn-reset");
let sec = 0;
let timer;

btnTimerStart.addEventListener("click", () => {
  timer = setInterval(() => {
    sec++;
    btnTimerStart.style.display = "none";
    btnTimerStop.style.display = "block";
  }, 1000);
});

btnTimerStop.addEventListener("click", () => {
  clearInterval(timer);
  btnTimerStop.style.display = "none";
  spanTimerOut.innerHTML = `Время измерения: ${getHoursMinutesFromSeconds(
    sec
  )}`;
  sec = 0;
});

btnReset.addEventListener("click", () => {
  spanTimerOut.innerHTML = "";
  btnTimerStart.style.display = "block";
  btnTimerStop.style.display = "none";
});

/*Функция вычисления времени измерения*/

function getHoursMinutesFromSeconds(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  let second = seconds - hours * 3600 - minutes * 60;
  return `${hours}:${minutes}:${second}`;
}
