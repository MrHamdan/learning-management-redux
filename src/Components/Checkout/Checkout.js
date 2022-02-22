import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import checkoutBg from '../../Images/checkout.png';
import { styled } from '@mui/material/styles';
import { CourseDataContext } from '../../Contexts/CourseDataProvider';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';


const Styles = {
    checkoutBg: {
        backgroundImage: `url(${checkoutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: { xl: '1970px', xs: '2300px' },
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

    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };


    const [cart,
        setCart,
        totalPrice,
        setTotalPrice,
        subTotal,
        setSubTotal,
        discount,
        setDiscount
    ] = useContext(CourseDataContext);


    const vat = 0.15


    console.log(cart);


    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    };


    return (
        <Box>
            <Header color='white' />
            <Box sx={Styles.checkoutBg}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: '1170px', height: { xl: '455px' }, backgroundColor: 'white', marginTop: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, padding: '42px 50px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} xl={6}>
                                    <Item sx={{ textAlign: 'left', boxShadow: 0 }}><Typography sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '36px', marginBottom: '30px', color: '#201E1E' }}>
                                        Billing Details
                                    </Typography>
                                        <Typography >First Name</Typography>
                                        <TextField sx={{ marginBottom: '20px' }} fullWidth id="fullWidth" />
                                        <Typography>Address</Typography>
                                        <TextField sx={{ marginBottom: '20px' }} fullWidth id="fullWidth" />
                                        <Typography>Phone</Typography>
                                        <TextField fullWidth id="fullWidth" />
                                    </Item>
                                </Grid>
                                <Grid item xs={12} xl={6}>
                                    <Item sx={{ textAlign: 'left', boxShadow: 0 }}>
                                        <Typography sx={{ marginTop: '85px' }}>Last Name</Typography>
                                        <TextField sx={{ marginBottom: '20px' }} fullWidth id="fullWidth" />
                                        <Typography>Country / Region</Typography>
                                        <FormControl fullWidth sx={{ marginBottom: '20px' }}>
                                            {/* <InputLabel id="demo-simple-select-label">Country</InputLabel> */}
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={country}
                                                // label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Bangladesh</MenuItem>
                                                <MenuItem value={20}>United States</MenuItem>
                                                <MenuItem value={30}>Canada</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Typography>Email Address</Typography>
                                        <TextField fullWidth id="fullWidth" /></Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: '1170px', height: '455px', backgroundColor: 'white', marginTop: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} xl={12}>
                                    <Item sx={{ textAlign: 'left', boxShadow: 0 }}><Typography sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '36px', marginBottom: '30px', color: '#201E1E' }}>
                                        Your Order
                                    </Typography>
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="left" colSpan={3} sx={{ fontFamily: 'Inter', fontWeight: '600', fontSize: '16px' }}>
                                                            Course Name
                                                        </TableCell>
                                                        <TableCell align="right" sx={{ fontFamily: 'Inter', fontWeight: '600', fontSize: '16px' }}>Subtotal</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {cart.map((item) => (
                                                        <TableRow key={item.id}>
                                                            <TableCell>{item.title}</TableCell>
                                                            <TableCell align="right"></TableCell>
                                                            <TableCell align="right"></TableCell>
                                                            <TableCell align="right">{item.discountPrice}</TableCell>
                                                        </TableRow>
                                                    ))}

                                                    <TableRow>
                                                        <TableCell rowSpan={3} />
                                                        <TableCell colSpan={2}>Subtotal</TableCell>
                                                        <TableCell align="right">£ {subTotal}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Vat</TableCell>
                                                        <TableCell align="right"></TableCell>
                                                        <TableCell align="right">£ {subTotal * vat}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell colSpan={2}>Total</TableCell>
                                                        <TableCell align="right">£ {totalPrice}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: '1170px', height: '455px', backgroundColor: 'white', marginTop: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, padding: '42px 50px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} xl={12}>
                                    <Item sx={{ textAlign: 'left', boxShadow: 0 }}>
                                        <form onSubmit={handleSubmit}>
                                            <CardElement
                                                options={{
                                                    style: {
                                                        base: {
                                                            fontSize: '16px',
                                                            color: '#424770',
                                                            '::placeholder': {
                                                                color: '#aab7c4',
                                                            },
                                                        },
                                                        invalid: {
                                                            color: '#9e2146',
                                                        },
                                                    },
                                                }}
                                            />
                                            <Button variant="contained" type="submit" disabled={!stripe} sx={{ textTransform: 'none', width: '224px', height: '51px', padding: '16px 35px', backgroundColor: '#009FE3', borderRadius: '8px', marginTop: '30px', fontSize: '16px', fontWeight: 'bold', fontFamily: 'Inter' }}>
                                                Place Order
                                            </Button>
                                        </form>
                                    </Item>
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