import React from 'react';
import { Button, Container, CssBaseline, Divider, Grid, Typography } from '@mui/material';
import './projects.css';
import p1 from '../../images/p1.png';
import p2 from '../../images/p2.png';
import p3 from '../../images/p3.png';
import p4 from '../../images/p4.png';
import p5 from '../../images/p5.png';
import p6 from '../../images/p6.png';

const Projects = () => {


    return (
        <>
        <div>
            <CssBaseline />
            <main>
                <div id='project' className='projectMain'>
                    <Container>
                        <Grid container
                            justifyContent='center'>
                            <Grid item sx={{ mt: '10rem' }}>
                                <Typography variant="h3" gutterBottom component="div">
                                    <span className='typoP1'>My</span> <span className='typoP2'>Projects</span>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider className='dividerP' />
                        <div className='containerP'>
                            <Grid sx={{ mt: 4 }}>

                                <Grid container spacing={2} direction='row' justifyContent='space-around'>
                                    <Grid item xs={12} sm={8} md={4} className='projectCard'>
                                        <Grid item>
                                            <img
                                                src={p1} alt="" />
                                        </Grid>
                                        <Grid item className='content'>
                                            <a href="https://jerin-parlour-749ae.firebaseapp.com/" >
                                                <Button variant='contained' className='btnP'>Live</Button>
                                            </a>
                                            <a href="https://github.com/Imdad-Nope/jerin-parlour-client">
                                                <Button variant='contained' className='btnP'>Client</Button>
                                            </a>
                                            <a href="https://github.com/Imdad-Nope/jerin-parlour-server">
                                                <Button variant='contained' className='btnP'>Server</Button>
                                            </a>

                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={4} className='projectCard'>


                                        <Grid item>
                                            <img

                                                width='80%'
                                                height='200vh'
                                                src={p3} alt="" />
                                        </Grid>
                                        <Grid item className='content'>

                                            <a href="https://ottawa-tourists-recreation.web.app/" >
                                                <Button variant='contained' className='btnP'>Live</Button>
                                            </a>
                                            <a href="https://github.com/Imdad-Nope/ottawa-tourists-creation">
                                                <Button variant='contained' className='btnP'>Client</Button>
                                            </a>
                                        </Grid>


                                    </Grid>
                                    <Grid item xs={12} sm={8} md={4} className='projectCard'>


                                        <Grid item>
                                            <img
                                                width='80%'
                                                height='200vh'
                                                src={p2} alt="" />
                                        </Grid>
                                        <Grid item className='content'>

                                            <a href="https://babys-care-products.web.app/" >
                                                <Button variant='contained' className='btnP'>Live</Button>
                                            </a>
                                            <a href="https://github.com/Imdad-Nope/baby-care-products-site">
                                                <Button variant='contained' className='btnP'>Client</Button>
                                            </a>
                                            <a href="https://github.com/Imdad-Nope/baby-products-server">
                                                <Button variant='contained' className='btnP'>Server</Button>
                                            </a>

                                        </Grid>


                                    </Grid>
                                    <Grid item xs={12} sm={8} md={4} className='projectCard'>

                                        <Grid item>
                                            <img
                                                src={p4} alt="" />
                                        </Grid>


                                        <Grid item className='content'>
                                            <a href="https://cbr-honda-is-ready-to-ride.netlify.app/" >
                                                <Button variant='contained' className='btnP'>Live</Button>
                                            </a>
                                            <a href="https://github.com/Imdad-Nope/Cbr-Honda">
                                                <Button variant='contained' className='btnP'>Client</Button>
                                            </a>

                                        </Grid>

                                    </Grid>
                                    <Grid item xs={12} sm={8} md={4} className='projectCard'>


                                        <Grid item >
                                            <img

                                                width='80%'
                                                height='200vh'
                                                src={p5} alt="" />
                                        </Grid>
                                        <Grid item className='content'>
                                            <a href="https://panda-bootstrap1.netlify.app/">
                                                <Button variant='contained' className='btnP'>Live</Button>
                                            </a>
                                            <a href="https://github.com/Imdad-Nope/Panda-e-commerce">
                                                <Button variant='contained' className='btnP'>Client</Button>
                                            </a>
                                        </Grid>


                                    </Grid>
                                    <Grid item xs={12} sm={8} md={4} className='projectCard'>
                                        <Grid item>
                                            <img
                                                width='80%'
                                                height='100%'
                                                src={p6} alt="" />
                                        </Grid>
                                        <Grid item className='content'>
                                            <a href="https://best-english-writers.netlify.app/" >
                                                <Button variant='contained' className='btnP'>Live</Button>
                                            </a>
                                            <a href="https://github.com/Imdad-Nope/best-english-writers">
                                                <Button variant='contained' className='btnP'>Client</Button>
                                            </a>
                                        </Grid>
                                    </Grid>

                                </Grid>


                            </Grid>
                        </div>
                    </Container>
                </div>
            </main >
            </div>
        </>
    );
};

export default Projects;