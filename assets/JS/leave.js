document.getElementById("leaveDateStart").addEventListener("change", toggleExplanationSection);
document.getElementById("leaveDateEnd").addEventListener("change", toggleExplanationSection);

document.getElementById("submitLeaveBtn").addEventListener("click", function() {
    const leaveType = document.getElementById("leaveType").value;
    const startDate = document.getElementById("leaveDateStart").value;
    const endDate = document.getElementById("leaveDateEnd").value;
    const explanation = document.getElementById("leaveExplanation").value;

    // Validation
    if (!leaveType || !startDate || !endDate) {
        alert("Please fill in all required fields.");
        return;
    }

    // Ensure end date is after start date
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start > end) {
        alert("End date must be after start date.");
        return;
    }

    // Calculate leave days
    const timeDiff = end - start;
    const leaveDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; // Include both start and end dates

    // Simulate leave application process
    const isApproved = Math.random() > 0.5; // Randomly approve or reject for demonstration

    // Display leave days and approval status
    const leaveDaysCount = document.getElementById("leaveDaysCount");
    leaveDaysCount.innerHTML = `<strong>Leave Days Requested:</strong> ${leaveDays} days`;

    const approvalStatus = document.getElementById("approvalStatus");
    approvalStatus.innerHTML = `<strong>Leave Application Status:</strong> ${isApproved ? "Approved" : "Rejected"}`;

    // Clear form after submission
    document.getElementById("leaveType").value = "";
    document.getElementById("leaveDateStart").value = "";
    document.getElementById("leaveDateEnd").value = "";
    document.getElementById("leaveExplanation").value = "";
});

function toggleExplanationSection() {
    const leaveType = document.getElementById("leaveType").value;
    const explanationSection = document.getElementById("leaveExplanationSection");
    
    // Show explanation section only if leave type is not selected
    if (leaveType) {
        explanationSection.style.display = "block";
    } else {
        explanationSection.style.display = "none";
    }
}
