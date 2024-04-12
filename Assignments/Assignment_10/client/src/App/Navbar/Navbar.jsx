import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/authActions'; // Ensure you have a logout action
 
const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Access state directly from Redux store
    const isLoggedIn = useSelector(state => state.auth.loggedIn);
    const userType = useSelector(state => state.auth.userType);
 
    const handleLogout = () => {
        dispatch(logout()); // Dispatch a logout action to update the state
        navigate('/login'); // Use navigate for SPA-friendly redirection
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Job Portal
                </Typography>
                
                {userType === 'admin' && (
                    <>
                        <Button color="inherit" component={Link} to="/admin/dashboard">Admin Dashboard</Button>
                        <Button color="inherit" component={Link} to="/admin/addJobs">Add Jobs</Button>
                    </>
                )}
                
                {userType === 'employee' && (
                    <>
                     <Button color="inherit" component={Link} to="/">Home</Button>
                     <Button color="inherit" component={Link} to="/about">About</Button>
                     <Button color="inherit" component={Link} to="/joblistings">Job Listings</Button>
                     <Button color="inherit" component={Link} to="/companyshowcase">Company Showcase</Button>
                     <Button color="inherit" component={Link} to="/contact">Contact</Button>
                     <Button color="inherit" component={Link} to="/jobsPage">Jobs Page</Button>
                    </>
                   
                )}
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
