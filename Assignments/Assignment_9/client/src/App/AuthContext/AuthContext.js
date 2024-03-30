import React, { createContext, useContext, useState, useEffect } from 'react';
 
const AuthContext = createContext();
 
export const useAuth = () => useContext(AuthContext);
 
export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
 
    useEffect(() => {
        const token = localStorage.getItem('token');
        setLoggedIn(!!token);
    }, []);
 
    const login = (token) => {
        localStorage.setItem('token', token);
        setLoggedIn(true);
    };
 
    const logout = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
    };
 
    const value = { loggedIn, login, logout };
 
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};