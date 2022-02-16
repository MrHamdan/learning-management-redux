import React, { useContext } from 'react';
import Header from '../Header/Header';
import { Box, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@mui/material';
import Footer from '../Footer.js/Footer';
import { DataContext } from '../../Contexts/DataProvider';
import { styled } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Cart = () => {
    const [cart, setCart] = useContext(DataContext);

    const removeItem = (item) => {
        const newCart = cart.filter(cart => (cart.id !== item.id))
        setCart(newCart);
    }

    return (
        <Box>
            <Header color="white"/>
            <Box
                sx={{
                    background: "linear-gradient(135.32deg, #053F66 12.22%, #186FB2 81.8%)",
                }}
            >

            </Box>
            <Box sx={{ background: "rgba(71, 68, 228, 0.1)" }}>
                <Container sx={{ py: 10 }} maxWidth='xl'>
                    <Box>
                        <Grid container spacing={0} sx={{ justifyContent: "space-around" }}>
                            <Grid item xs={12} md={8} sx={{ bgcolor: "#fff", borderRadius: "10px", p: 3 }}>
                                <Typography sx={{ fontWeight: "bold", color: "#201E1E", fontFamily: 'Inter',fontSize:'36px'}}>
                                    Shopping Cart
                                </Typography>
                                <TableContainer component="div">
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell
                                                align="left"
                                                    sx={{
                                                        fontWeight: "600",
                                                        fontSize: "16px",
                                                        color: "#201E1E",
                                                        fontFamily: 'Inter',
                                                        px: 0,
                                                        pt: 4,
                                                    }}
                                                >
                                                    Course Name
                                                </TableCell>
                                                <TableCell
                                                    align="center"
                                                    sx={{
                                                        fontWeight: "600",
                                                        fontSize: "16px",
                                                        color: "#201E1E",
                                                        fontFamily: 'Inter',
                                                        px: 0,
                                                        pt: 4,
                                                    }}
                                                >
                                                    Price
                                                </TableCell>
                                                <TableCell
                                                    align="center"
                                                    sx={{
                                                        fontWeight: "600",
                                                        fontSize: "16px",
                                                        color: "#201E1E",
                                                        fontFamily: 'Inter',
                                                        px: 0,
                                                        pt: 4,
                                                    }}
                                                >
                                                    Quantity
                                                </TableCell>
                                                <TableCell
                                                    align="center"
                                                    sx={{
                                                        fontWeight: "600",
                                                        fontSize: "16px",
                                                        color: "#201E1E",
                                                        fontFamily: 'Inter',
                                                        pt: 4,
                                                    }}
                                                >
                                                    Total
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {cart.map((item) => (
                                            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                                <TableCell align="left" sx={{display:'flex', alignItems:'center'}}> <img style={{width:'60px',height:'60px',borderRadius:'6px',marginRight:'20px'}} src={item.coverImage} alt="" /> {item.title}</TableCell>
                                                <TableCell align="center">{item.regularPrice}</TableCell>
                                                <TableCell align="center">{item.quantity}</TableCell>
                                                <TableCell align="center">{item.regularPrice}</TableCell>
                                            </TableRow>
                                             ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={3}
                                sx={{
                                    background:
                                        "#0D2A62",
                                    borderRadius: "10px",
                                    py: 9,
                                    px: 2,
                                    color: "#fff",
                                }}
                            >
                                <Typography variant="h4" sx={{ fontWeight: "bold", my: 2 }}>
                                    Busket Totals
                                </Typography>
                                <Box sx={{ display: "flex", position: 'relative'}}>
                                    <input
                                        style={{
                                            padding: "1em",
                                            width: "100%",
                                            height:"30px",
                                            borderRadius: "5px",
                                            border: "none",
                                        }}
                                        placeholder="Coupon Code"
                                    ></input>
                                    <Button
                                        sx={{
                                            bgcolor: "#FF4958",
                                            color: "#fff",
                                            width: "116px",
                                            position: "absolute",
                                            left:{xl:"210px", xs:"185px"},
                                            top:"10px",
                                            "&:hover": {
                                                bgcolor: "#0F588D",
                                            },
                                        }}
                                    >
                                        Apply
                                    </Button>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
                                    <Typography>Subtotal</Typography>
                                    <Typography>£</Typography>
                                </Box>
                                <hr />
                                <Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
                                    <Typography>VAT</Typography>
                                    <Typography>£</Typography>
                                </Box>
                                <hr />
                                <Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
                                    <Typography>Total</Typography>
                                    <Typography>£</Typography>
                                </Box>
                                <Button
                                    sx={{
                                        bgcolor: "#FF4958",
                                        color: "#fff",
                                        width: "100%",
                                        mt: 2,
                                        "&:hover": {
                                            bgcolor: "#0F588D",
                                        },
                                    }}
                                >
                                    Proceed to Checkout
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Footer/>
        </Box>
    );
};

export default Cart;