import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Card, CardMedia, CardContent, Typography, Container } from '@mui/material';
import axios from 'axios';
import { setCompanies, fetchError } from '../../actions/companyActions';

const CompanyShowcase = () => {
    const dispatch = useDispatch();
    const companies = useSelector(state => state.companyData.companies);

    useEffect(() => {
        const fetchCompanyImages = async () => {
            try {
                const response = await axios.get('http://localhost:3000/company/images');
                dispatch(setCompanies(response.data));
            } catch (error) {
                console.error("Error fetching company images:", error);
                dispatch(fetchError(error.toString()));
            }
        };

        fetchCompanyImages();
    }, [dispatch]);

    return (
        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
            <Grid container spacing={4}>
                {companies.map((company) => (
                    <Grid item xs={12} sm={6} md={4} key={company.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={company.imageUrl}
                                alt={company.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {company.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CompanyShowcase;
