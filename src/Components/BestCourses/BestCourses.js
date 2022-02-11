import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Button, Card, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import { DataContext } from '../../Contexts/DataProvider';
import Slider from 'react-slick';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import womenLaptop from '../../Images/womenlaptop.png';
// import cpd from '../../Images/cpd.png';
// import nsc from '../../Images/nscmember.png';
// import focusAward from '../../Images/focusawards.png';
// import training from '../../Images/training.png';
// import ukrlp from '../../Images/ukrlp.png';
// import iao from '../../Images/iao.png';
import rope from '../../Images/rope.png';
import './BestCourses.css';
import { styled } from '@mui/material/styles';


const Styles = {
    BestCoursesBg: {
        backgroundImage: `url(${rope})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: { xl: '2039px', xs: '2100px' },
        width: '100%',
        flexDirection: 'column',
        zIndex: '1',
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


const settings = {
    dots: true,
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


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const BestCourses = () => {

    const [bestCourses, setBestCourses] = useState([]);
    useEffect(() => {
        fetch('bestcourses.json')
            .then(data => data.json())
            .then(data => setBestCourses(data))
    }, []);
    console.log(bestCourses);

    const sliderRef = React.useRef(null);

    return (
        <Box sx={Styles.BestCoursesBg}>
            <Container maxWidth='xl' sx={{ width: { xl: '1372px', md: '1372px', xs: '350px' }, height: { xl: '641px', md: '541px', xs: '906px' }, position: 'relative', backgroundColor: '#FFFFFF', top: '120px' }}>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row', xl: 'row' } }}>
                        <Typography sx={{ color: '#0D2A62', fontSize: { xs: '20px', md: '40px', xl: '50px' }, fontWeight: 'bold', fontFamily: 'Inter', marginTop: '30px' }}>Best Selling Courses</Typography>
                        <Box sx={{ mt: '42px' }}>
                            <ArrowBackIcon sx={{ ...buttonStyles.prev, mr: '20px' }} onClick={() => sliderRef?.current?.slickPrev()} />
                            <ArrowForwardIcon sx={buttonStyles.next} onClick={() => sliderRef?.current?.slickNext()} />
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Slider ref={sliderRef} {...settings}>
                        {bestCourses.map(bestCourse => (
                            <Box key={bestCourse.id} bestCourse={bestCourse} >
                                <Card sx={{ maxWidth: 345, margin: '0px 10px', boxShadow: 3, position: 'relative', marginTop: '70px', marginBottom: '40px' }}>
                                    <Typography sx={{ backgroundColor: '#FF8A00', color: 'white', borderRadius: '20px', padding: '4px 10px', top: '10px', position: 'absolute', fontSize: '12px', left: '10px', fontWeight: 'bold' }}>Most Popular</Typography>
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
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <del style={{ color: 'gray', fontSize: '12px', marginRight: '8px' }}>{bestCourse.regularPrice}</del>
                                            <Typography sx={{ color: '#009FE3', fontSize: '23px', fontWeight: 'bold' }}>{bestCourse.discountPrice}</Typography>
                                        </Box>
                                        <Box>
                                            <Button variant='contained' sx={{ padding: '5px 10px', backgroundColor: '#009FE3' }}>Buy Now</Button>
                                        </Box>
                                    </Box>
                                </Card>
                            </Box>
                        ))}
                    </Slider>
                </Box>
                <Box sx={{ width: { xl: '1372px', md: '1372px', xs: '350px' }, height: { xl: '541px', md: '541px', xs: '906px' }, position: 'relative', backgroundColor: '#FFFFFF', marginTop: { xl: '200px', xs: '400px' }, left: { xl: '-26px', xs: '-18px' } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: { xl: 'row', md: 'row', xs: 'column' } }}>
                        <Box sx={{ padding: '0px 40px' }}>
                            <Typography sx={{ color: '#0D2A62', fontSize: { xs: '20px', md: '10px', xl: '50px' }, fontWeight: 'bold', fontFamily: 'Inter', marginTop: '30px' }}>
                                Why Learners Choose <br /> Apex Learning
                            </Typography>
                            <Typography sx={{ color: '#4E4848', fontSize: { xs: '10px', md: '10px', xl: '14px' }, fontWeight: 'bold', fontFamily: 'Inter', marginTop: '30px', lineHeight: '28px', marginBottom: '34px' }}>
                                A team of professionals with years of experience in online <br /> training prepared to take you as high as you want to go. Apex <br /> Learning is an online portal designed to achieve your dreams.

                                A gateway to the best professional courses to work in what you <br /> like. A complete catalogue of courses and didactic content.
                            </Typography>
                            <Button sx={{ borderRadius: '8px', border: '1px solid', color: '#009FE3', '&:hover': { backgroundColor: '#009FE3', color: 'white', border: '0px' } }}>Discover More</Button>
                        </Box>
                        <Box>
                            <img style={{ width: '100%', marginTop: '105px' }} src={womenLaptop} alt="" />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: { xl: '1372px', md: '1372px', xs: '350px' }, height: { xl: '321px', md: '321px', xs: '321px' }, position: 'relative', backgroundColor: '#FFFFFF', marginTop: { xl: '120px', xs: '100px' }, left: { xl: '-26px', xs: '-18px' } }}>
                    <Typography sx={{ color: '#0D2A62', fontSize: { xs: '20px', md: '40px', xl: '50px' }, fontWeight: 'bold', fontFamily: 'Inter', marginTop: '30px', textAlign: 'center', padding: '30px 0px' }}>Quality Assured By</Typography>
                    
                </Box>
            </Container>
        </Box>
    );
};

export default BestCourses;