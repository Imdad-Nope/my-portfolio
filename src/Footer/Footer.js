import { Container, CssBaseline, Grid, Typography } from '@mui/material';
import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <>
            <CssBaseline />
            <div className='footerMain'>
                <main>
                    <Container >
                        <Grid sx={{ mt: '8rem', mb: 8 }}>
                            <Grid container justifyContent='center'>
                                <Grid item>
                                    <Typography variant="subtitle1" gutterBottom component="div">
                                        <span className='typoF1'>All Copyright © reserved</span> <span className='typoF2'>Alauddin </span>
                                        <span className='typoF1'>| 2022</span></Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </main>
            </div>
        </>
    );
};

export default Footer;