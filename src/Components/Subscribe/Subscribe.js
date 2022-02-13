import { Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import subscribe from '../../Images/subscribe.png';
const Styles = {
    subscribeBg: {
        backgroundImage: `url(${subscribe})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: {xl:'1170px', xs:'100%'},
        height: '431px',
    }
}

const Subscribe = () => {
    return (
        <Box sx={{marginTop:'120px'}}>
            <Container>
                <Box sx={{ ...Styles.subscribeBg, display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {xs: 'column', md: 'row', xl: 'row' } }}>
                    <Box>
                        <Typography sx={{ textAlign: 'center', color: '#009FE3', fontSize: '24px', fontWeight: 'bold', fontFamily: 'Inter', }}>
                            Subscribe to Stay Informed
                        </Typography>
                        <Typography sx={{ textAlign: 'center', color: 'white', fontSize: '40px', fontWeight: 'bold', fontFamily: 'Inter', }}>
                        Are you ready to join us?
                        </Typography>
                        <TextField placeholder='Enter Your Email Address' sx={{width:'570px',height:'55px', backgroundColor:'white',borderRadius:'10px'}}>

                        </TextField>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Subscribe;