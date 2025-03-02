function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = ((hours % 12) * 30) + (minutes * 0.5);
    const minuteDeg = (minutes * 6) + (seconds * 0.1);
    const secondDeg = seconds * 6;

    document.getElementById('hourHand').style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
    document.getElementById('minuteHand').style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
    document.getElementById('secondHand').style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;

    // Update the footer timeline
    updateTimeDisplay(hours, minutes, seconds);
}

function updateTimeDisplay(hours, minutes, seconds) {
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = ((hours % 12) || 12).toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    document.getElementById('timeDisplay').innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${period}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Call immediately to avoid delay
