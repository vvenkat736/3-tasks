function toggleTubelight() {
    let tubelight = document.querySelector('.tubelight');
    let switchBtn = document.querySelector('.switch');
    let switchText = document.getElementById('switch-status');
   
    if (!tubelight.classList.contains('on')) {
     tubelight.classList.add('on');
     switchBtn.classList.add('on');
     switchText.textContent = "Turn Off";
     let flickerInterval = setInterval(() => { tubelight.classList.toggle('on'); }, 300);
     setTimeout(() => {
      clearInterval(flickerInterval);
      tubelight.classList.remove('on');
      switchBtn.classList.remove('on');
      switchText.textContent = "Turn On";
     }, 5000);
    } else {
     tubelight.classList.remove('on');
     switchBtn.classList.remove('on');
     switchText.textContent = "Turn On";
    }
   }
   