import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFeaturedJobs } from '../../actions/featuredJobsActions';
import { Container, Typography, Card, CardContent, Button, Grid, Box, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Home = () => {
  const dispatch = useDispatch();
  const featuredJobs = useSelector(state => state.featuredJobs.featuredJobs);

  const initialJobs = [
    { title: 'Software Engineer', location: 'New York, NY', id: 1 },
    { title: 'Product Manager', location: 'Remote', id: 2 },
    { title: 'Graphic Designer', location: 'San Francisco, CA', id: 3 },
  ];

  useEffect(() => {
    dispatch(setFeaturedJobs(initialJobs));
  }, [dispatch]);
  return (
    <Container>
      {/* Hero Section with Background */}
      <Box sx={{ my: 4, p: 4, background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', borderRadius: 3, color: 'white' }}>
        <Typography variant="h2" gutterBottom>
        Explore Top Career Paths
        </Typography>
        <Typography variant="body1" paragraph>
          Embark on a journey to your dream job with opportunities that align with your talent and passion.        </Typography>
      </Box>
      
      {/* Job Search Form */}
      <Paper elevation={3} sx={{ p: 3, mt: -8, mb: 4, mx: 'auto', maxWidth: 600, position: 'relative', borderRadius: 2 }}>
        <form noValidate autoComplete="off">
          <TextField id="search" label="Job title, keywords, or company" variant="outlined" fullWidth />
          <Button variant="contained" color="primary" sx={{ mt: 2, width: '100%' }}>
            <SearchIcon sx={{ mr: 1 }} />
            Search Jobs
          </Button>
        </form>
      </Paper>

      {/* Featured Opportunities */}
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Highlighted Opportunities
      </Typography>
      <Grid container spacing={3}>
        {featuredJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 'medium' }}>
                  <WorkOutlineIcon sx={{ verticalAlign: 'bottom', mr: 1 }} />{job.title}
                </Typography>
                <Typography color="textSecondary" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <LocationOnIcon fontSize="small" sx={{ mr: 0.5 }} />{job.location}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button size="small" variant="outlined" color="primary">
                  Learn More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Paper elevation={3} sx={{ mt: 6, p: 3, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom component="div">
          Are You Ready for a New Beginning?
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Start Here
        </Button>
      </Paper>
    </Container>
  );
};

export default Home;
