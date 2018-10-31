const loginForm = document.getElementById('login');

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const { target: { email, password } } = event;
  signIn(email.value, password.value).then(console.log).catch(console.error)
})