document.addEventListener('DOMContentLoaded', () => {
    const userTableBody = document.getElementById('user-table-body');
    const totalUsersElement = document.getElementById('total-users');

    // Function to update user statistics
    function updateStatistics() {
        const userRows = userTableBody.querySelectorAll('tr');
        totalUsersElement.textContent = userRows.length;
    }

    // Function to delete a user
    function deleteUser(row) {
        userTableBody.removeChild(row);
        updateStatistics();
    }

    // Function to edit a user
    function editUser(row) {
        const cells = row.querySelectorAll('td');
        const name = prompt('Edit Name:', cells[1].textContent);
        const email = prompt('Edit Email:', cells[2].textContent);
        const status = prompt('Edit Status:', cells[3].textContent);
        
        if (name) cells[1].textContent = name;
        if (email) cells[2].textContent = email;
        if (status) cells[3].textContent = status;
    }

    // Function to add a new user
    function addUser(id, name, email, status) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${status}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        userTableBody.appendChild(newRow);
        updateStatistics();
    }

    // Event delegation for edit and delete buttons
    userTableBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const row = event.target.closest('tr');
            if (confirm('Are you sure you want to delete this user?')) {
                deleteUser(row);
            }
        }

        if (event.target.classList.contains('edit-btn')) {
            const row = event.target.closest('tr');
            editUser(row);
        }
    });

    // Example: Adding a new user (you can trigger this with a button click)
    document.getElementById('add-user-btn').addEventListener('click', () => {
        const userId = prompt('Enter User ID:');
        const userName = prompt('Enter User Name:');
        const userEmail = prompt('Enter User Email:');
        const userStatus = prompt('Enter User Status:');
        
        if (userId && userName && userEmail && userStatus) {
            addUser(userId, userName, userEmail, userStatus);
        } else {
            alert('Please fill out all fields to add a new user.');
        }
    });

    // Initial statistics update
    updateStatistics();
});
