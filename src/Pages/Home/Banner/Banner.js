import React from 'react';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import portfolio from '../../../images/portfolio.png'
// import Particles from "react-tsparticles";
import CssBaseline from '@mui/material/CssBaseline';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Banner.css';



const Banner = () => {

    const { text } = useTypewriter({
        words: ['ReactJs Developer', 'Front-End Developer', 'Backend Developer'],
        loop: 0,

    });


    return (
        <>
        <div>
            <CssBaseline />

            <main>
                <div id='home' className='bannerMain'>
                    <Container maxWidth='sm' className='containerB'>

                        <Grid>

                            <Grid
                                container
                                direction='column'
                                justifyContent='center'
                                alignItems='center'
                            >

                                <div className="containerB">
                                    <div className="tilt-box-wrap">
                                        <span className="tilt_over"></span>
                                        <span className="tilt_over"></span>
                                        <span className="tilt_over"></span>
                                        <span className="tilt_over"></span>
                                        <span className="tilt_over"></span>
                                        <span className="tilt_over"></span>
                                        <span className="tilt_over"></span>
                                        <span className="tilt_over"></span>
                                        <span className="tilt_over"></span>
                                        <div className="tilt-box">
                                            <img src={portfolio} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Grid>
                                        <Grid container direction='column' align='justify'>
                                            <Grid item>
                                                <Typography className='typoB1' align='left' variant="h5" gutterBottom component="div">
                                                    HI THERE !
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="h4" gutterBottom component="div" align='left'>
                                                    <span className='typoB1'>I'M </span><span className='typoB2'>MD ALAUDDIN</span>
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography className='typoB3' variant="h6" gutterBottom align='justify'>
                                                    "I am junior-level MERN Stack Web Developer seeking for opportunities to work on interesting projects. I will be able to adjust myself with any <strong className='typo2'>MERN</strong> developed company based on my knowledge. As instance,
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </div>

                                <div>

                                    <Grid>
                                        <Grid container spacing={2} direction='column'>

                                            <Grid item>
                                                <Typography variant="h6" gutterBottom component="div">
                                                    <span className='typoB3'> I Am A</span> <span className='typoB2'>
                                                        {text}
                                                        <Cursor cursorStyle='|' />
                                                    </span>
                                                </Typography>

                                            </Grid>


                                        </Grid>

                                    </Grid>
                                </div>
                                <div>
                                    <Grid >
                                        <Grid container>
                                            <Grid item >
                                                <Stack spacing={2} direction="row" flex='end' >

                                                    <a href="#about">
                                                        <Button className='btnB' variant="contained">About Me</Button>
                                                    </a>


                                                    <a href="https://drive.google.com/file/d/1vz0tJ1Oe_m8Xd2eQ780VCuKir0I-DjG3/view?usp=sharing" download >
                                                        <Button className='btnB' variant="contained">Download Cv</Button>
                                                    </a>


                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </div>

                            </Grid>
                        </Grid>
                    </Container >
                </div >
            </main >
            </div>
        </>
    );
};

export default Banner;