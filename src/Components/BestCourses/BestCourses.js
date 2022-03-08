import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Button, Card, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import { CourseDataContext } from '../../Contexts/CourseDataProvider';
import Slider from 'react-slick';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import womenLaptop from '../../Images/womenlaptop.png';
import cpd from '../../Images/cpd.png';
import nsc from '../../Images/nsc.png';
import focus from '../../Images/focus.png';
import training from '../../Images/training.png';
import ukrlp from '../../Images/ukrlp.png';
import iao from '../../Images/iao.png';
import rope from '../../Images/rope.png';
import './BestCourses.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBestCourses } from '../../redux/action';



const Styles = {
    BestCoursesBg: {
        backgroundImage: `url(${rope})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: {xs:'3039px',xl:'2300px'},
    }
}


const buttonStyles = {
    next: {
        background: '#EEEEEE',
        borderRadius: '6px',
        padding: '20px',
        color: 'black',
        '&:hover': {
            color: 'white',
            background: '#009FE3',
        }
    },
    prev: {
        background: '#EEEEEE',
        borderRadius: '6px',
        padding: '20px',
        color: 'black',
        '&:hover': {
            color: 'white',
            background: '#009FE3',
        }
    }
}


const settingsThree = {
    dots: true,
    dotsClass:'slick-dots-three',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


const BestCourses = () => {

    const bestCourses = useSelector(state => state.bestCourses);
    const dispatch = useDispatch();
    console.log(bestCourses);
    useEffect(() => {
        dispatch(fetchBestCourses());
    }, []);
    
    const sliderRef = React.useRef(null);

    return (
        <Box sx={Styles.BestCoursesBg}>
            <Container maxWidth='xl'>
                <Box>
                    <Box sx={{ height: { xl: '697px', xs: '770px' }, backgroundColor: 'white', padding: { xl: '78px 98px', xs: '20px 20px' }, borderRadius: '10px',position: 'relative' , top:'120px'}}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row', xl: 'row' } }}>
                            <Typography sx={{ color: '#0D2A62', fontSize: { xs: '20px', md: '40px', xl: '48px' }, fontWeight: '800', fontFamily: 'Inter', marginTop: '30px' }}>Best Selling Courses</Typography>
                            <Box sx={{ mt: '42px', marginBottom:'52px' }}>
                                <ArrowBackIcon sx={{ ...buttonStyles.prev, mr: '20px' }} onClick={() => sliderRef?.current?.slickPrev()} />
                                <ArrowForwardIcon sx={buttonStyles.next} onClick={() => sliderRef?.current?.slickNext()} />
                            </Box>
                        </Box>
                        <Box>
                            <Slider ref={sliderRef} {...settingsThree}>
                                {bestCourses.map(bestCourse => (
                                    <Box key={bestCourse.id} bestCourse={bestCourse} >
                                        <Card sx={{ height: '400px',  boxShadow: 3, position: 'relative', marginTop: '70px', marginBottom: '40px', margin:'0px 10px' }}>
                                            <Typography sx={{ backgroundColor: '#FF8A00', color: 'white', borderRadius: '20px', padding: '8px 15px', top: '10px', position: 'absolute', fontSize: '12px', left: '10px', fontWeight: 'bold' }}>Most Popular</Typography>
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                image={bestCourse.coverImage}
                                            />
                                            <CardContent>
                                                <Typography sx={{ fontSize: '22px', color: '' }}>
                                                    {bestCourse.title}
                                                </Typography>
                                            </CardContent>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '20px' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <del style={{ color: 'gray', fontSize: '15px', marginRight: '4px', fontWeight: 'bold', fontFamily: 'Inter'}}>£{bestCourse.regularPrice}</del>
                                                    <Typography sx={{ color: '#009FE3', fontSize: '24px', fontWeight: 'bold', fontFamily: 'Inter',}}>£{bestCourse.discountPrice}</Typography>
                                                </Box>
                                                <Box>
                                                <Link to={`/coursedetail/${bestCourse.id}`} style={{ textDecoration: 'none' }}><Button variant='contained' sx={{ padding: '5px 10px', backgroundColor: '#009FE3', width: '123px', height: '40px', borderRadius: '4px', fontFamily: 'Inter', textTransform: 'none' }}>Buy Now</Button></Link>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </Box>
                                ))}
                            </Slider>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ marginTop: '200px' }}>
                    <Box sx={{ height: { xl: '442px', xs: '770px' }, backgroundColor: 'white', padding: { xl: '78px 98px', xs: '20px 20px' }, borderRadius: '10px' }}>
                        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: { xs: 'column', xl: 'row' } }}>
                            <Grid item xs={12} xl={6}>
                                <Typography sx={{ color: '#0D2A62', fontSize: { xs: '20px', md: '10px', xl: '48px' }, fontWeight: '800', fontFamily: 'Inter', marginTop: '30px' }}>
                                    Why Learners Choose <br /> Apex Learning
                                </Typography>
                                <Typography sx={{ color: '#4E4848', fontSize: { xs: '10px', md: '10px', xl: '14px' }, fontWeight: 'bold', fontFamily: 'Inter', marginTop: '30px', lineHeight: '28px', marginBottom: '34px' }}>
                                    A team of professionals with years of experience in online training prepared to take you as high as you want to go. Apex Learning is an online portal designed to achieve your dreams.

                                    A gateway to the best professional courses to work in what you like. A complete catalogue of courses and didactic content.
                                </Typography>
                                <Button sx={{ borderRadius: '8px', border: '1px solid', color: '#009FE3', '&:hover': { backgroundColor: '#009FE3', color: 'white', border: '0px' }, width:'183px', height:'51px', textTransform: 'none', fontSize:'16px', fontWeight:'bold', fontFamily:'Inter'}}>Discover More</Button>
                            </Grid>
                            <Grid item xs={12} xl={6}>
                                <img style={{ width: '100%' }} src={womenLaptop} alt="" />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box sx={{ marginTop: '120px' }}>
                    <Box sx={{ height: { xl: '321px', xs: '900px' }, backgroundColor: 'white', padding: { xl: '78px 98px', xs: '20px 20px' }, borderRadius: '10px' }}>
                        <Grid container spacing={2} sx={{display:'flex', justifyContent: 'center'}}>
                            <Grid item xs={12} xl={12}>
                                <Typography sx={{ color: '#0D2A62', fontSize: { xs: '20px', md: '10px', xl: '48px' }, fontWeight: '800', fontFamily: 'Inter', marginTop: '30px',textAlign: 'center',marginBottom:'28px'}}>Quality Assured By</Typography>
                            </Grid>
                            <Grid sx={{ display: 'flex', alignItems: 'center', gap:4, flexDirection:{xs: 'column',xl:'row'}}}>
                                <Grid item xs={12} xl={2} >
                                    <Paper sx={{ width: '159px', height: '107px',display: 'flex', alignItems: 'center', boxShadow: '0', '&:hover':{boxShadow:'0px 8px 20px 0px gray'}, padding:'0px 10px'}}>
                                        <img style={{ width: '100%' }} src={cpd} alt="" />
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} xl={2}>
                                    <Paper sx={{ width: '208px', height: '111.6px',display: 'flex', alignItems: 'center', boxShadow: '0', '&:hover':{boxShadow:'0px 8px 20px 0px gray'}, padding:'0px 10px' }}>
                                        <img style={{ width: '100%' }} src={nsc} alt="" />
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} xl={2}>
                                    <Paper sx={{ width: '237px', height: '107px',display: 'flex', alignItems: 'center', boxShadow: '0', '&:hover':{boxShadow:'0px 8px 20px 0px gray'}, padding:'0px 10px' }}>
                                        <img style={{ width: '100%' }} src={focus} alt="" />
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} xl={2}>
                                    <Paper sx={{ width: '181px', height: '107px',display: 'flex', alignItems: 'center', boxShadow: '0', '&:hover':{boxShadow:'0px 8px 20px 0px gray'}, padding:'0px 10px' }}>
                                        <img style={{ width: '100%' }} src={training} alt="" />
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} xl={2}>
                                    <Paper sx={{ width: '236px', height: '107px',display: 'flex', alignItems: 'center', boxShadow: '0', '&:hover':{boxShadow:'0px 8px 20px 0px gray'}, padding:'0px 10px' }}>
                                        <img style={{ width: '100%' }} src={ukrlp} alt="" />
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} xl={2}>
                                    <Paper sx={{ width: '129px', height: '107px',display: 'flex', alignItems: 'center', boxShadow: '0', '&:hover':{boxShadow:'0px 8px 20px 0px gray'}, padding:'0px 10px' }}>
                                        <img style={{ width: '100%' }} src={iao} alt="" />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default BestCourses;