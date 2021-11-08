import { Container, Typography } from '@mui/material';
import React from 'react';

const OurBlog = () => {
    return (
        <Container>
            <Typography variant="h6" component="div" sx={{ fontWeight: '500', color: '#0fcfe9', m: 2 }}>
                OUR BLOG
            </Typography>
            <Typography variant="h4" component="div" sx={{ fontWeight: '600', mb: 3 }}>
                From Our Blog News
            </Typography>
        </Container>
    );
};

export default OurBlog;