import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../src/App/AuthContext/AuthContext'; // Adjust the import path as needed
import Home from '../src/App/Home/Home'; // Adjust the import paths as needed
import About from '../src/App/About/About';
import JobListings from '../src/App/JobListings/JobListings';
import Contact from '../src/App/Contact/Contact';
import CompanyShowcase from '../src/App/CompanyShowcase/CompanyShowcase';
import Login from '../src/App/Login/Login';
import Navbar from '../src/App/Navbar/Navbar';
 
const AppWrapper = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
 
const App = () => {
  const { loggedIn } = useAuth();
 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={!loggedIn ? <Login /> : <Navigate replace to="/" />} />
        {/* Protect routes by conditionally rendering Navigate based on loggedIn status */}
        <Route path="/" element={loggedIn ? <Home /> : <Navigate replace to="/login" />} />
        <Route path="/about" element={loggedIn ? <About /> : <Navigate replace to="/login" />} />
        <Route path="/joblistings" element={loggedIn ? <JobListings /> : <Navigate replace to="/login" />} />
        <Route path="/contact" element={loggedIn ? <Contact /> : <Navigate replace to="/login" />} />
        <Route path="/companyshowcase" element={loggedIn ? <CompanyShowcase /> : <Navigate replace to="/login" />} />
        {/* Redirect all unmatched paths to Home or Login, depending on auth status */}
        <Route path="*" element={loggedIn ? <Navigate replace to="/" /> : <Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
};
 
export default AppWrapper;