import React from 'react';
import { Box, Container, CssBaseline, Divider, Grid, Typography } from '@mui/material';
import './Blog.css';


const Blog = () => {

    return (
        <>
            <CssBaseline />
            <Box flex={4} sx={{
                display: {
                    xs: 0, sm: 'block', md: 900,
                    lg: 1200,
                    xl: 1536,
                }
            }}>
                <main>
                    <div className='blogMain' id='blog'>
                        <Container>
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                maxWidth='lg'
                            >
                                <Grid item sx={{ mt: '10rem' }}>
                                    <Typography variant="h3" gutterBottom component="div">
                                        <span className='blogH1'>My</span> <span className='blogH2'>Blog</span>
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Divider className='dividerbl' />


                            <div className='containerBl'>
                                <Container>
                                    <Grid>
                                        <Grid container spacing={2} direction='column' justifyContent='center' >
                                            <Grid item xs={12}>
                                                <Typography variant="h6" gutterBottom component="div" className='descH'>
                                                    What is JSX ?
                                                </Typography>
                                                <Typography variant="subtitle1" gutterBottom component="div" align='justify' className='desc'>
                                                    JSX is not original HTML.It’s Javascript code looks like html and it just provides syntactic sugar for the react function. React library provides createElement method.This method accepts minimum three parameters.The first parameter is a string which specifies html tag to be rendered like div.The second parameter we can pass any optional properties.The third parameter is the children for the html tag.Reactjs convert the jsx in js object.It's Javascript code looks like html which one behind the scene does execute the react.createElement method.
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h6" gutterBottom component="div" className='descH'>
                                                    What is a context API?
                                                </Typography>
                                                <Typography variant="subtitle1" gutterBottom component="div" align='justify' className='desc'>
                                                    In the 16.3 version of react context API is added in react.It permits a developer to share state across the complete app.It helps to create global variables that can be passed.It is an easy way when it comes to move props from grandparent to parent to child. To use context API all we need is React.createContext() then it will return a customer and supplier.Supplier is a component that as its names proposes gives the state to its children.Customer is a component that consumes and uses the state.
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h6" gutterBottom component="div" className='descH'>
                                                    What is Virtual dom?
                                                </Typography>
                                                <Typography variant="subtitle1" gutterBottom component="div" align='justify' className='desc'>
                                                    Virtual DOM (VDOM) is an in-memory representation of real DOM. The presentation of a UI is stored in memory and synced with the "real" DOM. This is a step that occurs between calling the render function and displaying the material on the screen. This whole process is called reunion. <br />
                                                    <u> Virtual Dom:</u><br />
                                                    Can’t directly update HTML.<br />
                                                    Update JSX if element updates.<br />
                                                    DOM manipulation is very easy.<br />
                                                    No memory wastage.
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h6" gutterBottom component="div" className='descH'>
                                                    SQL vs NO-SQL Database
                                                </Typography>
                                                <Typography variant="subtitle1" gutterBottom component="div" align='justify' className='desc'>
                                                    <u>  SQL:</u><br />
                                                    Relational database.<br />
                                                    Table based database.<br />
                                                    Sql databases are vertically scalable.<br />
                                                    Sql databases have fixed or predefined schemas.<br />
                                                    <u> NOSQL:</u><br />
                                                    Non-relational database.<br />
                                                    Document based databases, key value stores, graph stores, wide column stores.<br />
                                                    NoSql databases are horizontally scalable.<br />
                                                    NoSql databases have a dynamic schema.
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h6" gutterBottom component="div" className='descH'>
                                                    CURD Operations
                                                </Typography>
                                                <Typography variant="subtitle1" gutterBottom component="div" align='justify' className='desc'>
                                                    CURD stands for create, update, read, delete.Create, update, read, delete refers to functions that are considered necessary to implement a persistent storage application.To perform different types of operations on data within the database we use CRUD functions.<br />
                                                    <strong className='strongTypo'>Create:</strong> By using the create function we can create a new record in the database.<br />
                                                    <strong className='strongTypo'>Update:</strong> By using the update function is used to modify existing records that exist in the database. <br />
                                                    <strong className='strongTypo'>Read:</strong> Read function works like a search function. In the read function we can search and retrieve specific data from the table and read their values. <br />
                                                    <strong className='strongTypo'>Delete:</strong> By using the delete function allows users to remove records from a database that is no longer needed.
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} className='descH'>
                                                <Typography variant="h6" gutterBottom component="div">
                                                    NodeJS and MongoDB In ReactJs Project
                                                </Typography>
                                                <Typography variant="subtitle1" gutterBottom component="div" align='justify' className='desc'>
                                                    We can use Nodejs and MongoDB in our React project because- <br />
                                                    <strong className='strongTypo'> High server load:</strong> When our project needs many requests and maintains server load to balance. <br />
                                                    <strong className='strongTypo'> Real-time data:</strong> It is highly recommended that using node js for real-time data and mongoDb is very useful for real-time data. <br />
                                                    <strong className='strongTypo'> JSON APIs:</strong> JSON API is very efficient for my project because of reusability and easy code sharing with reactjs.MongoDb stores the data as a JSON. <br />
                                                    <strong className='strongTypo'> Single Page Applications:</strong>  Node Js is lightweight backend model for asynchronous data loading by callback function and easy to load data from mongoDb to develop single page applications in react. <br />
                                                    <strong className='strongTypo'> MERN Stack:</strong> Node js, Express js and MongoDb create MERN stack with React.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </div>
                        </Container>
                    </div>
                </main>
            </Box>

        </>
    );
};

export default Blog;