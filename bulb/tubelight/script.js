function toggleTubelight() {
    let tubelight = document.querySelector('.tubelight');
    let switchBtn = document.querySelector('.switch');
    let switchText = document.getElementById('switch-status');

    tubelight.classList.toggle('on');
    switchBtn.classList.toggle('on');

    if (tubelight.classList.contains('on')) {
        switchText.textContent = "Turn Off";
    } else {
        switchText.textContent = "Turn On";
    }
}
