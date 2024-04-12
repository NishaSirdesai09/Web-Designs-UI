import React, { useState, useEffect } from 'react';

import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Button,
  TablePagination,
} from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../../actions/jobActions'; // make sure the path is correct

const JobsPage = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs.jobs);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getCardColor = (salary) => {
    const salaryNumber = Number(salary.replace(/[^0-9.-]+/g, ""));
    if (salaryNumber < 150000) return '#ffe0b2';
    if (salaryNumber >= 150000) return '#c8e6c9';
    return '#bbdefb';
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#424242' }}>
          Available Jobs
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {jobs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card sx={{
              backgroundColor: getCardColor(job.salary),
              minHeight: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              "&:hover": {
                transform: "scale(1.05)",
                transition: "transform 0.3s ease-in-out"
              },
              cursor: 'pointer'
            }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'medium', color: '#37474f' }}>
                  Position: {job.jobTitle}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    Company: {job.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Salary: {job.salary}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Description: {job.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={job.applyLink}
                  target="_blank"
                  sx={{ alignSelf: 'center' }}
                >
                  Apply
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <TablePagination
        component="div"
        count={jobs.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default JobsPage;
