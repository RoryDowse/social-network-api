[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Social Network API

## Description

This project is an API for a social network web application, built using Express.js, MongoDB, and Mongoose, allowing users to share thoughts, react to friends' posts, and manage friend lists. It handles large volumes of unstructured data, making it ideal for scalable social media platforms. The motivation for this project was to gain hands-on experience with NoSQL databases and understand how they manage flexible datasets in social networks. It addresses the challenge of efficiently scaling and organizing vast amounts of user data. Through this project, I learned how to model unstructured data with MongoDB, define schemas with Mongoose, develop RESTful API routes, and use virtuals to calculate data dynamically, such as friend and reaction counts, while managing timestamps effectively.

Walkthough: https://drive.google.com/file/d/1jriDx35p_68kEK88TalXUHdy5EaK-Gb-/view?usp=sharing

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

Before you begin, make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [npm](https://www.npmjs.com/)

### Installation Steps

1. **Clone the repository**

   Start by cloning the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/RoryDowse/social-network-api.git
   ```

2. **Navigate to the project directory**

   Move into the directory of the project:

   ```bash
   cd your-project-repo
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Run the Application**

   ```bash
   npm run start
   ```

5. **Test the API**

   Navigate to `http://localhost:3001/api` in Insomnia.

   Available routes include:
   `/api/thoughts` and `/api/users`

6. **Optional: Run in Development Mode**

   ```bash
   npm run start:dev
   ```

## Usage

### Base URL

All endpoints are based on the following base URL: `http://localhost:3001/api`

Make sure the server is running locally, or replace the URL with your deployed server's URL if applicable.

The API supports CRUD (Create, Read, Update, Delete) operations for users, thoughts (posts), and reactions. Here are examples of how to interact with these resources.

---

### Users

#### 1. Create a New User

- **Endpoint:** `POST /users`
- **Description:** Create a new user by providing a `username` and `email`.
- **Example:**

```bash
POST /api/users
Content-Type: application/json

{
  "username": "john",
  "email": "john@example.com"
}
```

#### 2. Get All Users

- **Endpoint:** `GET /users`
- **Description:** Retrieve a list of all users.
- **Example:**

```bash
GET /api/users
```

#### 3. Get a Single User by ID

- **Endpoint:** `GET /users/:userId`
- **Description:** Retrieve a single user by their ID.
- **Example:**

```bash
GET /api/users/60b77f4f5b4c7b4a5429e1a1
```

#### 4. Update a User

- **Endpoint:** `PUT /users/:userId`
- **Description:** Update a user's username or email by their ID.
- **Example:**

```bash
PUT /api/users/60b77f4f5b4c7b4a5429e1a1
Content-Type: application/json

{
  "username": "john",
  "email": "john_updated@example.com"
}
```

#### 5. Delete a User

- **Endpoint:** `DELETE /users/:userId`
- **Description:** Delete a user by their ID.
- **Example:**

```bash
DELETE /api/users/60b77f4f5b4c7b4a5429e1a1
```

### Thoughts

The CRUD actions on thoughts may be used similarly to Users routes using the following path:

`http://localhost:3001/api/thoughts`

### Reactions

#### 1. Add a Friend to a User

- **Endpoint:** `POST /thoughts/:thoughtId/reactions`
- **Description:** Add a reaction to an existing thought by providing `reactionBody` and `username`.
- **Example:**

```bash
POST /api/thoughts/60b784f75b4c7b4a5429e1a5/reactions
Content-Type: application/json

{
  "reactionBody": "Great thought!",
  "username": "jane_smith"
}
```

#### 2. Remove a Reaction from a Thought

- **Endpoint:** `DELETE /thoughts/:thoughtId/reactions/:reactionId`
- **Description:** Delete a reaction from a thought by specifying the thoughtId and reactionId.
- **Example:**

```bash
DELETE /api/thoughts/60b784f75b4c7b4a5429e1a5/reactions/60b784f95b4c7b4a5429e1a6
```

### Friends

#### 1. Add a Friend to a User

- **Endpoint:** `POST /users/:userId/friends/:friendId`
- **Description:** Add a user as a friend by specifying the userId and friendId.
- **Example:**

```bash
POST /api/users/60b77f4f5b4c7b4a5429e1a1/friends/60b77f4f5b4c7b4a5429e1a2
```

#### 2. Remove a Friend from a User

- **Endpoint:** `DELETE /users/:userId/friends/:friendId`
- **Description:** Remove a user from a user's friends list.
- **Example:**

```bash
DELETE /api/users/60b77f4f5b4c7b4a5429e1a1/friends/60b77f4f5b4c7b4a5429e1a2
```

![Screenshot](/images/screenshot.png)

## License

This project is licensed under the MIT license.

## Contributing

Special thanks to the following collaborators who contributed to this project:

- **Luis Sanchez** (EdX Tutor)

### Third-Party Assets

This project also makes use of the following third-party assets and libraries:

- **Express.js** - A web application framework for Node.js [Express.js on GitHub](https://github.com/expressjs/express)
- **MongoDB** - NoSQL database used for storing unstructured data [MongoDB](https://www.mongodb.com/)
- **Mongoose** - An Object Data Modeling (ODM) library for MongoDB and Node.js [Mongoose on GitHub](https://github.com/Automattic/mongoose)
- **Node.js** - JavaScript runtime built on Chrome's V8 JavaScript engine [Node.js](https://github.com/nodejs/node)

## Questions

Please visit my GitHub profile: https://github.com/RoryDowse.<br>
For additional questions, please contact me at: rorydowse@hotmail.com.
