import { Box, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import checkoutBg from '../../Images/checkout.png';
import { styled } from '@mui/material/styles';


const Styles = {
    checkoutBg: {
        backgroundImage: `url(${checkoutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '1970px',
    }
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const Checkout = () => {
    return (
        <Box>
            <Header color='white' />
            <Box sx={Styles.checkoutBg}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: '1170px', height: '455px', backgroundColor: 'white', marginTop: '120px' }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={8} xl={6}>
                                    <Item sx={{textAlign: 'left'}}><Typography sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '36px' }}>
                                        Billing Details
                                    </Typography>
                                    <Typography>First Name</Typography>
                                    <TextField fullWidth  id="fullWidth" />
                                    <Typography>Address</Typography>
                                    <TextField fullWidth  id="fullWidth" />
                                    <Typography>Phone</Typography>
                                    <TextField fullWidth  id="fullWidth" />
                                    </Item>
                                </Grid>
                                <Grid item xs={4} xl={6}>
                                    <Item>xs=4</Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default Checkout;