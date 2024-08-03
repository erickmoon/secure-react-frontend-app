import axios from "axios"; // Import axios for making HTTP requests

// Define the base URL for the API
const API_URL = 'http://localhost:5001/api';

// Create an axios instance with default settings
const api = axios.create({
    baseURL: API_URL, // Base URL for all API requests
    headers: {
        'Content-Type': 'application/json', // Default content type for requests
    },
});

// Add a request interceptor to include the JWT token in headers if present
api.interceptors.request.use((config) => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    // If token exists, add Authorization header with Bearer token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Return the modified config
    return config;
});

// Export API functions for user registration and login
export const registerUser = (email, password) => api.post('/register', { email, password });
// Makes a POST request to /register with email and password for user registration

export const loginUser = (email, password) => api.post('/login', { email, password });
// Makes a POST request to /login with email and password for user login

export const getTodos = () => api.get('/todos');
// Makes a GET request to /todos to fetch the list of to-do items

export const addTodo = (text) => api.post('/todos', { text });
// Makes a POST request to /todos with the new to-do item text to add it to the list

export const updateTodo = (id, text) => api.put(`/todos/${id}`, { text });
// Makes a PUT request to /todos/:id with the updated text to modify an existing to-do item

export const deleteTodo = (id) => api.delete(`/todos/${id}`);
// Makes a DELETE request to /todos/:id to remove a to-do item from the list
