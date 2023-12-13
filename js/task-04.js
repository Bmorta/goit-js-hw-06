const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.getElementById('value');


let counterValue = 0;

decrementButton.addEventListener('click', () => {
  
  counterValue--;
  counterValueSpan.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
 
  counterValue++;
  counterValueSpan.textContent = counterValue;
});
