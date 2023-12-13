const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
 
  event.preventDefault();

  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;

  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    // Display alert for empty fields
    alert('Please fill in all fields');
  } else {
    
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData);

    this.reset();
  }
});

loginForm.elements.email.setAttribute('autocomplete', 'username');
