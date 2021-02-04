const YMDContainer = document.querySelector(".YMD");

function grtYMD(){
  const date = new Date();
  var Year = date.getFullYear();
  var month = (date.getMonth())+1;
  var day = date.getDate();
  var week = ['일','월','화','수','목','금','토'];
  var dayOfWeek = week[date.getDay()];
  YMDContainer.innerText = `${Year}년 ${month < 10 ? `0${month}` : month}월 ${day < 10 ? `0${day}` : day}일 ${dayOfWeek}요일`;
}


function init(){
  grtYMD();
}

init();