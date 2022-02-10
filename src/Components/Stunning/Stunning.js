import { Box } from '@mui/system';
import React from 'react';
import stunningBackground from '../../Images/stunningbackground.png';


const Styles = {
    stunningBg: {
        backgroundImage: `url(${stunningBackground})`,
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
    }
}


const Stunning = () => {
    return (
        <Box>

        </Box>
    );
};

export default Stunning;