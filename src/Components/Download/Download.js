import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import downloadbg from '../../Images/download.png';
import phone from '../../Images/phone.png';
import googleplay from '../../Images/googleplay.png';
import appstore from '../../Images/appstore.png';
import { styled } from '@mui/material/styles';


const Styles = {
    width: '100%',
    height: { xl: '781px', xs: '1200px' },
}

const download = {
    downloadBox: {
        backgroundImage: `url(${downloadbg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: { xl: '1170px', xs: '100%' },
        height: { xl: '506px', xs: '1050px' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Download = () => {
    return (
        <Box sx={Styles}>
            <Container>
                <Box sx={{ ...download.downloadBox, mt: { xl: '120px', xs: '150px' } }}>

                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: { xs: 'column', md: 'row', xl: 'row' } }}>
                        <Box sx={{ mt: {xl:'150px'}, padding: { xs: '20px' },marginRight:'30px' }}>
                            <Typography sx={{ fontFamily: 'Inter', fontSize: { xl: '48px' }, fontWeight: '800', color: 'white' }}>
                                Download our app <br />
                                and get bonus
                            </Typography>
                            <Typography sx={{ fontFamily: 'Inter', fontSize: '16px', color: 'white', lineHeight: '28px' }}>
                                A team of professionals with years of experience in online training <br /> prepared to take you as high as you want to go. Apex Learning is an <br /> online portal designed to achieve your dreams.
                            </Typography>
                            <Box sx={{ marginTop: '30px' }}>
                                <a href="https://www.playstore.com"><img style={{ marginRight: '30px' }} src={googleplay} alt="" /></a><a href="https://www.apple.com"><img src={appstore} alt="" /></a>
                            </Box>
                        </Box>
                        <Box>
                            <img style={{ width: '100%' }} src={phone} alt="" />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Download;