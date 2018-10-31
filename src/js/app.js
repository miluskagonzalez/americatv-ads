auth.onAuthStateChanged(user => {
  if(user) {
    window.location = './views/home.html';
  } else {
    window.location = './views/login.html';
  }
})