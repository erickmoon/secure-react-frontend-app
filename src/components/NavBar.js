import React, { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const NavBar = ({ onLogout }) => {
    const navigate = useNavigate(); // Initialize navigate function
    const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));
    // Handle user logout
    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from local storage
        onLogout(); // Call the logout handler
        navigate('/login'); // Redirect to login page
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Secure Todo App</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home" onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link href="#login" onClick={() => navigate('/login')}>Login</Nav.Link>
            <Nav.Link href="#register" onClick={() => navigate('/register')}>Register</Nav.Link>
            <Nav.Link href="#logout" onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar>
    );
};

export default NavBar;
