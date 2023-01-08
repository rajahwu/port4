const hourDiv = document.getElementById('hour');
const minuetDiv = document.getElementById('minuet');
const secondDiv = document.getElementById('second');
const am_pmDiv = document.getElementById('meridian');
const dayDiv = document.getElementById('date');
const timeFormatBtn = document.getElementById('time-format');

let timeFormat = true;
tickClock();

timeFormatBtn.addEventListener('click', () => {
    timeFormat ? timeFormatBtn.innerText = 'Set to Standard Time' :
        timeFormatBtn.innerText = 'Set to Military Time';
    timeFormat ? timeFormat = false : timeFormat = true;
});

function tickClock() {
    setInterval(() => {
        const date = new Date(), hour = date.getHours(),
            minuet = date.getMinutes(), second = date.getSeconds();

        timeFormat && hour > 12 ?
            hourDiv.innerText = hour - 12 :
            hourDiv.innerText = hour.toString().padStart(2, '0');

        minuetDiv.innerText = minuet.toString().padStart(2, '0');
        secondDiv.innerText = second.toString().padStart(2, '0');
        am_pmDiv.innerText = hour < 12 ? 'AM' : 'PM';

        dayDiv.innerText = date.toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }, 10);
};
