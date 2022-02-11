import { Button, Card, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import stunningBackground from '../../Images/stunningbackground.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Stunning.css';


const Styles = {
    stunningBg: {
        backgroundImage: `url(${stunningBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '650px',
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
            background: '#0D2A62',
        }
    },
    prev: {
        background: '#EEEEEE',
        borderRadius: '6px',
        padding: '20px',
        color: 'black',
        '&:hover': {
            color: 'white',
            background: '#0D2A62',
        }
    }
}


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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



const Stunning = () => {

    const [stunnings, setStunning] = useState([]);
    useEffect(() => {
        fetch('stunning.json')
            .then(res => res.json())
            .then(data => setStunning(data))
    }, [])
    console.log(stunnings)

    const sliderRef = React.useRef(null);

    return (
        <Box sx={{ ...Styles.stunningBg, marginTop: '50px' }}>
            <Container maxWidth='xl'>
                <Box><ArrowBackIcon sx={{ ...buttonStyles.prev, mr: '20px', position: 'relative', left: {xl:'-70px', md:'-100px', xs:'0px'}, top: {xl:'250px',md:'100px',xs:'-30px'} }} onClick={() => sliderRef?.current?.slickPrev()} />
                    <ArrowForwardIcon sx={{ ...buttonStyles.next, position: 'relative', left: {xl:'1400px',md:'100px',xs:'0px'}, top: {xl:'250px',md:'100px',xs:'-30px'} }} onClick={() => sliderRef?.current?.slickNext()} /></Box>
                <Slider ref={sliderRef} {...settings}>
                    {stunnings.map(stunning => (
                        <Box key={stunning.id} stunning={stunning}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around',marginBottom: '40px'}}>
                                <Box>
                                    <Typography sx={{ color: 'white', fontSize: {xl:'48px',md:'24px',xs:'18px'},fontWeight:'800' }}>Take Stunning Photos <br/> for Instagram</Typography>
                                    <Typography sx={{ color: 'white', fontSize: {xl:'16px',xs:'10px'}, marginTop: '20px',fontFamily:'Inter' }}>Create thoughtful and personal images in this workshop,<br /> kicking off on June 28th.</Typography>
                                    <Button variant='contained' sx={{ backgroundColor: '#0D2A62', marginTop: '20px' }}>Join Today</Button>
                                </Box>
                                <Box>
                                    <img style={{ width: '100%' }} src={stunning.image} alt="" />
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Container>
        </Box>
    );
};

export default Stunning;