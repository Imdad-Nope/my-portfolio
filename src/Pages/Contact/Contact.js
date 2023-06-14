import React, { useState } from 'react';
import { Alert, Button, CssBaseline, Divider, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Contact.css';


const Contact = () => {


    const [data, setData] = useState({})
    const [success, setSuccess] = useState(false)


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...data };
        newData[field] = value;
        console.log(field, value);
        setData(newData)
    }
    const handleSubmit = e => {
        e.preventDefault()

        fetch('https://portfolio-server-chi-two.vercel.app/clientData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true)
                    e.target.reset()
                }
            })
    }


    return (
        <>
            <CssBaseline />
            <main>
                <div id='contact' className='contactMain'>
                    <Container>
                        <Grid container
                            justifyContent='center'>
                            <Grid item sx={{ mt: '10rem' }}>
                                <Typography variant="h3" gutterBottom component="div">
                                    <span className='typoC2'>Contact</span> <span className='typoC1'>Me</span>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider className='dividerC' />
                        <div className='containerC'>
                            <Grid>
                                <Grid container spacing={2} sx={{ mt: 2 }}>
                                    <Grid item xs={8} sm={6} >
                                        <Grid align='justify' >

                                            <Typography variant='h4' gutterBottom component="div" className='cInfo'>
                                                Contact Info
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom component="div" className='infoTypo'>
                                                <EmailIcon className='icon' /> <span className='info'>mdalauddinovi62@gmail.com</span>
                                            </Typography>
                                            <Typography className='infoTypo' variant="subtitle1" gutterBottom component="div">
                                                <LocalPhoneIcon className='icon' />  <span className='info'> 01845704262</span>
                                            </Typography>
                                            <Typography className='infoTypo' variant="subtitle1" gutterBottom component="div">
                                                <LocalPhoneIcon className='icon' />   <span className='info'>01647541987</span>
                                            </Typography>
                                            <Typography className='infoTypo' variant="subtitle1" gutterBottom component="div">
                                                <LocationOnIcon className='icon' /> <span className='info'>Cumilla, Chauddagram, Gunabati.</span>
                                            </Typography>
                                        </Grid>
                                        <Grid className='link' align='justify'>

                                            <Grid>
                                                <a href="https://web.facebook.com/md.alauddinovi.10">
                                                    <FacebookIcon fontSize='medium' />
                                                </a>

                                            </Grid>

                                            <Grid>
                                                <a href="https://github.com/Imdad-Nope" >
                                                    <GitHubIcon fontSize='medium' />
                                                </a>
                                            </Grid>


                                            <Grid>
                                                <a href="https://www.linkedin.com/in/md-alauddin-30649b216/">
                                                    <LinkedInIcon fontSize='medium' />
                                                </a>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                    <Grid item xs={8} sm={6} align='inherit'>

                                        <form onSubmit={handleSubmit}>
                                            <Grid justifyContent='flex-end'>
                                                <input

                                                    className='textField'
                                                    placeholder='Name'
                                                    type="text"
                                                    name="clientName"
                                                    onBlur={handleOnBlur}
                                                    required
                                                />

                                                <input
                                                    className='textField'
                                                    type="email"
                                                    placeholder="Email"
                                                    name='email'
                                                    onBlur={handleOnBlur}
                                                    required

                                                />


                                                <textarea
                                                    className='textField message'
                                                    type='text'
                                                    name="message"
                                                    onBlur={handleOnBlur}
                                                    placeholder='Message'
                                                    cols="30"
                                                    rows="10"
                                                    required
                                                ></textarea>


                                                <Grid align='left' sx={{ mt: 1 }}>

                                                    <Button type='submit' className='btnC' variant="contained" endIcon={<SendIcon />}>
                                                        Send
                                                    </Button>

                                                </Grid>
                                            </Grid>
                                        </form>

                                        {success && < Alert severity="success">
                                            Sent message successfully !</Alert>}

                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main >
           
        </>
    );
};

export default Contact;