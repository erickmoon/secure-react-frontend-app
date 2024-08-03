import React, { useState } from 'react'; // Import React and useState hook for managing component state
import { Container, Form, Button, Alert } from 'react-bootstrap'; // Import Bootstrap components for styling
import { registerUser, loginUser } from '../services/api'; // Import functions to handle API calls

/**
 * Auth component handles user registration and login.
 * 
 * @param {Object} props - Component properties
 * @param {boolean} props.isLogin - Boolean flag to indicate whether the form is for login or registration
 * @param {Function} props.onSuccess - Callback function to be called on successful authentication
 */
const Auth = ({ isLogin, onSuccess }) => {
  // State variables for email, password, and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  /**
   * Handles form submission for login or registration.
   * 
   * @param {Event} e - Form submit event
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError(''); // Clear any previous error messages

    try {
      // Call the appropriate API function based on isLogin flag
      const response = isLogin
        ? await loginUser(email, password) // Login user
        : await registerUser(email, password); // Register user

      // Handle success response
      if (response.status === 201) {
        // Store the received token in localStorage
        localStorage.setItem('token', response.data.token);

        // Call the onSuccess callback to notify parent component
        onSuccess();
      } else {
        // Handle unexpected status codes
        setError('An unexpected error occurred. Please try again.');
      }
    } catch (err) {
      // Handle error responses from the server
      if (err.response) {
        // Server responded with a status other than 2xx
        setError(err.response.data.message || 'An error occurred');
      } else if (err.request) {
        // Request was made but no response received
        setError('No response from the server. Please check your network connection.');
      } else {
        // Something happened in setting up the request
        setError('An error occurred while setting up the request.');
      }
    }
  };

  return (
    <Container>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      {/* Display error message if present */}
      {error && <Alert variant="danger">{error}</Alert>}
      {/* Form for user authentication */}
      <Form onSubmit={handleSubmit}>
        {/* Email input field */}
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on change
            required // Ensure this field is filled out
          />
        </Form.Group>
        {/* Password input field */}
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on change
            required // Ensure this field is filled out
          />
        </Form.Group>
        {/* Submit button */}
        <Button variant="primary" type="submit">
          {isLogin ? 'Login' : 'Register'} {/* Button text depends on isLogin flag */}
        </Button>
      </Form>
    </Container>
  );
};

export default Auth; // Export the component for use in other parts of the application
