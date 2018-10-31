const signupForm = document.getElementById('signup');

signupForm.addEventListener('submit', ({ target: { company, name, position, email, password } }) => {
  event.preventDefault();
  signUp(email.value, password.value)
    .then(({ user: { email, uid } }) => saveUser({ 
      uid,
      email,
      company: company.value,
      name: name.value,
      position: position.value, 
    }))
    .then(() => window.location = './home.html')
})
