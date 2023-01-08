const timeElement = document.getElementById('time');
const hourDiv = document.getElementById('hour');
const minuetDiv = document.getElementById('minuet');
const secondDiv = document.getElementById('second');
const am_pmDiv = document.getElementById('meridian');

const dateElement = document.getElementById('date');
const timeFormatBtn = document.getElementById('time-format');

const currentDate = new Date();
tickClock();
const currentDay = currentDate.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
})

dateElement.innerText = currentDay;

let timeFormat = true;
function tickClock() {
    setInterval(() => {
        const date = new Date();
        const hour = date.getHours();
        const minuet = date.getMinutes();
        const second = date.getSeconds();

        if(timeFormat && hour > 12) {
            hourDiv.innerText = hour - 12;
        } else {
            hourDiv.innerText = hour.toString().padStart(2, '0');
        }
        minuetDiv.innerText = minuet;
        secondDiv.innerText = second.toString().padStart(2, '0');
        am_pmDiv.innerText = hour < 12 ? 'AM' : 'PM';
    
    }, 10)
}

timeFormatBtn.addEventListener('click', () => {
    timeFormat ? timeFormatBtn.innerText = 'Set to Standard Time' :
        timeFormatBtn.innerText = 'Set to Military Time';
    timeFormat ? timeFormat = false : timeFormat = true;
})