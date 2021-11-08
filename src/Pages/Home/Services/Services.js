import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride Treatement',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, quaerat cupiditate. Corrupti porro labore rerum.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, quaerat cupiditate. Corrupti porro labore rerum.',
        img: cavity
    },
    {
        name: 'Teath Whitening',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, quaerat cupiditate. Corrupti porro labore rerum.',
        img: whitening
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h6" component="div" sx={{ fontWeight: '500', color: 'info.main', m: 2 }}>
                    Our services
                </Typography>
                <Typography variant="h4" component="div" sx={{ fontWeight: '600', mb: 3 }}>
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            name={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;