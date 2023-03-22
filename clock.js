const clock = document.querySelector("h2#clock");
const time = document.querySelector("h2#time");

function getTime(){
    const today = new Date();
    const year = String(today.getFullYear()).padStart(4, "0");
    const month = String(today.getMonth()+1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    time.innerText = `${year}. ${month}. ${date}`;
} 


function getClock(){
    const today = new Date();
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;

}
getClock();
getTime();
setInterval(getClock, 1000);
setInterval(getTime, 1000);