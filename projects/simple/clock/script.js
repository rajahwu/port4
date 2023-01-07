const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');

const currentDate = new Date();
tickClock();
const currentDay = currentDate.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
})

dateElement.innerText = currentDay;

function tickClock() {
    setInterval(() => {
        const date = new Date();
        const time = date.toLocaleTimeString();
        timeElement.innerText = time;
    }, 1000)
}