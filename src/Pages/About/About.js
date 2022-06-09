import React from 'react';
import { Box, Button, Card, CardContent, Container, CssBaseline, Divider, Grid, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import './About.css';


const About = () => {

    return (
        <>
            <CssBaseline />
            <Box >
                <main>
                    <div id='about' className='aboutMain'>
                        <Container >
                            <Grid>
                                <Grid container maxWidth='lg' justifyContent='center'>
                                    <Grid item sx={{ mt: '10rem' }}>
                                        <Typography variant="h3" gutterBottom component="div">
                                            <span className='typoA1'> About</span> <span className='typoA2'>Me</span>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Divider className='dividerA' />


                            <div className='containerA' >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={7}>
                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={8} align='left'>
                                                <Typography variant="h6" gutterBottom component="div" className='infoA'>
                                                    <span className='typoA3'>Name :</span> <span className='typoA2'>Md Alauddin</span>
                                                </Typography>
                                                <Typography variant="h6" gutterBottom component="div" className='infoA'>
                                                    <span className='typoA3'> Age :</span> <span className='typoA2'>22</span>
                                                </Typography>
                                                <Typography variant="h6" gutterBottom component="div" className='infoA'>
                                                    <span className='typoA3'>Qualification :</span> <span className='typoA2'>BBA at Accounting</span>
                                                </Typography>


                                                <Typography variant="h6" gutterBottom component="div" className='infoA'>
                                                    <span className='typoA3'> Post : </span> <span className='typoA2'>Frontend Developer</span>
                                                </Typography>
                                                <Typography variant="h6" gutterBottom component="div" className='infoA'>
                                                    <span className='typoA3'> Language : </span> <span className='typoA2'>Bangla And English</span>
                                                </Typography>
                                                <Grid >
                                                    <a href="https://drive.google.com/file/d/1YeDjxuB0_1OsI2wt4RMkqWc5L1QXkdDs/view?usp=sharing" download>
                                                        <Button className='btnA' variant='contained'>Download Cv
                                                            <span className='icons'><DownloadIcon /></span>
                                                        </Button>
                                                    </a>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={5}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <Card className='cardBg'>
                                                    <CardContent>
                                                        <Typography variant="h4" gutterBottom component="div">
                                                            <span className='typoA2'>1+</span>

                                                        </Typography>
                                                        <Typography variant="subtitle1" gutterBottom component="div">
                                                            <span className='typoA1'>years of</span>
                                                            <br />
                                                            <span className='typoA1'>experience</span>
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <Card className='cardBg'>
                                                    <CardContent>
                                                        <Typography variant="h4" gutterBottom component="div">
                                                            <span className='typoA2'>16+</span>

                                                        </Typography>
                                                        <Typography variant="subtitle1" gutterBottom component="div">
                                                            <span className='typoA1'>projects</span>
                                                            <br />
                                                            <span className='typoA1'>completed</span>
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <Card className='cardBg'>
                                                    <CardContent>
                                                        <Typography variant="h4" gutterBottom component="div">
                                                            <span className='typoA2'>5+</span>

                                                        </Typography>
                                                        <Typography variant="subtitle1" gutterBottom component="div">
                                                            <span className='typoA1'>happy clients</span>

                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <Card className='cardBg'>
                                                    <CardContent>
                                                        <Typography variant="h4" gutterBottom component="div">
                                                            <span className='typoA2'>2+</span>

                                                        </Typography>
                                                        <Typography variant="subtitle1" gutterBottom component="div">
                                                            <span className='typoA1'>awards won</span>
                                                            <br />

                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </div>
                        </Container>
                    </div >
                </main>
            </Box >

        </>
    );
};

export default About;