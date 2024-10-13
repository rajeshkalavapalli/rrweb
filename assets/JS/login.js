// Handle dropdown login links
document.getElementById('adminLogin').addEventListener('click', function() {
    document.getElementById('loginTitle').textContent = 'ADMIN LOGIN';
    // Optionally, you can store the login type in a variable if needed
    loginType = 'admin'; // Assuming you want to set a variable
});

document.getElementById('associateLogin').addEventListener('click', function() {
    document.getElementById('loginTitle').textContent = 'ASSOCIATE LOGIN';
    // Optionally, you can store the login type in a variable if needed
    loginType = 'associate'; // Assuming you want to set a variable
});

// Event listener for form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('Username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
        return; // Exit if validation fails
    }

    // Determine profile path based on login title
    let profilePath = '';

    if (document.getElementById('loginTitle').textContent === 'ADMIN LOGIN') {
        profilePath = 'admin_profile.html'; // Set path for Admin profile
    } else if (document.getElementById('loginTitle').textContent === 'ASSOCIATE LOGIN') {
        profilePath = 'associate_profile.html'; // Set path for Associate profile
    } else {
        alert('Please select either Admin or Associate login');
        return; // Exit if no type is selected
    }

    // Log in success message
    alert('Logging in...');

    // Redirect to the appropriate profile page after login
    window.location.href = profilePath;  // Redirect based on the determined profile path
});

