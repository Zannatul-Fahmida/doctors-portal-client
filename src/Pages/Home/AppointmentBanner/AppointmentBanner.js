import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Container, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner}>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ px: 0 }}>
                        <img
                            style={{ width: '100%', marginTop: '-150px' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center', pb:4 }}>
                        <Box>
                            <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                                Appoinment
                            </Typography>
                            <Typography variant="h4" style={{ color: 'white' }}>
                                Make an Appoinment Today
                            </Typography>
                            <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;