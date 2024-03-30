import React from 'react';
import { Typography, Container, Card, CardContent, CardMedia, Grid, Box, Paper, Avatar, Stack } from '@mui/material';
import { deepPurple, green, amber, blueGrey, red } from '@mui/material/colors';


const teamMembers = [
    { name: 'Alice Johnson', role: 'CEO', description: 'Alice leads our team with over 10 years of experience in the tech industry, driving innovation and growth.', avatar: '/images/alice.jpg' },
    { name: 'Bob Smith', role: 'CTO', description: 'Bob spearheads our technology strategy, ensuring we stay ahead of the curve with the latest tech advancements.', avatar: '/images/bob.jpg' },
    { name: 'Carol White', role: 'HR Manager', description: 'Carol oversees our talent acquisition and employee engagement programs, fostering a vibrant workplace culture.', avatar: '/images/carol.jpg' },
    { name: 'Daniel Green', role: 'Marketing Director', description: 'Daniel shapes our brand’s voice and presence, crafting compelling narratives that resonate with our audience.', avatar: '/images/daniel.jpg' },
    { name: 'Eva Black', role: 'Product Manager', description: 'Eva leads our product development efforts, focusing on innovation and user experience to meet the evolving needs of our clients.', avatar: '/images/eva.jpg' },
    { name: 'Frank Miles', role: 'Operations Manager', description: 'Frank ensures our operations run smoothly, supporting our team and clients in achieving their goals efficiently.', avatar: '/images/frank.jpg' },
  ];
  

const About = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom color={deepPurple[500]}>
        About Us
      </Typography>
      <Typography variant="subtitle1" paragraph color={amber[700]}>
        Our job portal connects talented individuals with their dream jobs and helps companies find their next great hire. We leverage technology to make recruitment efficient and effective.
      </Typography>

      {/* Mission and Vision Section */}
      <Grid container spacing={4} alignItems="stretch" sx={{ marginBottom: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ padding: 3, backgroundColor: green[50] }}>
            <Typography variant="h5" gutterBottom color={green[700]}>Our Mission</Typography>
            <Typography>
              To empower every person and organization to achieve more by making the perfect job match.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ padding: 3, backgroundColor: blueGrey[50] }}>
            <Typography variant="h5" gutterBottom color={blueGrey[700]}>Our Vision</Typography>
            <Typography>
              Envisioning a world where everyone is passionate about their job, aligning with what they love and excel at.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Values Section */}
      <Typography variant="h4" gutterBottom color={red[500]}>
        Our Values
      </Typography>
      <Typography variant="subtitle1" paragraph color={amber[700]}>
        Integrity, innovation, and inclusivity are the core values that guide our actions and decisions, ensuring a trustworthy and dynamic platform for all.
      </Typography>

      {/* Achievements Section */}
      <Typography variant="h4" gutterBottom color={green[500]}>
        Our Achievements
      </Typography>
      <Typography variant="subtitle1" paragraph color={amber[700]}>
        Recognized for excellence in tech innovation, we have successfully connected over 100,000 job seekers with their ideal roles, transforming the recruitment landscape.
      </Typography>

      {/* Team Section */}
      <Typography variant="h4" gutterBottom color={deepPurple[500]}>
        Meet the Team
      </Typography>
      <Grid container spacing={3}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar src={member.avatar} alt={member.name} />
                  <Box>
                    <Typography variant="h6">{member.name}</Typography>
                    <Typography color="textSecondary">{member.role}</Typography>
                  </Box>
                </Stack>
                <Typography variant="body2" component="p" marginTop={2}>
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About;
