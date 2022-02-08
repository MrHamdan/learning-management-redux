import { Container } from '@mui/material';
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
        }
    }

    return (
        <div style={Styles.banner}>
            <Container>

            </Container>
        </div>
    );
};

export default Banner;