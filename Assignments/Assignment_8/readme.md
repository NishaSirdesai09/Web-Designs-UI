Below is a detailed README.md file for the provided code. This README outlines the API routes, their purposes, and the validations and operations performed within each route.

# User Management System API

This API provides a suite of endpoints for creating, editing, and deleting user profiles within a User Management System. It also includes functionality for uploading images as part of user profiles. Below is a comprehensive guide to each endpoint, including its purpose, request expectations, and response behaviors.

## Technologies and Libraries Used

- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and their representation in MongoDB.
- **Bcrypt**: A library to help hash passwords securely.
- **Multer**: A middleware for handling `multipart/form-data`, primarily used for uploading files.
- **Email-validator**: A simple module to validate an email address.
- **Validator**: A library of string validators and sanitizers.
- **Password-validator**: A schema-based library to validate and enforce strong passwords.

## API Endpoints

### GET `/getAll`

Retrieves a list of all users in the database.

- **Purpose**: To fetch all user profiles.
- **Response**: Returns a 200 status code with a JSON array of user objects on success, or a 500 status code with an error message on failure.

### POST `/create`

Creates a new user in the database.

- **Purpose**: To register a new user with validation checks for email, password strength, and name.
- **Request Body**:
  - `email`: User's email. Must be a valid northeastern email ID.
  - `password`: User's password. Must meet strong password requirements.
  - `name`: User's name. Must only contain alphabetic characters.
- **Response**: Returns a 200 status code with the created user object on success, or a 400/500 status code with an error message on failure, depending on the error.

### PUT `/edit`

Updates an existing user's information in the database.

- **Purpose**: To edit user details such as name and password.
- **Request Body**:
  - `email`: The email of the user to be updated.
  - `name`: New name for the user (optional).
  - `password`: New password for the user (optional).
- **Response**: Returns a 200 status code with a success message on successful update, a 403 status code if no user is found, or a 500 status code with an error message on failure.

### DELETE `/delete`

Deletes a user from the database.

- **Purpose**: To remove a user's profile.
- **Request Body**:
  - `email`: The email of the user to be deleted.
- **Response**: Returns a 200 status code with a "Success" message on successful deletion, a 400 status code if the user is not found, or a 500 status code with an error message on failure.

### POST `/uploadImage`

Uploads an image file for a user.

- **Purpose**: To allow image file uploads associated with user profiles.
- **Request Body**:
  - `email`: The email of the user for whom the image is uploaded.
- **Form Data**:
  - `image`: The image file to be uploaded.
- **Response**: Returns a 200 status code with a success message and the image path on success, a 400 status code if no image is uploaded, a 404 status code if the user is not found, or a 500 status code with an error message on failure.

## Validation and Security

- **Email Validation**: Ensures that only emails with a specific domain (`@northeastern.edu`) are accepted, using the `email-validator` library.
- **Password Strength**: Enforces strong password criteria (minimum length, uppercase, lowercase, digits, no spaces, blacklist) using the `password-validator` schema.
- **Name Validation**: Ensures that the name contains only alphabetic characters using the `validator` library's `isAlpha` method.
- **Password Hashing**: Uses `bcrypt` to hash passwords before storing them in the database for security.

## Data Models

### User Model

Represents a user in the database with the following fields:
- `name`: The user's name.
- `email`: The user's email address.
- `password`: The user's hashed password.
- `imagePath`: (Optional) The path to the user's uploaded image.