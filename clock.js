const clockContainer = document.querySelector(".js_clock");
const mainContainer = document.querySelector(".main");
const secondContainer = document.querySelector(".second");
const ampmContainer = document.querySelector(".ampm");


const clockTitle = clockContainer.querySelector("span");



function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  var hours = date.getHours();
  var ampm = hours>= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  ampmContainer.innerText = `${ampm}`;
  secondContainer.innerText = `${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime,500);
}
init();