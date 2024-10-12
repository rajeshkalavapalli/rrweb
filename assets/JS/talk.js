document.getElementById('serviceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Always prevent default submission
  
    // Get values from input fields
    let firstName = document.getElementById('First-name').value;
    let lastName = document.getElementById('Last-name').value;
    let companyName = document.getElementById('Company-name').value;
    let phoneNumber = document.getElementById('Phone-number').value;
    let businessEmail = document.getElementById('Business-email').value;
    let jobTitle = document.getElementById('Job-title').value;
  
    // Simple validation (example)
    if (!firstName || !lastName || !businessEmail) {
      alert('Please fill out all required fields.');
      return;
    }
  
    alert('Form submitted successfully!');
  
    // Redirect to another page or refresh the same page after submission
    window.location.href = "thank-you.html"; // Replace with your redirect URL
  });
  
