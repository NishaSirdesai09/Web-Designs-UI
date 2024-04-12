
# Full-Stack Web Application for User and Job Management

This repository contains a full-stack application that efficiently manages user roles and job postings, utilizing a React frontend with Redux for state management, and a Node.js/Express backend. It features distinct interfaces for admin and employee roles, each with tailored functionalities.

## Prerequisites

- **Node.js**: Required version 12.x or higher.
- **MongoDB**: Version 4.x or higher, running on the default port.
- **Web Browser**: Modern browsers like Chrome, Firefox, Safari, or Edge.

## Installation Instructions

### Cloning the Repository

Clone the repository to get the latest version of the code:

```bash
git clone <repository-url>
```

### Setting up the Backend

1. Change directory to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server (runs on `http://localhost:5000`):
   ```bash
   npm start
   ```

### Setting up the Frontend

1. Change to the client directory:
   ```bash
   cd client
   ```
2. Install React and other dependencies:
   ```bash
   npm install
   ```
3. Launch the React development server (accessible at `http://localhost:3000`):
   ```bash
   npm start
   ```

## Project Structure

- **client/**: Frontend React application.
  - **src/**: React components, Redux actions, and reducers.
    - **actions/**, **reducers/**: Manage state and data flow.
    - **components/**: React components for UI.
- **server/**: Backend Express application.
  - **api/**: Routes, middleware, and database models.
    - **routes/**: API endpoint definitions.
    - **models/**: Database schema definitions.
  - **config/**: Configuration settings.
  - **assets/**: Static files and images.

## Functional Overview

### Admin Features

- **User Management**: Admins can add new users and view all users, with roles specified as "employee" or "admin".
- **Job Posting**: Ability to create job postings visible to employees.

### Employee Features

- **Job Access**: Employees view job listings posted by administrators.

## API Documentation

### User APIs

- **POST /user/create**: Register a new user with details like name, email, and role.
- **GET /users**: Fetch all users, excluding sensitive data like passwords.

### Job APIs

- **POST /create/job**: Admins can post new jobs.
- **GET /get/jobs**: Employees retrieve available job listings.

## Running the Application

Instructions to run and navigate the application after both servers are started.

## Contribution Guidelines

Details on how to contribute to the project, including branching and pull requests.

## License

The project is released under the MIT License. Full license text is available in the LICENSE file.
