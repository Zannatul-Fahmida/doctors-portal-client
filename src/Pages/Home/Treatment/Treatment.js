import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png';
import { Box } from '@mui/system';

const Treatment = () => {
    return (
        <Container sx={{ flexGrow: 1, mt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ px: 0 }}>
                    <img
                        style={{ width: '80%' }}
                        src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h4" style={{ color: '#5CE7ED' }}>
                            Exceptional Dental <br />
                            Care, on Your Terms
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'gray', fontSize: 14, fontWeight: 300 }}>
                            It is a long established fact that a will be fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem ipsumis that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Treatment;