const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

// Main API endpoint
app.get('/', (_, res) => {
    const response = {
        email: "ttaiwo4910@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/T4910/hng-task-0"
    };
    
    res.status(200).json(response);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
