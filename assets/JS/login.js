document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('Username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        // Proceed with form 
        alert('Logging in...');
        this.submit(); 
    }
});
