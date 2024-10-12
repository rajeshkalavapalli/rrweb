document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('Username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        // Log in success message
        alert('Logging in...');

        // Optional: Perform further server-side authentication here via AJAX, fetch, or other methods

        // Redirect to the dashboard or another page after login
        window.location.href = 'dashboard.html';  // Replace 'dashboard.html' with your actual page
    }
});
