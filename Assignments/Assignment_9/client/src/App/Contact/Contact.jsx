import React, { useState } from 'react';
import { Typography, Container, TextField, Button, Grid, Card, CardContent, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, typically, you'd send the form data to a backend service
    console.log(contactForm);
    alert("Thank you for reaching out! We'll get back to you soon.");
    // Reset form after submission
    setContactForm({
      name: '',
      email: '',
      message: ''
    });
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h3" gutterBottom component="h1" sx={{ fontWeight: 'bold', mb: 4, color: theme.palette.primary.main }}>
        Get in Touch
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={7}>
          <Card elevation={5} sx={{ p: isMobile ? 2 : 5 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Send Us a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  name="name"
                  label="Name"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  value={contactForm.name}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                />
                <TextField
                  name="email"
                  label="Email"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  value={contactForm.email}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                />
                <TextField
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  value={contactForm.message}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                />
                <Button type="submit" variant="contained" color="primary" size="large">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card elevation={5} sx={{ p: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Contact Information
              </Typography>
              <Typography variant="body1" paragraph>
                Email: hello@yourdomain.com
              </Typography>
              <Typography variant="body1" paragraph>
                Phone: +1 234 567 8900
              </Typography>
              <Typography variant="body1" paragraph>
                Address: 1234, Sunset Blvd, California, USA
              </Typography>
              {/* Here you could include an interactive map or an image of the map */}
              <Typography variant="body2" color="text.secondary">
                Office Hours: 9am to 6pm (Mon - Fri)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
