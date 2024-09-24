// Set the date for the countdown (example: 1 hour from now)
let countdownDate = new Date().getTime() + (240 * 240 * 4000); // Adjust time here as needed

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
