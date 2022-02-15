import { Box, Container, Grid, Link, Paper, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import logo from '../../Images/Logo.png';
import instagram from '../../Images/instagram.png';
import twitter from '../../Images/twitter.png';
import facebooktwo from '../../Images/facebooktwo.png';
import pinterest from '../../Images/pinterest.png';
import visa from '../../Images/visa.png';
import master from '../../Images/master.png';
import paypal from '../../Images/paypal.png';
import moneyback from '../../Images/moneyback.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Styles = {
    footerBg: {
        backgroundColor: '#F6F9FF',
        white: '100%',
        height: {xl:'450px',xs:'1250px'},
    }
}


const LinkStyle = {
    links: {
        color: '#4E4848',
        fontSize: '16px',
        fontFamily: 'Inter',
        lineHeight: '36px',
        fontweight: 'normal',
        textDecoration: 'none',
        display: 'block',
        '&:hover':{
            color:'red',
            cursor:'pointer'
        }
    }
}

const Footer = ({paddingTop}) => {
    return (
        <Box sx={{...Styles.footerBg, paddingTop:paddingTop}}>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} xl={4} md={12}>
                            <Item sx={{ textAlign: 'left', boxShadow: 0, backgroundColor: 'transparent' }}>
                                <img style={{ marginBottom: '22px' }} src={logo} alt="" />
                                <Typography sx={{ fontSize: '16px', fontFamily: 'Inter', lineHeight: '28px', fontweight: 'normal', marginBottom: '27px', color: '#4E4848' }}>
                                    An online learning portal for you to connect from wherever you want and when you need it to acquire skills at your own pace.
                                </Typography>
                                <img style={{ marginRight: '20px' }} src={instagram} alt="" /> <img style={{ marginRight: '20px' }} src={twitter} alt="" /> <img style={{ marginRight: '20px' }} src={facebooktwo} alt="" /> <img style={{ marginRight: '20px' }} src={pinterest} alt="" />
                            </Item>
                        </Grid>
                        <Grid item xs={12} xl={2} md={12}>
                            <Item sx={{ textAlign: 'left', boxShadow: 0, backgroundColor: 'transparent' }}>
                                <Typography sx={{ fontSize: '28px', color: 'black', fontWeight: 'bold' }}>Extra Link</Typography>
                                <Link sx={LinkStyle.links}>Became a Teacher</Link>
                                <Link sx={LinkStyle.links}>All Courses</Link>
                                <Link sx={LinkStyle.links}>About Us</Link>
                                <Link sx={LinkStyle.links}>Contact Us</Link>
                            </Item>
                        </Grid>
                        <Grid item xs={4} xl={2} md={12}>
                            <Item sx={{ textAlign: 'left', boxShadow: 0, backgroundColor: 'transparent' }}>
                                <Typography sx={{ fontSize: '28px', color: 'black', fontWeight: 'bold' }}>Programs</Typography>
                                <Link sx={LinkStyle.links}>Earn Now</Link>
                                <Link sx={LinkStyle.links}>Redeen Voucher</Link>
                                <Link sx={LinkStyle.links}>Terms & Conditions</Link>
                                <Link sx={LinkStyle.links}>Privacy & Policy</Link>
                            </Item>
                        </Grid>
                        <Grid item xs={12} xl={4} md={12}>
                            <Item sx={{ textAlign: 'left', boxShadow: 0, backgroundColor: 'transparent' }}>
                                <Typography sx={{ fontSize: '28px', color: 'black', fontWeight: 'bold', marginBottom: '42px' }}>Secure Payment</Typography>
                                <img style={{ marginRight: '10px' }} src={visa} alt="" /> <img style={{ marginRight: '10px' }} src={master} alt="" /> <img style={{ marginRight: '0px' }} src={paypal} alt="" />
                                <img style={{ marginTop: '30px', marginRight: '20px' }} src={moneyback} alt="" />
                            </Item>
                        </Grid>
                        <Grid item xs={12} xl={12} md={12}>
                            <Item sx={{ textAlign: 'left', boxShadow: 0, backgroundColor: 'transparent' }}>
                                <hr style={{ color: '#4E4848' }} />
                            </Item>
                        </Grid>
                        <Grid item xs={12} xl={12} md={12}>
                            <Item sx={{ textAlign: 'left', boxShadow: 0, backgroundColor: 'transparent' }}>
                                <Typography sx={{ textAlign: 'center', color: '#4E4848' }}>All rights Reserved &copy; Apex Learning</Typography>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;