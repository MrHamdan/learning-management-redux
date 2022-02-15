import { Avatar, Box, Button, Card, CardHeader, Container, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../Contexts/DataProvider';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


import './Courses.css';
import { Link } from 'react-router-dom';

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


const settingsOne = {
    dots: true,
    dotsClass: 'slick-dots-one',
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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


const Style = {
    Link: {
        color: 'black',
        textDecoration: 'none',
        fontSize: '15px',
        fontWeight: '600',
        marginTop: '20px',
        marginBottom: '20px',
        marginRight: '50px',
        fontFamily: 'Inter',
        '&:hover': {
            color: '#009FE3',
            borderBottom: '2px solid #009FE3',
            cursor: 'pointer'
        }

    }
}



const Courses = () => {
    const [courseList, setCourseList] = useContext(DataContext);
    useEffect(() => {
        fetch('courselist.json')
            .then(data => data.json())
            .then(data => setCourseList(data))
    }, []);
    console.log(courseList);

    const sliderRef = React.useRef(null);



    return (
        <div>
            <Container maxWidth='xl' sx={{ marginTop: '120px' }}>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row', xl: 'row' } }}>
                        <Typography sx={{ color: '#0D2A62', fontSize: { xs: '20px', md: '40px', xl: '50px' }, fontWeight: '800', fontFamily: 'Inter' }}>Find What Fascinates You</Typography>
                        <Box><ArrowBackIcon sx={{ ...buttonStyles.prev, mr: '20px' }} onClick={() => sliderRef?.current?.slickPrev()} />
                            <ArrowForwardIcon sx={buttonStyles.next} onClick={() => sliderRef?.current?.slickNext()} /></Box>
                    </Box>
                </Box>
                <Box sx={{ marginTop: '50px', display: 'flex', flexDirection: { xs: 'column', md: 'column', xl: 'row' } }}>
                    <Link to='' style={{ textDecoration: 'none' }}> <Typography sx={Style.Link}>All Projects</Typography> </Link>
                    <Link to='' style={{ textDecoration: 'none' }}><Typography sx={Style.Link}>Business</Typography></Link>
                    <Link to='' style={{ textDecoration: 'none' }}><Typography sx={Style.Link}>Accounting</Typography></Link>
                    <Link to='' style={{ textDecoration: 'none' }}><Typography sx={Style.Link}>Health & Fitness</Typography></Link>
                    <Link to='' style={{ textDecoration: 'none' }}><Typography sx={Style.Link}>Employability</Typography></Link>
                    <Link to='' style={{ textDecoration: 'none' }}><Typography sx={Style.Link}>Management</Typography></Link>
                    <Link to='' style={{ textDecoration: 'none' }}><Typography sx={Style.Link}>Marketing</Typography></Link>
                    <Link to='' style={{ textDecoration: 'none' }}><Typography sx={Style.Link}>Microsoft Office</Typography></Link>
                    <Link to='' style={{ textDecoration: 'none' }}><Typography sx={Style.Link}>Personal Development</Typography></Link>
                </Box>

                <Box sx={{ marginTop: '62px' }}>
                    <Slider ref={sliderRef} {...settingsOne}>
                        {courseList.map(course => (
                            <Box key={course.id} course={course}>
                                <Card sx={{ maxWidth: 345, margin: '0px 10px', boxShadow: 3, position: 'relative' }}>
                                    <Typography sx={{ backgroundColor: '#FF8A00', color: 'white', borderRadius: '20px', padding: '4px 10px', top: '10px', position: 'absolute', fontSize: '12px', left: '10px', fontWeight: 'bold' }}>Most Popular</Typography>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={course.coverImage}
                                    />
                                    <CardContent>
                                        <Typography sx={{ fontSize: '22px', color: '' }}>
                                            {course.title}
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <del style={{ color: 'gray', fontSize: '15px', marginRight: '4px', fontWeight: 'bold', fontFamily: 'Inter' }}>{course.regularPrice}</del>
                                            <Typography sx={{ color: '#009FE3', fontSize: '24px', fontWeight: 'bold', fontFamily: 'Inter', }}>{course.discountPrice}</Typography>
                                        </Box>
                                        <Box>
                                            <Link to={`/coursedetail/${course.id}`} style={{ textDecoration: 'none' }}><Button variant='contained' sx={{ padding: '5px 10px', backgroundColor: '#009FE3', width: '123px', height: '40px', borderRadius: '4px', fontFamily: 'Inter', textTransform: 'none' }}>Buy Now</Button></Link>
                                        </Box>
                                    </Box>
                                </Card>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </div>
    );
};

export default Courses;