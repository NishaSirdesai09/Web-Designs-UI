import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login as loginAction } from '../../actions/authActions'; // Importing the login action, renamed to avoid naming conflict
 
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Using useNavigate for redirection
 
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        try {
            const response = await axios.post('http://localhost:3000/user/login', { email, password });
            dispatch(loginAction(response.data.token, response.data.type)); // Dispatching login action with token and user type
 
            // Redirect based on user type
            const redirectTo = response.data.type === 'admin' ? '/admin/dashboard' : '/';
            navigate(redirectTo); // Redirecting using navigate
        } catch (error) {
            // Error handling
            const errMsg = error.response?.data?.message || 'Login failed. Please try again.';
            setErrorMessage(errMsg);
        }
    };
    return (
            <Container maxWidth="xs" sx={{ bgcolor: 'background.default', padding: 4, borderRadius: 2, boxShadow: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Login
                </Typography>
                {errorMessage && <Typography color="error">{errorMessage}</Typography>}
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                </form>
            </Container>
        );
};

export default Login;
