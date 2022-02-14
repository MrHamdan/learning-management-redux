import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import subscribe from '../../Images/subscribe.png';
const Styles = {
    subscribeBg: {
        backgroundImage: `url(${subscribe})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: { xl: '1170px', xs: '100%' },
        height: '431px',
        position: 'relative',
        top:'220px'
    }
}

const Subscribe = () => {
    return (
        <Box sx={{ marginTop: {xl:'-150px',xs:'-100'} }}>
            <Container>
                <Box sx={{ ...Styles.subscribeBg, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: 'column', md: 'row', xl: 'row' } }}>
                    <Box sx={{position:'relative'}}>
                        <Typography sx={{ textAlign: 'center', color: '#009FE3', fontSize: '24px', fontWeight: 'bold', fontFamily: 'Inter', }}>
                            Subscribe to Stay Informed
                        </Typography>
                        <Typography sx={{ textAlign: 'center', color: 'white', fontSize: '40px', fontWeight: 'bold', fontFamily: 'Inter', }}>
                            Are you ready to join us?
                        </Typography>
                        <TextField placeholder='Enter Your Email Address' sx={{ width: {xl:'570px', xs:'345px'}, height: {xl:'55px'}, backgroundColor: 'white', borderRadius: '10px' }}/>
                        <Button variant='contained' sx={{ position: 'absolute', left:{xl:'384px', xs:'80px'}, top:{xl:'101px',xs:'230px'}, width:'179px', height:'45px', backgroundColor:'#009FE3' }}>Subscribe Now</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Subscribe;