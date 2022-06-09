import React from 'react';
import { Box, Stack } from '@mui/material';
import Footer from '../../../Footer/Footer';
import About from '../../About/About';
import Blog from '../../Blog/Blog';
import Contact from '../../Contact/Contact';
import Education from '../../Education/Education';
import Projects from '../../Projects/Projects';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';

const Home = () => {

    return (
        <Box>
            <Stack
            >

                <NavBar />
                <Banner />
                <About />
                <Education />
                {/* <Blog /> */}
                <Projects />
                <Contact />
                <Footer />
            </Stack>

        </Box>

    );
};

export default Home;