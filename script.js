const decreaseButton = document.getElementById('decreaseCelsius');
const increaseButton = document.getElementById('increaseCelsius');
const celsiusValue = document.getElementById('celsiusValue');
const kelvinValue = document.getElementById('kelvinValue');

let currentCelsius = 0;

decreaseButton.addEventListener('click', function() {
  currentCelsius -= 1;
  updateValues();
});

increaseButton.addEventListener('click', function() {
  currentCelsius += 1;
  updateValues();
});

function updateValues() {
  celsiusValue.textContent = currentCelsius;
  kelvinValue.textContent = (currentCelsius + 273.15).toFixed(2);
}
