# User Management System

This is a simple user management system that allows users to register, login, logout, calculate EMI and get their profile details.

## Tech Stacks
-Node.js
-Express.js
-MongoDB
-bcrypt
-jsonwebtoken

## API Endpoints
### Register User
Endpoint: 'https://mock-4-api.onrender.com/user/register`
Method: `POST`
Body:
```json
{
    email: String,
    password: String,
    name: String
}
```

### Login User
Endpoint: `https://mock-4-api.onrender.com/user/login`
Method: `POST`
Body:
```json
{
    email: String,
    password: String
}

```

### Get User Profile
Endpoint: `https://mock-4-api.onrender.com/user/getProfile/:email`
Method: `GET`
```json
{
  email: String
 }
```

### Calculate EMI

Endpoint: `https://mock-4-api.onrender.com/user/calculateEMI`
Method: `POST`
Body:
```json
{
    amount: Number,
    interest: Number,
    months: Number
}
```
### Logout User
Endpoint: `https://mock-4-api.onrender.com/user/logout`
Method: `POST`
