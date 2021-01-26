const clockContainer = document.querySelector(".js_clock");
const mainContainer = document.querySelector(".main");
const secondContainer = document.querySelector(".second");


const clockTitle = clockContainer.querySelector("span");



function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  secondContainer.innerText = `${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime,500);
}
init();