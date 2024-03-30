import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useAuth } from '../AuthContext/AuthContext'
 
const Login = ({ setLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { login } = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        try {
            const response = await axios.post('http://localhost:3000/user/login', { email, password });
            login(response.data.token);
            window.location='/'
        } catch (error) {
 
            if (error.response && error.response.data && error.response.data.errors && error.response.data.errors.length > 0) {
 
                setErrorMessage(error.response.data.errors[0].msg);
            } else if (error.response && error.response.data && error.response.data.message) {
 
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage(error.message);
            }
        }
    };
 
    return (
        <Container maxWidth="xs">
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
 