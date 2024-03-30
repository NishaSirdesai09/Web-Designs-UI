import React from 'react';
import { Container, Card, CardContent, Typography, Button, Link } from '@mui/material';
 
const jobPosts = [
    {
      "id": 1,
      "title": 'Cloud Solutions Architect',
      "description": 'Innovative Cloud Solutions Architect needed to design and implement cutting-edge cloud computing strategies. Experience with AWS, Azure, or Google Cloud is crucial.',
      "lastUpdated": 'Last updated 2 days ago',
      "applyLink": 'https://example.com/apply/cloud-solutions-architect'
    },
    {
      "id": 2,
      "title": 'Machine Learning Engineer',
      "description": 'Dynamic Machine Learning Engineer to develop AI models that can scale. Proficiency in Python, TensorFlow, and PyTorch required.',
      "lastUpdated": 'Last updated 1 week ago',
      "applyLink": 'https://example.com/apply/machine-learning-engineer'
    },
    {
      "id": 3,
      "title": 'UI/UX Designer',
      "description": 'Creative UI/UX Designer to craft intuitive and visually appealing user interfaces. Familiarity with Figma, Sketch, and Adobe XD necessary.',
      "lastUpdated": 'Last updated 3 hours ago',
      "applyLink": 'https://example.com/apply/ui-ux-designer'
    },
    {
      "id": 4,
      "title": 'Blockchain Developer',
      "description": 'Expert Blockchain Developer to work on innovative cryptocurrency projects. Solid understanding of Ethereum, smart contracts, and Solidity required.',
      "lastUpdated": 'Last updated 8 days ago',
      "applyLink": 'https://example.com/apply/blockchain-developer'
    },
    {
      "id": 5,
      "title": 'DevOps Engineer',
      "description": 'Skilled DevOps Engineer to enhance deployment strategies and maintain infrastructure. Proficiency in automation tools and Kubernetes essential.',
      "lastUpdated": 'Last updated 9 days ago',
      "applyLink": 'https://example.com/apply/devops-engineer'
    },
    {
      "id": 6,
      "title": 'Front-End Developer',
      "description": 'Talented Front-End Developer to create engaging web experiences using HTML, CSS, and JavaScript frameworks like React or Angular.',
      "lastUpdated": 'Last updated 4 days ago',
      "applyLink": 'https://example.com/apply/front-end-developer'
    }
];
 
 
const JobListings = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {jobPosts.map((job) => (
        <Card key={job.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">{job.title}</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">{job.lastUpdated}</Typography>
            <Typography variant="body2">{job.description}</Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              <Link href={job.applyLink} color="inherit" underline="none" target="_blank">Apply</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};
 
export default JobListings;
 