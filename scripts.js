document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  if (email === 'admin@example.com' && password === 'admin') {
    message.textContent = 'Login successful!';
    message.style.color = 'green';
    window.location.href = 'https://www.example.com';
  } else {
    message.textContent = 'Invalid email or password.';
    message.style.color = 'red';
  }
});
