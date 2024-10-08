# cs-onboarding

This project is a frontend application for CS onboarding, built with Next.js, React, TypeScript, and Tailwind CSS. It uses Shadcn UI and Radix UI for component styling.

## Backend Integration Guidelines

For backend developers to connect this frontend to a backend service, please consider the following:

### API Endpoints

The frontend expects the following API endpoints:

1. `/api/users`: For user management
   - GET: Retrieve user list
   - POST: Create a new user
   - PUT: Update user information

2. `/api/auth`: For authentication
   - POST /login: User login
   - POST /logout: User logout
   - POST /register: User registration

3. `/api/onboarding`: For onboarding process
   - GET: Retrieve onboarding steps
   - POST: Submit onboarding information

### Data Formats

All API requests and responses should use JSON format. Here's an example of the expected user object:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "role": "user"
}

