import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import './NavBar.css';


const NavBar = () => {
    return (
     
        <>

            <CssBaseline />
            <Box flex={1} sx={{ display: { xs: 0, sm: 'block' } }}>
                    <div>
                    <nav className="navbar">
                        <ul className="navbar-nav">
                            <li className="logo">
                                <a href="#home" className="nav-link">
                                    <span className="link-text logo-text">Hello</span>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fad"
                                        data-icon="angle-double-right"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                                    >
                                        <g className="fa-group">
                                            <path
                                                fill="currentColor"
                                                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                                className="fa-secondary"
                                            ></path>
                                            <path
                                                fill="currentColor"
                                                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                                className="fa-primary"
                                            ></path>
                                        </g>
                                    </svg>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#home" className="nav-link">
                                    <span className='link-text'>Home</span>

                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#about" className="nav-link">
                                    <span className='link-text'>About</span>

                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#education" className="nav-link">
                                    <span className='link-text'>Education</span>

                                </a>
                            </li>
                            {/* <li class="nav-item">
                                <a href="#blog" class="nav-link">
                                    <span className='link-text'>Blog</span>

                                </a>
                            </li> */}

                            <li className="nav-item">
                                <a href="#project" className="nav-link">
                                    <span className='link-text'>Project</span>

                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">
                                    <span className='link-text'>Contact</span>

                                </a>
                            </li>
                        </ul>
                    </nav>
                    </div>
            </Box>
        </>
      

    );
};

export default NavBar;