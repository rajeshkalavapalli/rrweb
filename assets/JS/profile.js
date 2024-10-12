// Chart.js for performance overview
const ctx = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Completed', 'Remaining'],
        datasets: [{
            data: [12, 8],
            backgroundColor: ['#28a745', '#ff6347'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        }
    }
});

// Dark/Light Mode Toggle
const toggleButton = document.getElementById('modeToggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});

// Profile Customization - Background Change
const customizeBtn = document.querySelector('.customize-btn');
const backgroundImageInput = document.getElementById('backgroundImageInput');

customizeBtn.addEventListener('click', () => {
    backgroundImageInput.click();
});

backgroundImageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.body.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
    }
});


document.getElementById('submitExplanation').addEventListener('click', function() {
    const explanation = document.getElementById('explanation').value;

    if (explanation.trim() === '') {
        alert("Please provide an explanation.");
    } else {
        // Send the explanation to the backend using Fetch API (or any other method)
        fetch('/submit-explanation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                explanation: explanation,
                employeeId: 'E12345', // Example employee ID
                remainingTasks: remainingTasks,
            }),
        })
        .then(response => response.json())
        .then(data => {
            alert("Explanation submitted successfully.");
            document.getElementById('explanation').value = ''; // Clear the textarea
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});


