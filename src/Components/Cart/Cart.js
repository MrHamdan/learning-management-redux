import React, { useContext } from 'react';
import Header from '../Header/Header';
import { Box, Container, Grid, Paper } from '@mui/material';
import Footer from '../Footer.js/Footer';
import { DataContext } from '../../Contexts/DataProvider';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Cart = () => {
    const [cart, setCart] = useContext(DataContext);
    return (
        <Box>
            <Header color='white' />
            <Box sx={{ height: '798px', backgroundColor: '#EDF5FF', display: 'flex', alignItems: 'center' }}>
                <Container>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Item>xs=8</Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>xs=4</Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </Box>
    );
};

export default Cart;