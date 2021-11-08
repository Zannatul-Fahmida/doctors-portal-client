import { Card, CardContent, CardHeader, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img1 from '../../../images/people-1.png';
import img2 from '../../../images/people-2.png';
import img3 from '../../../images/people-3.png';

const TestimonialCard = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" style={{ textAlign: 'justify' }}>
                                It is a long established fact that a will be fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem ipsumis that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            </Typography>
                        </CardContent>
                        <CardHeader
                            style={{ textAlign: 'left' }}
                            avatar={
                                <CardMedia
                                    component="img"
                                    height="60"
                                    image={img1}
                                    alt="People 1"
                                />
                            }
                            title="Winson Herry"
                            subheader="California"
                        />
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" style={{ textAlign: 'justify' }}>
                                It is a long established fact that a will be fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem ipsumis that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            </Typography>
                        </CardContent>
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
                            title="Winson Herry"
                            subheader="California"
                        />
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" style={{ textAlign: 'justify' }}>
                                It is a long established fact that a will be fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem ipsumis that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            </Typography>
                        </CardContent>
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
                            title="Winson Herry"
                            subheader="California"
                        />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TestimonialCard;