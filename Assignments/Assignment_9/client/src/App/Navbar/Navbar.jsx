import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
 
const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
 
    useEffect(() => {
        // Check for token in localStorage to determine login status
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); // Converts the presence of a token to a boolean
    }, []);
 
    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token to log out
        setIsLoggedIn(false); // Update login status
        window.location='/login'; // Navigate to the home page
    };
 
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Job Portal
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/about">About</Button>
                <Button color="inherit" component={Link} to="/joblistings">Job Listings</Button>
                <Button color="inherit" component={Link} to="/contact">Contact</Button>
                <Button color="inherit" component={Link} to="/companyshowcase">Company Showcase</Button>
                {isLoggedIn ? (
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                ) : (
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};
 
export default Navbar;