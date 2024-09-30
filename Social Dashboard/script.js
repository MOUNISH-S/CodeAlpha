const loginPage = document.getElementById('login-page');
const dashboardPage = document.getElementById('dashboard');
const loginForm = document.getElementById('login-form');
const userName = document.getElementById('user-name');

// Handle Login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simple Authentication (For demonstration purposes)
  if (email === 'user@example.com' && password === 'password') {
    loginPage.classList.add('hidden');
    dashboardPage.classList.remove('hidden');
    userName.textContent = 'User';  // Set Username
  } else {
    alert('Invalid login details!');
  }
});

// Handle Logout
function logout() {
  loginPage.classList.remove('hidden');
  dashboardPage.classList.add('hidden');
}
