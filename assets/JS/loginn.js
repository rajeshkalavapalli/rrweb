// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample user data (in a real application, you'd query this from a database)
const users = [
    { username: 'testUser', password: 'password123' } // Replace with hashed passwords in a real app
];

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Login successful
        res.json({ success: true });
    } else {
        // Login failed
        res.json({ success: false, message: 'Invalid credentials' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
