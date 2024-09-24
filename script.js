// Calculate total time in milliseconds
let yearsInMillis = 17 * 365 * 24 * 60 * 60 * 1000;
let monthsInMillis = 194 * 30 * 24 * 60 * 60 * 1000;
let weeksInMillis = 96 * 7 * 24 * 60 * 60 * 1000;
let daysInMillis = 481 * 24 * 60 * 60 * 1000;
let hoursInMillis = 48120 * 60 * 60 * 1000;
let minutesInMillis = 3922 * 60 * 1000;
let secondsInMillis = 4894 * 1000;
let milliseconds = 4789327423;

// Total time for countdown in milliseconds
let totalTime = yearsInMillis + monthsInMillis + weeksInMillis + daysInMillis + hoursInMillis + minutesInMillis + secondsInMillis + milliseconds;

// Set the countdown date
let countdownDate = new Date().getTime() + totalTime;

// Update the countdown every second
let countdownFunction = setInterval(() => {
    let now = new Date().getTime();
    let timeLeft = countdownDate - now;

    let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    let seconds = Math.floor((timeLeft / 1000) % 60);

    document.getElementById('countdown').innerHTML = `${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        clearInterval(countdownFunction);
        document.getElementById('countdown').innerHTML = "Completed!";
    }
}, 1000);
