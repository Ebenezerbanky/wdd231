const navBtn = document.querySelector("#nav-btn");
const navEl = document.querySelector("nav");
const dateEl = document.querySelector("#header-date");
const footerEl = document.querySelector("#footer-year")
const modEl = document.querySelector(".last-modification");
const banner = document.querySelector(".banner");
const visitString = document.querySelector("#visit-string");
const hiddenInput = document.querySelector("#curtime");
const curDate = new Date();


let count = 1;
let dayText;
const today = Math.floor(curDate/8.64e7);
const formerday = Number(localStorage.getItem("lastDay"));
const daydiff = today - formerday
if(daydiff > 1){
    dayText = `${Math.round(daydiff)} days ago | Visit count:${localStorage.getItem("count")}`
}else{
    dayText = `This is your first day visiting | Visit count:${localStorage.getItem("count")}`;
}
visitString.textContent = dayText;




const now = Math.floor(curDate/8.64e7)
localStorage.setItem("lastDay", now)
count = localStorage.getItem("count");
count++
localStorage.setItem("count", count);




navBtn.addEventListener("click", function(){
    navEl.classList.toggle("open")
    navBtn.classList.toggle("open")
});

const curDay = function(){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[curDate.getDay()]}
const curDayofMonth = curDate.getDate()
const curMonth = function(){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"]
    return months[curDate.getMonth()]};
const curYear = curDate.getFullYear();
const curMinute = curDate.getMinutes();
const curSecond = curDate.getSeconds();
const curHour = curDate.getHours;

dateEl.innerHTML = `${curDay()}, ${curDayofMonth} ${curMonth()} ${curYear}`;

footerEl.innerHTML = `&copy${curYear} MainLand Valley Chamber`

const lastModifiedDate = new Date(document.lastModified)

let modYear = lastModifiedDate.getFullYear();
let modDay = lastModifiedDate.getDay();
let modMonth = lastModifiedDate.getMonth();
let modminute = lastModifiedDate.getMinutes();
let modsecond = lastModifiedDate.getSeconds()
let modhour = lastModifiedDate.getHours(); 

modEl.innerHTML = `Last Updated: ${modMonth}/${modDay}/${modYear} ${modhour}:${modminute}:${modsecond}`

if(curDay() == "Monday" || curDay() == "Tuesday"){
    banner.classList.remove("hide")
}else{
    banner.classList.add("hide")
}

