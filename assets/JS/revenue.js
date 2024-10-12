document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Capture values
    let firstName = document.getElementById('First-name').value;
    let lastName = document.getElementById('Last-name').value;
    let companyName = document.getElementById('Company-name').value;
    let phoneNumber = document.getElementById('Phone-number').value;
    let businessEmail = document.getElementById('Business-email').value;
    let jobTitle = document.getElementById('Job-title').value;

    // Log captured values (this could be sent to a server instead)
    console.log({
        firstName,
        lastName,
        companyName,
        phoneNumber,
        businessEmail,
        jobTitle
    });

    // Display a success message or redirect to another page
    alert('Form submitted successfully!');

    // Optionally redirect the user
    window.location.href = "thank-you.html"; // Replace with your actual redirect URL
});
