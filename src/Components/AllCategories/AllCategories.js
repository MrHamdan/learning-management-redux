import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Pagination, Paper, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer.js/Footer';
import Header from '../Header/Header';
import { styled } from '@mui/material/styles';
import allcategories from '../../Images/allcategories.png';
import { Link } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Style = {
    bgImage: {
        backgroundImage: `url(${allcategories})`,
        backgroundSize: 'cover',
        height: '280px',
        width: '100%',
        backgroundRepeat: 'no-repeat',
    }
}



const AllCategories = () => {

    const [courseList, setCourseList] = useState([]);
    useEffect(() => {
        fetch('/coursedata.json')
            .then(data => data.json())
            .then(data => setCourseList(data))
    }, []);

    return (
        <Box>
            <Header color='white' />
            <Box sx={{ marginTop: '100px', height: { xl: '2000px', xs: '4900px' } }}>
                <Container maxWidth='xl'>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8} xl={4}>
                                <Item sx={{ boxShadow: 0 }}>
                                    <Typography sx={{ textAlign: 'left', fontSize: '24px', fontFamily: 'Inter', fontWeight: 'bold', color: '#201E1E' }}>
                                        All Categories
                                    </Typography>
                                    <hr />
                                    <Stack
                                        direction={{ xs: 'column', sm: 'row', md: 'column' }}
                                        spacing={{ xs: 1, sm: 2, md: 0 }}
                                    >
                                        <Item sx={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Inter', fontWeight: '500', width: { xl: '454px', xs: '300px' }, height: '60px', display: 'flex', alignItems: 'center', '&:hover': { backgroundColor: '#0D2A62', color: 'white' }, boxShadow: 0, borderRadius: '8px' }}>Personal Development</Item>
                                        <Item sx={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Inter', fontWeight: '500', width: { xl: '454px', xs: '300px' }, height: '60px', display: 'flex', alignItems: 'center', '&:hover': { backgroundColor: '#0D2A62', color: 'white' }, boxShadow: 0, borderRadius: '8px' }}>Health, Fitness and Social Care</Item>
                                        <Item sx={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Inter', fontWeight: '500', width: { xl: '454px', xs: '300px' }, height: '60px', display: 'flex', alignItems: 'center', '&:hover': { backgroundColor: '#0D2A62', color: 'white' }, boxShadow: 0, borderRadius: '8px' }}>Career and Employability</Item>
                                        <Item sx={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Inter', fontWeight: '500', width: { xl: '454px', xs: '300px' }, height: '60px', display: 'flex', alignItems: 'center', '&:hover': { backgroundColor: '#0D2A62', color: 'white' }, boxShadow: 0, borderRadius: '8px' }}>Business</Item>
                                        <Item sx={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Inter', fontWeight: '500', width: { xl: '454px', xs: '300px' }, height: '60px', display: 'flex', alignItems: 'center', '&:hover': { backgroundColor: '#0D2A62', color: 'white' }, boxShadow: 0, borderRadius: '8px' }}>Education and Teaching</Item>
                                        <Item sx={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Inter', fontWeight: '500', width: { xl: '454px', xs: '300px' }, height: '60px', display: 'flex', alignItems: 'center', '&:hover': { backgroundColor: '#0D2A62', color: 'white' }, boxShadow: 0, borderRadius: '8px' }}>IT, Software and Technology</Item>
                                        <Item sx={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Inter', fontWeight: '500', width: { xl: '454px', xs: '300px' }, height: '60px', display: 'flex', alignItems: 'center', '&:hover': { backgroundColor: '#0D2A62', color: 'white' }, boxShadow: 0, borderRadius: '8px' }}>Finance and Accounting</Item>
                                        <Item sx={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Inter', fontWeight: '500', width: { xl: '454px', xs: '300px' }, height: '60px', display: 'flex', alignItems: 'center', '&:hover': { backgroundColor: '#0D2A62', color: 'white' }, boxShadow: 0, borderRadius: '8px' }}>Microsoft Office</Item>
                                        <Item sx={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Inter', fontWeight: '500', width: { xl: '454px', xs: '300px' }, height: '60px', display: 'flex', alignItems: 'center', '&:hover': { backgroundColor: '#0D2A62', color: 'white' }, boxShadow: 0, borderRadius: '8px' }}>Compliance</Item>
                                        <Item sx={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Inter', fontWeight: '500', width: { xl: '454px', xs: '300px' }, height: '60px', display: 'flex', alignItems: 'center', '&:hover': { backgroundColor: '#0D2A62', color: 'white' }, boxShadow: 0, borderRadius: '8px' }}>Marketing</Item>
                                        <Item sx={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Inter', fontWeight: '500', width: { xl: '454px', xs: '300px' }, height: '60px', display: 'flex', alignItems: 'center', '&:hover': { backgroundColor: '#0D2A62', color: 'white' }, boxShadow: 0, borderRadius: '8px' }}>Photography and Design</Item>
                                    </Stack>
                                </Item>
                            </Grid>
                            <Grid item xs={12} xl={8}>
                                <Item sx={{ ...Style.bgImage, boxShadow: '0', textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                                    <Box sx={{ marginLeft: '42px' }}>
                                        <Typography sx={{ color: 'white', fontSize: '36px', fontFamily: 'Inter', fontWeight: 'bold', marginBottom: '15px' }}>
                                            Online Personal <br />
                                            Development Courses
                                        </Typography>
                                        <Typography sx={{ color: 'white', fontSize: '16px', fontFamily: 'Inter', fontWeight: '500', marginBottom: '20px' }}>
                                            The expert in anything was once a beginner
                                        </Typography>
                                        <Button variant='contained' sx={{ width: '161px', height: '51px', backgroundColor: '#009FE3', fontSize: '16px', fontFamily: 'Inter', fontWeight: 'bold', textTransform: 'none' }}>Get Started</Button>
                                    </Box>
                                </Item>
                                <Item sx={{ boxShadow: '0' }}>

                                    <Grid container spacing={{ xs: 2, md: 3, xl:1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        {courseList.map((course) => (
                                            <Grid key={course.id} item xs={12} sm={4} md={4} xl={4}>
                                                <Item sx={{ boxShadow: '0' }}>
                                                    <Card sx={{ maxWidth: 345, position: 'relative' }}>
                                                        <Typography sx={{ backgroundColor: '#FF8A00', color: 'white', borderRadius: '20px', padding: '4px 10px', top: '10px', position: 'absolute', fontSize: '12px', left: '10px', fontWeight: 'bold', fontFamily: 'Inter' }}>Most Popular</Typography>
                                                        <CardMedia
                                                            component="img"
                                                            height="140"
                                                            image={course.coverImage}
                                                            alt="green iguana"
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'left' }}>
                                                                {course.title}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                <del style={{ color: 'gray', fontSize: '15px', marginRight: '4px', fontWeight: 'bold', fontFamily: 'Inter' }}>£{course.regularPrice}</del>
                                                                <Typography sx={{ color: '#009FE3', fontSize: '24px', fontWeight: 'bold', fontFamily: 'Inter', }}>£{course.discountPrice}</Typography>
                                                            </Typography>
                                                        </CardContent>
                                                        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                                            <Link to={`/coursedetail/${course.id}`} style={{ textDecoration: 'none' }}><Button variant='contained' sx={{ padding: '5px 10px', backgroundColor: '#009FE3', width: '123px', height: '40px', borderRadius: '4px', fontFamily: 'Inter', textTransform: 'none' }}>Buy Now</Button></Link>
                                                        </CardActions>
                                                    </Card>
                                                </Item>
                                            </Grid>
                                        ))}

                                    </Grid>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                                        <Stack spacing={2}>
                                            <Pagination count={10} color="primary" />
                                        </Stack>
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </Box>
    );
};

export default AllCategories;