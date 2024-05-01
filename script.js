const decreaseButton = document.getElementById('decreaseCelsius');
const increaseButton = document.getElementById('increaseCelsius');
const celsiusValue = document.getElementById('celsiusValue');
const kelvinValue = document.getElementById('kelvinValue');

let currentCelsius = 0;

decreaseButton.addEventListener('click', function() {
  currentCelsius -= 1;
  updateValues();
});

setInterval(function () {
    const newBubble = document.createElement('div');
    newBubble.classList.add('bubbles');
    document.body.appendChild(newBubble);
    newBubble.style.top = Math.floor(Math.random() * window.innerHeight + 1) + 'px';
    newBubble.style.left = Math.floor(Math.random() * window.innerWidth + 1) + 'px';
    // newBubble.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    const myDirection = Math.floor(Math.random() * 5);
    setTimeout(function () {
      newBubble.style.opacity = '0.5';
    }, 1);
    const speed = 0.16;
    let mytime = setInterval(function () {
      if (myDirection == 1) {
        newBubble.style.top = (parseInt(newBubble.style.top) - speed) + 'px';
        newBubble.style.left = (parseInt(newBubble.style.left) - speed) + 'px';
      } else if (myDirection == 2) {
        newBubble.style.top = (parseInt(newBubble.style.top) - speed) + 'px';
        newBubble.style.right = (parseInt(newBubble.style.right) - speed) + 'px';
      } else if (myDirection == 3) {
        newBubble.style.top = (parseInt(newBubble.style.top) + speed) + 'px';
        newBubble.style.left = (parseInt(newBubble.style.left) + speed) + 'px';
      } else {
        newBubble.style.top = (parseInt(newBubble.style.top) + speed) + 'px';
        newBubble.style.right = (parseInt(newBubble.style.right) + speed) + 'px';
      }
      if (newBubble.style.top <= 0) return clearInterval(mytime);
      if (newBubble.style.left <= 0) return clearInterval(mytime);
      if (newBubble.style.right >= window.innerWidth) return clearInterval(mytime);
      if (newBubble.style.bottom >= window.innerWidth) return clearInterval(mytime);
    }, 1000 / 60);
    setTimeout(function () {
      newBubble.classList.add('bubble-hide');
      setTimeout(function () {
        newBubble.remove();
      }, 2000);
    }, Math.floor(Math.random() * 1000) + 2000);
  }, 900);

function updateValues() {
  celsiusValue.textContent = currentCelsius;
  kelvinValue.textContent = (currentCelsius + 273.15).toFixed(2);
}

increaseButton.addEventListener('click', function() {
  currentCelsius += 1;
  updateValues();
});
