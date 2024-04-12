import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../../actions/modalActions';
import {
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Avatar,
  Button,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Modal,
  TextField,
  IconButton,
} from '@mui/material';
import { teal, amber, indigo } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-material-ui-carousel';

const teamMembers = [
  { name: 'Damon Salvatore', role: 'CEO', avatarBg: teal[500], description: 'Damon leads our team with over 10 years of experience in the tech industry, driving innovation and growth.' },
  { name: 'Ileana Cruiz', role: 'CTO', avatarBg: amber[500], description: 'BIleana spearheads our technology strategy, ensuring we stay ahead of the curve with the latest tech advancements.' },
  { name: 'Carl Monterio', role: 'HR Manager', avatarBg: indigo[500], description: 'Carl oversees our talent acquisition and employee engagement programs, fostering a vibrant workplace culture.' },
];

const testimonials = [
  { quote: "This platform has revolutionized our hiring process. It's efficient and effective!", author: "Peet R.", company: "Tech Innovations" },
  { quote: "Finding my dream job was a breeze with this job portal. Highly recommend!", author: "Wang D.", company: "Creative Solutions" },
  { quote: "As a recruiter, this tool has saved me countless hours. It's a game-changer.", author: "Anya C.", company: "HR Corp" },
];

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const About = () => {
  const dispatch = useDispatch();
  const modalOpen = useSelector(state => state.modal.modalOpen);

  const handleOpen = () => dispatch(openModal());
  const handleClose = () => dispatch(closeModal());

  return (
    <Container>
      <Typography variant="h2" gutterBottom color="primary" align="center" style={{ marginTop: '20px' }}>
        About Us
      </Typography>

      {/* Accordion for Mission and Vision */}
      <Accordion elevation={3} sx={{ backgroundColor: '#ffff', marginBottom: '20px' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Our Mission & Vision</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>To empower every person and every organization on the planet to achieve more through the perfect job match.</Typography>
          <Typography>We envision a world where everyone loves their job - a world where what you do aligns with what you love and what you are good at.</Typography>
        </AccordionDetails>
      </Accordion>

      {/* Team Section */}
      <Typography variant="h4" gutterBottom color="secondary" align="center">
        Meet the Team
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Box display="flex" flexDirection="column" alignItems="center" marginBottom={2}>
                  <Avatar sx={{ bgcolor: member.avatarBg, width: 56, height: 56 }}>
                    {member.name[0]}
                  </Avatar>
                  <Typography variant="h6" marginTop={1}>
                    {member.name}
                  </Typography>
                  <Typography color="textSecondary">{member.role}</Typography>
                </Box>
                <Typography variant="body2" component="p" marginTop={2}>
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Testimonial Carousel */}
      <Typography variant="h4" gutterBottom color="primary" align="center" style={{ marginTop: '40px' }}>
        What People Say
      </Typography>
      <Carousel autoPlay={false}>
        {testimonials.map((item, i) => (
          <Paper key={i} elevation={3} sx={{ padding: '20px', margin: 'auto', maxWidth: 700 }}>
            <Typography variant="h6" color="textSecondary">{`"${item.quote}"`}</Typography>
            <Typography variant="body1" align="right" marginTop={2}>{`- ${item.author}, ${item.company}`}</Typography>
          </Paper>
        ))}
      </Carousel>

      {/* Contact Us Modal */}
      <Box textAlign="center" marginTop={4}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Contact Us
        </Button>
        <Modal
          open={modalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
              <CloseIcon />
            </IconButton>
            <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom={2}>    
              Ping here!
            </Typography>
            <TextField label="Your Name" variant="outlined" fullWidth margin="dense" />
            <TextField label="Your Email" type="email" variant="outlined" fullWidth margin="dense" />
            <TextField label="Message" variant="outlined" fullWidth margin="dense" multiline rows={4} />
            <Box textAlign="right" marginTop={2}>
              <Button variant="contained" color="primary" onClick={handleClose}>Send</Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Container>
  );
};

export default About;
