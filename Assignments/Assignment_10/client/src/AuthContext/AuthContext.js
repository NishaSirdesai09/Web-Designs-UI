import React, { createContext, useContext, useState, useEffect } from 'react';
 
const AuthContext = createContext();
 
export const useAuth = () => useContext(AuthContext);
 
export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
 
    useEffect(() => {
        const token = localStorage.getItem('token');
        setLoggedIn(!!token);
    }, []);
 
    const login = (token, type) => { // Adjust login to accept user type
        localStorage.setItem('token', token);
        localStorage.setItem('userType', type); // Save the user type
        setLoggedIn(true);
    };
 
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userType'); // Also remove the user type
        setLoggedIn(false);
    };
 
    const value = { loggedIn, login, logout };
 
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
 