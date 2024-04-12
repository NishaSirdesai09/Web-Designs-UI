import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { updateJobForm, submitJobForm, jobFormSuccess, jobFormFail, resetJobForm } from '../../actions/jobFormActions';
import axios from 'axios';

const AddJobs = () => {
  const dispatch = useDispatch();
  const { jobDetails, isSubmitting, successMessage } = useSelector(state => state.jobForm);

  const handleChange = (e) => {
    dispatch(updateJobForm(e.target.name, e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(submitJobForm());
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.post('http://localhost:3000/create/job', jobDetails, {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token,
          },
      });
      dispatch(jobFormSuccess(data.message));
      dispatch(resetJobForm());
    } catch (error) {
      console.error('Error adding job:', error.response?.data?.message || error.message);
      dispatch(jobFormFail(error.response?.data?.message || error.message));
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Add New Job</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Company Name"
          name="name"
          fullWidth
          value={jobDetails.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          label="Job Title"
          name="jobTitle"
          fullWidth
          value={jobDetails.jobTitle}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          label="Description"
          name="description"
          fullWidth
          multiline
          rows={4}
          value={jobDetails.description}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          label="Salary"
          name="salary"
          fullWidth
          value={jobDetails.salary}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            Add Job
          </Button>
        </Box>
        {successMessage && <Typography color="primary" sx={{ mt: 2 }}>{successMessage}</Typography>}
      </form>
    </Container>
  );
};

export default AddJobs;
