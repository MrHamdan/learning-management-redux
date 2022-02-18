import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import { Box, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@mui/material';
import Footer from '../Footer.js/Footer';
import { CourseDataContext } from '../../Contexts/CourseDataProvider';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Form from '../Form/Form';




const Cart = () => {


	const [cart,
		setCart,
		totalPrice,
		setTotalPrice,
		subTotal,
		setSubTotal,
	] = useContext(CourseDataContext);


	const [cupon, setCupon] = useState('');

	const deleteItem = (item) => {
		const newCart = cart.filter(cart => (cart.id !== item.id));
		setCart(newCart);
	}

	const increaseQuantity = (item) => {
		const newCart = cart.map(cartItem => {
			if (item.id === cartItem.id) {
				cartItem.quantity += 1
			}
			return cartItem;
		})
		setCart(newCart)
	}


	const decreaseQuantity = (item) => {
		const newCart = cart.map(cartItem => {
			if (item.id === cartItem.id) {
				if (item.quantity > 0) {
					item.quantity = item.quantity - 1
				}
			}
			return cartItem;
		})
		setCart(newCart)
	}

	let total = 0;
	let finalTotal = 0;
	const vat = 0.15;

	cart.forEach(element => {
		total = total + (element.discountPrice * element.quantity);
		setSubTotal(total)
		finalTotal = total + (subTotal * vat)
		setTotalPrice(finalTotal);
	});


	const handleCuponChange = (e) => {
		setCupon(e.target.value)
	}

	const handleDiscount = () => {
		if (cupon === 'discount') {
			const newTotal = finalTotal / 2;
			setTotalPrice(newTotal);
			console.log(newTotal, totalPrice);
			alert('You have got 50% discount!');
		}
		else if (cupon === '') {
			alert('Please enter a Cupon code');
		}
		else {

			alert('Wrong code');
		}
		console.log(totalPrice);
	}



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
													<TableCell align="center"><RemoveIcon onClick={() => decreaseQuantity(item)}></RemoveIcon>{item.quantity}<AddIcon onClick={() => increaseQuantity(item)}></AddIcon></TableCell>
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
											left: { xl: "218px", xs: "185px" },
											top: "6px",
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
									<Typography>£ {totalPrice}</Typography>
								</Box>
								<Button
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
								</Button>
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