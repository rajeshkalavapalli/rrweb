document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the normal way

    // Capture the values from the form
    let firstName = document.getElementById('First name').value;
    let lastName = document.getElementById('Last name').value;
    let companyName = document.getElementById('Company name').value;
    let mobileNumber = document.getElementById('mobile').value;
    let businessEmail = document.getElementById('Business email').value;
    let jobTitle = document.getElementById('Job title').value;

    // For now, let's just log the values to the console
    console.log({
      firstName,
      lastName,
      companyName,
      mobileNumber,
      businessEmail,
      jobTitle
    });

    // Display a confirmation message to the user
    alert('Form submitted successfully! Thank you for your interest.');

    // Redirect the user to another page (e.g., a thank-you page)
    window.location.href = "thank-you.html"; // Replace with the actual URL
});

