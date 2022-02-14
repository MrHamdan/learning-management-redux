import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bannerImage from '../../Images/Banner.png';

const Banner = () => {

    const Styles = {
        bannerImage: {
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            zIndex: '1',
            '&:before': {
                content: '""',
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: '#009FE3',
                opacity: '0.6',
                zIndex: '-1',
            }
        }
    }

    return (
        <div>
            <Box sx={Styles.bannerImage}>
                <Container>
                    <Box sx={{position: {xl:'relative'}, left:{xl:'180px'}}}><Typography sx={{ fontSize: { xs: '30px', md: '50px', xl: '64px' }, fontWeight: '900', color: 'white', marginBottom: '20px', fontFamily: 'Inter' }}>
                        ENTER THE ERA OF <br /> APPX LEARNING
                    </Typography>
                        <Typography sx={{ fontSize: { xs: '20px', md: '30px', xl: '18px' }, fontWeight: 'normal', color: 'white', fontFamily: 'Inter',lineHeight: '28px'}}>
                            Learn Wherever and When you Want Without Limits
                        </Typography></Box>
                    <Box sx={{ textAlign: 'center', marginTop: '30px' }}><Button variant="contained" sx={{ padding: '10px 40px', backgroundColor: '#0D2A62 !important', textTransform: 'none', width: '182px', height: '51px', fontFamily: 'Inter', fontWeight: '800', fontSize: '13px' }} >Start Learning</Button></Box>
                </Container>
            </Box>
        </div>
    );
};

export default Banner;