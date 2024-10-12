document.getElementById('changeProfileImageBtn').addEventListener('click', () => {
    document.getElementById('uploadProfileImage').click();
  });
  
  document.getElementById('uploadProfileImage').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('profileImage').src = e.target.result; // Update profile image
      }
      reader.readAsDataURL(file); // Read the image file
    }
  });
  



// Add this to your profile.js or in a script tag at the bottom of the HTML

const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    modeToggle.textContent = body.classList.contains('dark-mode') 
        ? 'Switch to Light Mode' 
        : 'Switch to Dark Mode';
});



// Initialize the performance chart with dynamic data
const ctx = document.getElementById('performanceChart').getContext('2d');

// Sample Data for the Performance (replace with your actual data)
const dailyTasksCompleted = 12;
const dailyTarget = 20;
const weeklyTasksCompleted = 60;
const weeklyTarget = 100;

// Bar Chart configuration
const performanceChart = new Chart(ctx, {
    type: 'bar',  // Use 'bar' for a bar chart (you can change this to 'line', 'pie', etc.)
    data: {
        labels: ['Daily Target', 'Weekly Target'],  // Labels for the bars
        datasets: [{
            label: 'Task Completion',
            data: [dailyTasksCompleted, weeklyTasksCompleted],  // Task completion data
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],  // Bar colors
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],  // Border colors
            borderWidth: 1  // Border width of the bars
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,  // Ensure the Y-axis starts at 0
                max: Math.max(dailyTarget, weeklyTarget),  // Set maximum based on the largest target
            }
        }
    }
});



//attend

// Add this to your profile.js

const targetStatus = document.getElementById('targetStatus');
const explanationSection = document.getElementById('explanationSection');

if (targetStatus.textContent.includes('Not Met')) {
    explanationSection.style.display = 'block';
}

document.getElementById('submitExplanation').addEventListener('click', () => {
    const explanation = document.getElementById('explanation').value;
    if (explanation) {
        alert('Explanation submitted: ' + explanation);
    } else {
        alert('Please provide an explanation.');
    }
});

//leave

// Add this to your leave.js

const leaveType = document.getElementById('leaveType');
const leaveExplanationSection = document.getElementById('leaveExplanationSection');

leaveType.addEventListener('change', () => {
    if (leaveType.value === 'sick') {
        leaveExplanationSection.style.display = 'block';
    } else {
        leaveExplanationSection.style.display = 'none';
    }
});

document.getElementById('submitLeaveBtn').addEventListener('click', () => {
    const leaveStart = document.getElementById('leaveDateStart').value;
    const leaveEnd = document.getElementById('leaveDateEnd').value;
    if (leaveStart && leaveEnd) {
        alert(`Leave request submitted from ${leaveStart} to ${leaveEnd}`);
    } else {
        alert('Please select the leave dates.');
    }
});
