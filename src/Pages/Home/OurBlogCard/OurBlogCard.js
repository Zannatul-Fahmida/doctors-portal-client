import { Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import img2 from '../../../images/people-2.png';
import img3 from '../../../images/people-3.png';

const OurBlogCard = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345, height: 280 }} style={{ background: "linear-gradient(to left, #0fcfe9, #18d2b0 )", color: "white" }}>
                        <CardHeader
                            sx={{ textAlign: 'left', pb: 0 }}
                            title="Rashed Kabir"
                        />
                        <CardContent sx={{ pt:0 }}>
                            <Typography variant="body1" sx={{ textAlign: 'justify', mb: 3 }}>
                                22 August 2018
                            </Typography>
                            <Typography variant="body1" sx={{ textAlign: 'justify', mb: 3 }}>
                                Check at least a doctor in a year for your teeth
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton>
                                <ArrowRightAltIcon sx={{ color: 'white', fontSize: 40 }} />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345, height: 280 }}>
                        <CardHeader
                            style={{ textAlign: 'left' }}
                            avatar={
                                <CardMedia
                                    component="img"
                                    height="60"
                                    image={img2}
                                    alt="People 2"
                                />
                            }
                            title="Dr. Caudy"
                            subheader="29 April 2019"
                        />
                        <CardContent>
                            <Typography variant="body1" sx={{ textAlign: 'justify', fontWeight: 600, mb: 3 }}>
                                2 times of brush in a day can keep you healthy
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                                It is a long established fact that a will be fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345, height: 280 }}>
                        <CardHeader
                            style={{ textAlign: 'left' }}
                            avatar={
                                <CardMedia
                                    component="img"
                                    height="60"
                                    image={img3}
                                    alt="People 3"
                                />
                            }
                            title="Dr. John Mitchel"
                            subheader="29 April 2019"
                        />
                        <CardContent>
                            <Typography variant="body1" sx={{ textAlign: 'justify', fontWeight: 600, mb: 3 }}>
                                The tooth cancer is taking a challenge
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ textAlign: 'justify' }}>
                                It is a long established fact that a will be fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OurBlogCard;