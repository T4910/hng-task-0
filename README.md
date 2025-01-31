# HNG Stage 0 Backend Task

This is a simple REST API built with Express.js that returns specific user information in JSON format. This project was created as part of the HNG Internship Stage 0 task.

## Description

The API provides a single endpoint that returns:
- The developer's email address
- Current datetime in ISO 8601 format
- GitHub repository URL

## API Documentation

### Endpoint

- GET `/`

### Response Format

```json
{
    "email": "ttaiwo4910@gmail.com",
    "current_datetime": "2025-01-31T22:04:26Z",
    "github_url": "https://github.com/T4910/hng-task-0"
}
```

### Status Codes

- 200: Successful request
- 500: Server error

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/ttaiwanyanwu/hng-task-0.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

   For development with auto-reload:
   ```bash
   npm run dev
   ```

The server will start on port 3001 by default. You can change this by setting the PORT environment variable.

## Technologies Used

- Node.js
- Express.js
- CORS middleware for handling Cross-Origin Resource Sharing
