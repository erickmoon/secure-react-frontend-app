# React Todo App

This project is a React-based ToDo application that interacts with a [Node.js Express backend API](https://github.com/erickmoon/Simple-Secure-Node.js-API-for-a-todo-list-app). It includes user authentication, task management, and logging capabilities to help you manage your tasks effectively.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [API Integration](#api-integration)
- [Error Handling](#error-handling)
- [Deployment](#deployment)
- [Learn More](#learn-more)

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and. To get started with the development and testing of the application, follow the instructions below.

### Prerequisites

- Node.js (v14 or above)
- npm (Node Package Manager) or yarn

### Installing

1. **Clone the repository:**

   ```bash
   git clone https://github.com/erickmoon/secure-react-frontend-app.git
   cd react-todo-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   This will start the React application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature.

## API Integration

### API Endpoints

- **Registration**: `POST /api/register`
- **Login**: `POST /api/login`
- **Get Todos**: `GET /api/todos`
- **Add Todo**: `POST /api/todos`
- **Update Todo**: `PUT /api/todos/:id`
- **Delete Todo**: `DELETE /api/todos/:id`

### Request and Response Example

#### Login

**Request:**

```javascript
import { loginUser } from "./api";

// Example usage
const email = "user@example.com";
const password = "password123";

loginUser(email, password)
  .then((response) => {
    console.log("Login successful:", response.data);
  })
  .catch((error) => {
    console.error("Login failed:", error);
  });
```

**Response:**

```json
{
  "token": "your-jwt-token"
}
```

### Error Handling

If you encounter a `400 (Bad Request)` error or any other issue, follow these steps:

1. **Check Console Logs**: Look at the console logs to see if there are any error messages that provide additional details.

2. **Inspect Network Requests**: Use browser developer tools to inspect the network requests and responses. Verify that the request payload is correct and that the server response includes useful error messages.

3. **Verify Backend Configuration**: Ensure that your backend server is running and properly configured to handle CORS requests. Check the `server/server.js` file to confirm that CORS middleware is set up correctly.

4. **Check API Endpoint**: Make sure that the API endpoint URLs are correct and match the routes defined in your backend.

## Deployment

To deploy the app, follow these steps:

1. **Build the React Application:**

   ```bash
   npm run build
   ```

2. **Deploy the build folder**: Upload the contents of the `build` folder to your web server or hosting provider.

3. **Ensure Backend is Deployed**: Make sure your backend server is deployed and accessible from the production environment.

## Learn More

You can learn more about React and Create React App in the following resources:

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
