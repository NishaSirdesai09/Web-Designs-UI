import React from 'react';
import { Typography, Container, TextField, Button, Grid, Card, CardActions, CardContent, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  const featuredJobs = [
    { title: 'Software Engineer', location: 'New York, NY', id: 1 },
    { title: 'Product Manager', location: 'Remote', id: 2 },
    { title: 'Graphic Designer', location: 'San Francisco, CA', id: 3 },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="md" sx={{ mt: 8, mb: 6 }}>
        {/* Hero Section */}
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Find Your Dream Job
        </Typography>
        <Typography variant="subtitle1" paragraph>
          Explore top roles tailored to your skills and aspirations. Your next career opportunity awaits.
        </Typography>
       
        {/* Job Search Form */}
        <Box display="flex" flexDirection="row" alignItems="center" mt={3} mb={5}>
          <TextField
            fullWidth
            id="search"
            label="Job title, keywords, or company"
            variant="outlined"
            sx={{ mr: 1 }}
          />
          <Button variant="contained" color="primary" startIcon={<SearchIcon />}>
            Search
          </Button>
        </Box>
   
        {/* Featured Jobs */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'medium', mb: 3 }}>
          Featured Jobs
        </Typography>
        <Grid container spacing={4}>
          {featuredJobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {job.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {job.location}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="outlined" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
 
        {/* Call to Action */}
        <Container maxWidth="sm" sx={{ mt: 10, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium' }}>
            Ready to take the next step in your career?
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Get Started
          </Button>
        </Container>
      </Container>
    </Box>
  );
};

export default Home;
