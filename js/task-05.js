const nameInput = document.getElementById('name-input');
const nameOutputSpan = document.getElementById('name-output');

nameInput.addEventListener('input', () => {

  const inputValue = nameInput.value.trim();
  nameOutputSpan.textContent = inputValue !== '' ? inputValue : 'Anonymous';
});
