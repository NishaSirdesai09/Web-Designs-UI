import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../src/App/Home/Home';
import About from '../src/App/About/About';
import JobListings from '../src/App/JobListings/JobListings';
import Contact from '../src/App/Contact/Contact';
import CompanyShowcase from '../src/App/CompanyShowcase/CompanyShowcase';
import Login from '../src/App/Login/Login';
import Navbar from '../src/App/Navbar/Navbar';
import Employees from './App/Employees/Employees';
import AddJobs from './App/AddJobs/AddJobs';
import JobsPage from './App/JobsPage/JobsPage';
 
const App = () => {
  const { loggedIn, userType } = useSelector(state => state.auth);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={!loggedIn ? <Login /> : (userType==='admin' ? (<Employees></Employees>) : (<Navigate replace to="/" />))} />
        {/* Protect routes by conditionally rendering Navigate based on loggedIn status */}
        <Route path="/" element={loggedIn ? <Home /> : <Navigate replace to="/login" />} />
        <Route path="/about" element={loggedIn ? <About /> : <Navigate replace to="/login" />} />
        <Route path="/joblistings" element={loggedIn ? <JobListings /> : <Navigate replace to="/login" />} />
        <Route path="/contact" element={loggedIn ? <Contact /> : <Navigate replace to="/login" />} />
        <Route path="/companyshowcase" element={loggedIn ? <CompanyShowcase /> : <Navigate replace to="/login" />} />
        <Route path="/jobsPage" element={loggedIn ? <JobsPage /> : <Navigate replace to="/login" />} />
        <Route path="/admin/dashboard" element={loggedIn ? <Employees></Employees> : <Navigate replace to="/login"></Navigate>}></Route>
        <Route path="/admin/addJobs" element={loggedIn ? <AddJobs></AddJobs> : <Navigate replace to="/login"></Navigate>}></Route>
        {/* Redirect all unmatched paths to Home or Login, depending on auth status */}
        <Route path="*" element={loggedIn ? <Navigate replace to="/" /> : <Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
};
 
export default App;