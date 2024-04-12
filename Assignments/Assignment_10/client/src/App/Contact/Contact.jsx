import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContactForm, resetContactForm } from '../../actions/contactActions';
import { Container, Typography, TextField, Button, Grid, Paper, Box } from '@mui/material';

const Contact = () => {
  const dispatch = useDispatch();
  const contactForm = useSelector(state => state.contact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateContactForm(name, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactForm);
    alert("Message sent! We'll get back to you soon.");
    dispatch(resetContactForm());
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom component="h1">
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <TextField 
              name="name"
              label="Your Name" 
              fullWidth 
              margin="normal" 
              value={contactForm.name}
              onChange={handleChange} 
            />
            <TextField 
              name="email"
              label="Your Email" 
              fullWidth 
              margin="normal" 
              value={contactForm.email}
              onChange={handleChange} 
            />
            <TextField 
              name="message"
              label="Message" 
              multiline 
              rows={4} 
              fullWidth 
              margin="normal" 
              value={contactForm.message}
              onChange={handleChange} 
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary"
              sx={{ mt: 2 }}
            >
              Send
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Other ways to reach us
            </Typography>
            <Typography variant="body1" paragraph>
              Email: sirdesai.n@northeastern.edu
            </Typography>
            <Typography variant="body1" paragraph>
              Phone: +1 857 390 4444
            </Typography>
            <Typography variant="body1" paragraph>
              Address: 360, Huntington Ave, Boston
            </Typography>
            <Box mt={2}>
              <Typography variant="body2" color="text.secondary">
                Available from Monday to Friday 10am to 6pm.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
