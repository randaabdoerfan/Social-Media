# Social Media API

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB** for managing users, posts, and comments.

## Features

### User Management

* Register a new user
* Login with JWT authentication
* Get all users
* Get user by ID
* Update user profile
* Delete user account

### Post Management

* Create a new post
* Get all posts
* Get post by ID
* Update post
* Delete post

### Comment Management

* Add comments to posts
* Get comments for a specific post
* Update comment
* Delete comment

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* Joi Validation

## Project Structure

```bash
project/
│
├── controllers/
│   ├── user.controller.js
│   ├── post.controller.js
│   └── comment.controller.js
│
├── models/
│   ├── user.model.js
│   ├── post.model.js
│   └── comment.model.js
│
├── routes/
│   ├── user.routes.js
│   ├── post.routes.js
│   └── comment.routes.js
│
├── middleware/
│   ├── auth.middleware.js
│   └── error.middleware.js
│
├── validations/
│
├── app.js
└── server.js
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Create `.env` file

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Start the server

```bash
npm start
```

For development:

```bash
npm run dev
```

## API Endpoints

### Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |

### Users

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| GET    | /api/users     | Get All Users  |
| GET    | /api/users/:id | Get User By ID |
| PUT    | /api/users/:id | Update User    |
| DELETE | /api/users/:id | Delete User    |

### Posts

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| POST   | /api/posts     | Create Post    |
| GET    | /api/posts     | Get All Posts  |
| GET    | /api/posts/:id | Get Post By ID |
| PUT    | /api/posts/:id | Update Post    |
| DELETE | /api/posts/:id | Delete Post    |

### Comments

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| POST   | /api/comments     | Create Comment    |
| GET    | /api/comments     | Get All Comments  |
| GET    | /api/comments/:id | Get Comment By ID |
| PUT    | /api/comments/:id | Update Comment    |
| DELETE | /api/comments/:id | Delete Comment    |

## Authentication

Protected routes require a JWT token.

Example:

```http
Authorization: Bearer <token>
```

## Author

Developed by Randa Erfan
