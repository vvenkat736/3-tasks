let bulb = document.querySelector('.bulb');
let blinkCount = 0;
let interval = setInterval(() => {
    bulb.classList.toggle('hidden');
    blinkCount++;
    if (blinkCount >= 6) { // 3 seconds (0.5s per blink cycle)
        clearInterval(interval);
        bulb.classList.remove('hidden');
    }
}, 500);
