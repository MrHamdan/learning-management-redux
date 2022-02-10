import { Card, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import stunningBackground from '../../Images/stunningbackground.png';


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
            <Container>
            <Slider ref={sliderRef} {...settings}>
                {stunnings.map(stunning => (
                    <Box key={stunning.id} stunning={stunning}>
                        <Box>
                            <Box>
                            <Typography sx={{color:'white', fontSize:'30px'}}>{stunning.title}</Typography>
                        <Typography sx={{color:'white', fontSize:'20px'}}>{stunning.description}</Typography>
                            </Box>
                            <Box>
                                <img src={stunning.image} alt="" />
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