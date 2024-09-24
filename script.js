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

// Function to get or set the countdown date
function getCountdownDate() {
    let storedCountdownDate = localStorage.getItem('countdownDate');
    if (storedCountdownDate) {
        return parseInt(storedCountdownDate, 10); // Retrieve the stored end time
    } else {
        // Calculate the countdown end time and store it
        let countdownDate = new Date().getTime() + totalTime;
        localStorage.setItem('countdownDate', countdownDate); // Store the end time
        return countdownDate;
    }
}

// Set the countdown date from localStorage or calculate a new one
let countdownDate = getCountdownDate();

// Update the countdown every second
let countdownFunction = setInterval(() => {
    let now = new Date().getTime();
    let timeLeft = countdownDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    let seconds = Math.floor((timeLeft / 1000) % 60);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        clearInterval(countdownFunction);
        document.getElementById('countdown').innerHTML = "Completed!";
        localStorage.removeItem('countdownDate'); // Optionally remove the stored countdown when completed
    }
}, 1000);
