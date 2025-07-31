// Add your JavaScript code here
let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let displayValue = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'clear') {
      displayValue = '';
      display.value = '';
    } else if (button.classList.contains('equal')) {
      try {
        displayValue = eval(displayValue);
        display.value = displayValue;
      } catch (error) {
        display.value = 'Error';
      }
    } else {
      displayValue += button.textContent;
      display.value = displayValue;
    }
  });
});