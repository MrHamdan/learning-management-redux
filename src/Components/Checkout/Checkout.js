import { Box, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
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


const TAX_RATE = 0.07;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
    createRow('Paperclips (Box)', 100, 1.15),
    createRow('Paper (Case)', 10, 45.99),
    createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;



const Checkout = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <Box>
            <Header color='white' />
            <Box sx={Styles.checkoutBg}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: '1170px', height: '455px', backgroundColor: 'white', marginTop: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={8} xl={6}>
                                    <Item sx={{ textAlign: 'left' }}><Typography sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '36px', marginBottom: '30px', color: '#201E1E' }}>
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
                                <Grid item xs={4} xl={6}>
                                    <Item sx={{ textAlign: 'left' }}>
                                        <Typography sx={{ marginTop: '85px' }}>Last Name</Typography>
                                        <TextField sx={{ marginBottom: '20px' }} fullWidth id="fullWidth" />
                                        <Typography>Country / Region</Typography>
                                        <FormControl fullWidth sx={{ marginBottom: '20px' }}>
                                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
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
                                <Grid item xs={8} xl={12}>
                                    <Item sx={{ textAlign: 'left' }}><Typography sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '36px', marginBottom: '30px', color: '#201E1E' }}>
                                        Your Order
                                    </Typography>
                                        {/* <Typography >First Name</Typography>
                                        <TextField sx={{ marginBottom: '20px' }} fullWidth id="fullWidth" />
                                        <Typography>Address</Typography>
                                        <TextField sx={{ marginBottom: '20px' }} fullWidth id="fullWidth" />
                                        <Typography>Phone</Typography>
                                        <TextField fullWidth id="fullWidth" /> */}
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="left" colSpan={3}>
                                                            Course Name
                                                        </TableCell>
                                                        <TableCell align="right">Subtotal</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows.map((row) => (
                                                        <TableRow key={row.desc}>
                                                            <TableCell>{row.desc}</TableCell>
                                                            <TableCell align="right"></TableCell>
                                                            <TableCell align="right"></TableCell>
                                                            <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                                                        </TableRow>
                                                    ))}

                                                    <TableRow>
                                                        <TableCell rowSpan={3} />
                                                        <TableCell colSpan={2}>Subtotal</TableCell>
                                                        <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Tax</TableCell>
                                                        <TableCell align="right"></TableCell>
                                                        <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell colSpan={2}>Total</TableCell>
                                                        <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
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
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={8} xl={6}>
                                    <Item sx={{ textAlign: 'left' }}><Typography sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '36px', marginBottom: '30px', color: '#201E1E' }}>
                                        Payment Method
                                    </Typography>
                                        <Typography >First Name</Typography>
                                        <TextField sx={{ marginBottom: '20px' }} fullWidth id="fullWidth" />
                                        <Typography>Address</Typography>
                                        <TextField sx={{ marginBottom: '20px' }} fullWidth id="fullWidth" />
                                        <Typography>Phone</Typography>
                                        <TextField fullWidth id="fullWidth" />
                                    </Item>
                                </Grid>
                                <Grid item xs={4} xl={6}>
                                    <Item sx={{ textAlign: 'left' }}>
                                        <Typography sx={{ marginTop: '85px' }}>Last Name</Typography>
                                        <TextField sx={{ marginBottom: '20px' }} fullWidth id="fullWidth" />
                                        <Typography>Country / Region</Typography>
                                        <FormControl fullWidth sx={{ marginBottom: '20px' }}>
                                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Typography>Email Address</Typography>
                                        <TextField fullWidth id="fullWidth" /></Item>
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