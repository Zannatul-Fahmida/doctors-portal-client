import { Container, Typography } from '@mui/material';
import React from 'react';

const Testimonial = () => {
    return (
        <Container sx={{ textAlign: 'left', my:5 }}>
            <Typography variant="h6" style={{ color: '#5CE7ED' }}>
                TESTIMONIAL
            </Typography>
            <Typography variant="h3">
                What's Our Patients <br />
                Says
            </Typography>
        </Container>
    );
};

export default Testimonial;