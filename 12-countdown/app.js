const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'Octupus',
    'November',
    'December'
];
const todays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thurday',
    'Friday',
    'Saturday',
    'Sunday'
]

//1. put the date to display

// get element 
const giveAway = document.querySelector('.give-away');
const btnTimeDisplay = document.querySelectorAll('.deadline-format');
const deadline = document.querySelector('.btn-timer');
// current time
let timeDate = new Date();
let tempYear = timeDate.getFullYear();
let tempMonth = timeDate.getMonth();
let tempDay = timeDate.getDate();
let tempHour = timeDate.getHours();
let tempMinute = timeDate.getMinutes();
let tempSeconds = timeDate.getSeconds();

let futureDate = new Date(tempYear, tempMonth, tempDay+ 1,tempHour,tempMinute, tempSeconds);
console.log(futureDate);
// get time future
let futureYear = futureDate.getFullYear();
let futureMonth = months[futureDate.getMonth()];
let futureDay = futureDate.getDate();
 let futureWeekend = todays[futureDate.getDay()];
 let futureHour = futureDate.getHours();
 let futureMinute = futureDate. getMinutes();
 let futureSecond =futureDate. getSeconds();

window.addEventListener('DOMContentLoaded',() =>{
    giveAway.innerHTML = `Give away end on ${futureWeekend},${futureDay} ${futureMonth} ${futureYear}, ${futureHour}h:${futureMinute}m`;
})

// remaining time
futureTime = futureDate.getTime();
function remaindingTime(){
    let today = new Date().getTime();
    let t = futureTime - today;
    console.log(t);
    //milisecond second 
    let day = 24*60*60*1000;
    let hour = 60*60*1000;
    let minute = 60*1000;
    // how many day remaiding
    let days = Math.floor(t/day);
    let hours = Math.floor((t%day)/hour);
    let minutes = Math.floor((t%hour)/minute);
    let seconds = Math.floor((t%minute)/1000);

    
    // set value array
    let value = [days,hours,minutes,seconds];
    
    btnTimeDisplay.forEach((item, index) =>{
        item.innerHTML = format(value[index]);
    });
    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
      }
}
function format(item){
    if(item <10){
        return `0${item}`;
    }
    else{
        return item;
    }
}
// countdown;
let countdown = setInterval(remaindingTime, 1000);
remaindingTime()