import { Avatar, Box, Button, Card, CardHeader, Container, Link, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../Contexts/DataProvider';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCustomButton from '../CarouselCustomButton/CarouselCustomButton';

import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';

import './Courses.css';


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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



const Courses = () => {
    const [courseList, setCourseList] = useContext(DataContext);
    useEffect(() => {
        fetch('courselist.json')
            .then(data => data.json())
            .then(data => setCourseList(data))
    }, []);
    console.log(courseList);

    const sliderRef = React.useRef(null);

    const Style = {
        Link: {
            color: 'black',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 'bold',
            marginTop: '20px',
            marginBottom: '20px',
            marginRight: '20px',
            '&:hover': {
                color: '#009FE3',
                borderBottom: '2px solid #009FE3',
            }

        }
    }

    return (
        <div>
            <Container sx={{ marginTop: '120px' }}>
                <Box>
                    <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:{xs:'column',md:'row',xl:'row'}}}>
                    <Typography sx={{ color: '#0D2A62', fontSize: {xs:'20px'}, fontWeight: 'bold' }}>Find What Fascinates You</Typography>
                    <CarouselCustomButton sliderRef={sliderRef}></CarouselCustomButton>
                    </Box>
                </Box>
                <Box sx={{ marginTop: '50px', display: 'flex', flexDirection: { xs: 'column', md: 'row', xl: 'row' } }}>
                    <Link sx={Style.Link}>All Categories</Link>
                    <Link sx={Style.Link}>Business</Link>
                    <Link sx={Style.Link}>Accounting</Link>
                    <Link sx={Style.Link}>Health & Fitness</Link>
                    <Link sx={Style.Link}>Employability</Link>
                    <Link sx={Style.Link}>Management</Link>
                    <Link sx={Style.Link}>Marketing</Link>
                    <Link sx={Style.Link}>Microsoft Office</Link>
                    <Link sx={Style.Link}>Personal Development</Link>
                </Box>

                <Box sx={{marginTop:'62px'}}>
                        <Slider ref={sliderRef} {...settings}>
                            {courseList.map(course => (
                                <Box key={course.id} course={course}>
                                    <Card sx={{ maxWidth: 345, margin:'0px 10px', boxShadow:3,position:'relative'}}>
                                        <Typography sx={{backgroundColor:'#FF8A00', color:'white', borderRadius:'20px',padding:'4px 10px', top:'10px',position:'absolute',fontSize:'12px',left:'10px',fontWeight:'bold'}}>Most Popular</Typography>
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={course.coverImage}
                                        />
                                        <CardContent>
                                            <Typography sx={{fontSize:'22px',color:''}}>
                                                {course.title}
                                            </Typography>
                                        </CardContent>
                                        <Box sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center',padding:'20px'}}>
                                            <Box sx={{display:'flex', alignItems: 'center'}}>
                                                <del style={{color:'gray', fontSize:'12px', marginRight:'8px'}}>{course.regularPrice}</del>
                                                <Typography sx={{color:'#009FE3',fontSize:'23px',fontWeight:'bold'}}>{course.discountPrice}</Typography>
                                            </Box>
                                            <Box>
                                                <Button variant='contained' sx={{padding:'5px 10px', backgroundColor:'#009FE3'}}>Buy Now</Button>
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