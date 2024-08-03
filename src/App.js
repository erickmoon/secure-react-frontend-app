import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import NavBar from './components/NavBar';
import Auth from './components/Auth';
import TodoList from './components/TodoList';

const App = () => {
  // State variable to track if the user is authenticated
  const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));

  // Handle successful login by setting authenticated state to true
  const handleLoginSuccess = () => setAuthenticated(true);

  // Handle logout by setting authenticated state to false
  const handleLogout = () => setAuthenticated(false);

  return (
    <Router> {/* Router component to enable client-side routing */}
      <NavBar onLogout={handleLogout} /> {/* Render the navigation bar, passing the logout handler */}
      <Routes> {/* Routes component for defining route configuration */}
        <Route path="/" element={authenticated ? <TodoList /> : <Auth isLogin={true} onSuccess={handleLoginSuccess} />} />
        <Route path="/login" element={<Auth isLogin={true} onSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={<Auth isLogin={false} onSuccess={handleLoginSuccess} />} />
      </Routes>
    </Router>
  );
};

export default App; // Export the App component for use in other parts of the application
