import React from 'react';
import { Container, CssBaseline, Grid, Typography, Divider } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import './Education.css';


const Education = () => {

    return (
        <>
            <CssBaseline />

            <main>
                <div id='education' className='eduMain'>
                    <Container>
                        <Grid>
                            <Grid container justifyContent='center'>
                                <Grid item sx={{ mt: '10rem' }}>
                                    <Typography variant="h3" gutterBottom component="div">
                                        <span className='typoE1'>My</span> <span className='typoE2'>Education</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider className='dividerE' />


                        <div className='containerE'>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Timeline >
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot className='timelineDot'>
                                                    <SchoolIcon />
                                                </TimelineDot>
                                                <TimelineConnector className='timelineConnect' />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography align='center' variant="body1" fontWeight='8' component="h1" gutterBottom className='yearE'>
                                                    2015
                                                </Typography>
                                                <Typography variant="h6" component="h1" gutterBottom>
                                                    <strong> <abbr title="Secondary School Certificate" className='typoE1'>SSC</abbr></strong>
                                                </Typography>



                                                <Typography variant='subtitle1' gutterBottom component="div" className='typoE3'>
                                                    I completed my SSC examination from Breasben Residential School Feni. And, i passed this examination with GPA 4.17.
                                                </Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Timeline >
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot className='timelineDot'>
                                                    <SchoolIcon />
                                                </TimelineDot>
                                                <TimelineConnector className='timelineConnect' />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography align='center' variant="body1" fontWeight='8' component="h1" gutterBottom className='yearE'>
                                                    2017
                                                </Typography>
                                                <Typography variant="h6" component="h1" gutterBottom className='typoE1'>
                                                    <strong> <abbr title="Higher Secondary School Certificate">HSC</abbr></strong>
                                                </Typography>

                                                <Typography variant='body1' gutterBottom component="div" className='typoE3' paragraph>
                                                    I completed my HSC examination from Bakalia Government College Chittagong. And, i passed this examination with GPA 4.93.
                                                </Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Timeline >
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot className='timelineDot'>
                                                    <SchoolIcon />
                                                </TimelineDot>
                                                <TimelineConnector className='timelineConnect' />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography align='center' variant="body1" fontWeight='8' component="h1" gutterBottom className='yearE'>
                                                    2019
                                                </Typography>
                                                <Typography variant="h6" gutterBottom component="div" className='typoE1'>
                                                    Honours
                                                </Typography>

                                                <Typography variant='body1' gutterBottom component="div" className='typoE3' paragraph>
                                                    I studied at Accounting in Feni college. I am the captain of my department. So, i can easily manage a team with intellectulity and by hardworking i arrange different kinds of ceremony taking help from our department authority.
                                                </Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Timeline >
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot className='timelineDot'>
                                                    <SchoolIcon />
                                                </TimelineDot>
                                                <TimelineConnector className='timelineConnect' />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography align='center' variant="body1" fontWeight='8' component="h1" gutterBottom className='yearE'>
                                                    2021
                                                </Typography>
                                                <Typography variant="h6" gutterBottom component="div" className='typoE1'>
                                                    Front End Development
                                                </Typography>

                                                <Typography variant='body1' gutterBottom component="div" className='typoE3' paragraph>
                                                    I completed a course called “Complete Web Development Course” by Programming Hero in September to November.I learnt more things about Web Development.And,now i am able to design, develop and make a responsive website.
                                                </Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </Grid>
                            </Grid>
                        </div>

                    </Container>
                </div>
            </main >

        </>
    );
};

export default Education;