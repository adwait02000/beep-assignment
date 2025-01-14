# Task Management API

## Overview

The Task Management API allows users to manage tasks in a project management system. It supports performing CRUD (Create, Read, Update, Delete) operations on tasks, managing users, and adding comments to tasks. The API also implements authentication using JWT, providing secure access to the endpoints.

## Features

- **User Management**: Register and login users.
- **Task Management**: Perform CRUD operations on tasks, including assigning tasks to users and tracking their status.
- **Comments**: Add comments to tasks for collaboration and updates.
- **Authentication**: JWT-based authentication for secure access to the API.
- **Pagination & Filtering**: Allows pagination and filtering for retrieving tasks.

## Deployed API URL
- Base URL: ```https://beep-assignment.onrender.com```
- Test Credentials -
  ```
  Username: wayne@gmail.com
  Password: password
  ```
- Swagger Doc (API Documentation) - ```https://beep-assignment.onrender.com/api-docs/```
- I have also attached postman collection (json file) in the repo itself.
- While testing the APIs add below environment variables in Postman
  - ```baseUrl``` (use Base URL mentioned above)
  - ```bearerToken``` (you will get this after login with test credentials) 
    
## Local Setup

### Prerequisites

- Node.js and npm installed
- MongoDB instance running on MongoDB Atlas

### Installation Steps

1. Clone the repository:
   ```git clone <repo-url>```
2. Install dependencies:
  ```npm install```
3. Set up environment variables:
```
PORT=3000
SALT_ROUNDS=<your-salt-rounds>
MONGODB_URL=<your-mongo-uri>
JWT_SECRET_EXPIRY=<your-jwt-secret>
```
4. Start the server
```npm run start```
