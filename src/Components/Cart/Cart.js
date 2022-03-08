import React, { useContext, useState, useEffect } from 'react';
import Header from '../Header/Header';
import { Box, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, Paper, Card, CardMedia, CardActions, CardContent } from '@mui/material';
import Footer from '../Footer/Footer';
import { CourseDataContext } from '../../Contexts/CourseDataProvider';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addSubTotal, addVat, addTotal, calculateDiscount, addCupon, increaseQuantity, decreaseQuantity } from "../../redux/action"






const Cart = () => {
	const state = useSelector(state => state);
    const dispatch = useDispatch();
    const { cart, subTotal, totalVat, totalPrice, discountPrice, cuponUsed } = state;
    const vat = 0.15;

    const [cupon, setCupon] = useState('');

    let total = 0;

    let finalTotal = 0;

	useEffect(() => {
        cart.forEach(element => {
            total = total + element.quantity * parseFloat(element.discountPrice);
            dispatch(addSubTotal(total));
            dispatch(addVat(subTotal * vat));
            finalTotal = total + totalVat;
            dispatch(addTotal(finalTotal));
        });
		if (!cart.length) {
            dispatch(addSubTotal(0));
            dispatch(addVat(0));
            dispatch(addTotal(0));
        }
    }, [total, finalTotal, cart, totalVat, totalPrice])


    const deleteItem = (item) => {
        const newCart = cart.filter(cartItem => cartItem.id !== item.id);
		dispatch({
			type: 'ADD_TO_CART',
			payload: newCart
		})

    }

    const handleCuponChange = (e) => {
        setCupon(e.target.value)
    }

    const handleDiscount = () => {

        if (cupon === 'Discount') {
            dispatch(calculateDiscount(totalPrice / 2));
            dispatch(addCupon(true));
        }
        else if (cupon === '') {
            alert('Enter a cupon code');
        }
        else {
            alert('Wrong Code');
        }

    };

    const handleQuantity = (item, type) => {
        if (type === 'increase') {
            dispatch(increaseQuantity(item.id))
            dispatch(addCupon(false));
        }
        else {
            dispatch(decreaseQuantity(item.id))
            dispatch(addCupon(false));
        }
    }


	
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}));


	const [courseList, setCourseList] = useState([]);
	useEffect(() => {
		fetch('/coursedata.json')
			.then(data => data.json())
			.then(data => setCourseList(data))
	}, []);

	return (
		<Box>
			<Header color="white" />
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
								<Typography sx={{ fontWeight: "bold", color: "#201E1E", fontFamily: 'Inter', fontSize: '36px' }}>
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
												<TableRow item={item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
													<TableCell align="left" sx={{ display: 'flex', alignItems: 'center' }}> <img style={{ width: '60px', height: '60px', borderRadius: '6px', marginRight: '20px' }} src={item.coverImage} alt="" /> {item.title}</TableCell>
													<TableCell align="center">£ {item.discountPrice}</TableCell>
													<TableCell align="center"><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><RemoveIcon onClick={() => handleQuantity(item, 'decrease')}></RemoveIcon>{item.quantity}<AddIcon onClick={() => handleQuantity(item, 'increase')}></AddIcon></Box></TableCell>
													<TableCell align="center">£ {item.discountPrice * item.quantity}</TableCell>
													<TableCell align="center"><ClearIcon onClick={() => deleteItem(item)}></ClearIcon></TableCell>
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
								<Box sx={{ display: "flex", position: 'relative' }}>
									<input
										style={{
											padding: "1em",
											width: "100%",
											height: "30px",
											borderRadius: "5px",
											border: "none",
										}}
										placeholder="Coupon Code"
										onChange={handleCuponChange}
									></input>
									<Button
										onClick={handleDiscount}
										sx={{
											backgroundColor: "#009FE3",
											color: "#fff",
											fontSize: '16px',
											fontFamily: 'Inter',
											fontWeight: "bold",
											width: "116px",
											height: "45px",
											position: "absolute",
											left: { xl: "218px", xs: "185px", md: '30px' },
											top: { xl: "6px", md: '300px' },
											textTransform: "none",
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
									<Typography>£ {subTotal}</Typography>
								</Box>
								<hr />
								<Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
									<Typography>VAT</Typography>
									<Typography>£ {subTotal * vat}</Typography>
								</Box>
								<hr />
								<Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
									<Typography>Total</Typography>
									<Typography>£ {!cuponUsed ? totalPrice : discountPrice}</Typography>
								</Box>
								<Link to="/checkout" style={{ textDecoration: 'none' }}><Button
									sx={{
										backgroundColor: "#009FE3",
										color: "#fff",
										width: "100%",
										height: '51px',
										fontSize: '16px',
										fontFamily: 'Inter',
										fontWeight: "bold",
										textTransform: "none",
										mt: 2,
										"&:hover": {
											bgcolor: "#0F588D",
										},
									}}
								>
									Proceed to Checkout
								</Button></Link>
							</Grid>
						</Grid>
					</Box>
				</Container>
				<Box sx={{ height: { xl: '798px', xs: '1600px' }, backgroundColor: 'white', display: 'flex', alignItems: 'center', flexDicrection: { xl: 'row', xs: 'column' } }}>
					<Container >
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								<Grid item xs={12} xl={12}>
									<Item sx={{ boxShadow: 0 }}>
										<Typography sx={{ textAlign: 'left', fontSize: '48px', fontWeight: '800', fontFamily: 'Inter', color: '#0D2A62' }}>PEOPLE ARE ALSO LEARNING</Typography>
									</Item>
								</Grid>
								<Grid item xs={12} xl={12}>
									<Item sx={{ boxShadow: 0 }}>
										<Box sx={{ display: 'flex', justifyContent: 'left', gap: 5, flexDirection: { xl: 'row', xs: 'column' } }}>
											{courseList.slice(0, 3).map(course => (
												<Box key={course.id} course={course}>
													<Card sx={{ maxWidth: 345, margin: '0px 10px', boxShadow: 3, position: 'relative' }}>
														<Typography sx={{ backgroundColor: '#FF8A00', color: 'white', borderRadius: '20px', padding: '8px 15px', top: '10px', position: 'absolute', fontSize: '12px', left: '10px', fontWeight: 'bold', fontFamily: 'Inter' }}>Most Popular</Typography>
														<CardMedia
															component="img"
															height="194"
															image={course.coverImage}
														/>
														<CardContent>
															<Typography sx={{ fontSize: '22px', textAlign: 'left' }}>
																{course.title}
															</Typography>
														</CardContent>
														<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
															<Box sx={{ display: 'flex', alignItems: 'center' }}>
																<del style={{ color: 'gray', fontSize: '15px', marginRight: '4px', fontWeight: 'bold', fontFamily: 'Inter' }}>£{course.regularPrice}</del>
																<Typography sx={{ color: '#009FE3', fontSize: '24px', fontWeight: 'bold', fontFamily: 'Inter', }}>£{course.discountPrice}</Typography>
															</Box>
															<Box>
																<Link to={`/coursedetail/${course.id}`} style={{ textDecoration: 'none' }}><Button variant='contained' sx={{ padding: '5px 10px', backgroundColor: '#009FE3', width: '123px', height: '40px', borderRadius: '4px', fontFamily: 'Inter', textTransform: 'none' }}>Buy Now</Button></Link>
															</Box>
														</Box>
													</Card>
												</Box>
											))}
										</Box>
									</Item>
								</Grid>
							</Grid>
						</Box>
					</Container>
				</Box>
			</Box>
			<Footer />
		</Box>
	);
};

export default Cart;