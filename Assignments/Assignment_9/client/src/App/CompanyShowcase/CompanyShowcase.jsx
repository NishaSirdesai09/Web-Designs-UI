import React, { useEffect, useState } from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Container, Box } from '@mui/material';
import axios from 'axios';

const CompanyShowcase = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        // Fetch company details from the backend
        const fetchCompaniesDetails = async () => {
            try {
                const response = await axios.get('http://localhost:3000/user/company/images');
                setCompanies(response.data); 
            } catch (error) {
                console.error("Error fetching company details:", error);
            }
        };

        fetchCompaniesDetails();
    }, []);

    return (
        <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 4 }}>
            <Typography variant="h4" gutterBottom>
                Company Showcase
            </Typography>
            <Grid container spacing={4}>
                {companies.map((company) => (
                    <Grid item xs={12} sm={6} md={4} key={company.id}>
                        <Card raised sx={{ transition: "0.3s", "&:hover": { transform: "translateY(-5px)" } }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={company.imageUrl}
                                    alt={company.name}
                                    sx={{ opacity: 0.9 }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {company.name}
                                    </Typography>
                                    <Box sx={{ display: 'none', "&:hover": { display: 'block' } }}>
                                        <Typography variant="body2" color="text.secondary">
                                            {company.description}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CompanyShowcase;
