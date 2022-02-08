import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bannerImage from '../../Images/Banner.png';

const Banner = () => {

    const Styles = {
        banner: {
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: '900',
            '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.5)',
            },
        }
    }

    return (
        <div style={Styles.banner}>
            <Container>
                <Box><Typography sx={{ fontSize: '80px', fontWeight: '900', color: 'white', marginBottom: '20px' }}>
                    ENTER THE ERA OF <br /> APPX LEARNING
                </Typography>
                    <Typography variant="h6" sx={{ fontSize: '28px', fontWeight: '400', color: 'white' }}>
                        Learn Wherever and When you Want Without Limits
                    </Typography></Box>
                <Box sx={{ textAlign: 'center', marginTop: '30px' }}><Button variant="contained" sx={{ padding: '10px 40px', backgroundColor: '#0D2A62 !important' }} >Start Learning</Button></Box>
            </Container>
        </div>
    );
};

export default Banner;