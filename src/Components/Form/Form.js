import { Box, Button, Modal, Typography, Link, TextField } from '@mui/material';
import React from 'react';
import {  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import facebookIcon from '../../Images/facebook.png';
import googleIcon from '../../Images/google.png';
import CloseIcon from '@mui/icons-material/Close';


const style = {
    position: 'relative',
    textAlign: 'center',
    top: { xs: '330px', md: '60%', xl: '46%' },
    left: { xs: '45%', md: '48%', xl: '74%' },
    transform: 'translate(-50%, -50%)',
    width: { xs: 300, md: 400, xl: 400 },
    bgcolor: 'background.paper',
    borderRadius: '15px',

    boxShadow: 24,
    p: 4,
    margin: '20px'
};

const Form = ({ open, handleClose }) => {
    const { auth,
        handleGoogleSignIn,
        handleFacebookSignIn,
        sendPasswordResetEmail,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
    } = useAuth();


    const navigate = useNavigate();
    const navigateRoute = () => {
        navigate('/');
    }


    const logIn = (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                document.getElementById("error").innerHTML = error.message
            })
        navigateRoute()
    }



    const signUp = (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        createUserWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                document.getElementById("error").innerHTML = error.message
            });
        navigateRoute()
    }


    const forgotPassword = (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Reset link sent to your email id")
            })
            .catch((error) => {
                document.getElementById("error").innerHTML = error.message
            });
    }


    return (
        <Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CloseIcon onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            left: { xs: '320px', md: '0px', xl: '420px' },
                            top: { xs: '-40px', md: '0px', xl: '-40px' },
                            padding: "10px 20px",
                            width: "fit-content",
                            borderRadius: "50%",
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontSize: '30px',

                        }}></CloseIcon>
                    <Box>
                        <Box>
                            <Box>
                                <Box>
                                    <Box >
                                        <Box>
                                            <Typography sx={{ fontFamily: 'Inter', fontWeight: '600', fontSize: '36px', marginBottom: '19px' }}>Log In</Typography>
                                        </Box>
                                        <form onSubmit={logIn}>

                                            <TextField placeholder="Email" sx={{ width: '300px', height: '30px', marginBottom: '40px' }} id="email" type="text" required />



                                            <TextField placeholder="Password" sx={{ width: '300px', height: '30px', marginBottom: '40px' }} id="password" type="password" required />

                                            <Typography id="error" style={{ color: 'red' }}></Typography>

                                            <Box sx={{ marginBottom: '20px', display: 'flex', flexDirection: { xs: 'column', xl: 'row' }, justifyContent: 'center' }}>
                                                <Button sx={{
                                                    fontWeight: '600', marginRight: { xl: '10px', xs: '0px' }, border: '1px solid #000', padding: '10px 50px', color: 'black', '&:hover': {
                                                        backgroundColor: '#009FE3 !important',
                                                        color: 'white',
                                                        border: '0px'
                                                    }, width: '157.5', height: '51px', textTransform: 'none', marginBottom: { xs: '20px' }
                                                }} type="submit">Login
                                                </Button>
                                                <Button sx={{
                                                    fontWeight: '600', marginRight: '0px', border: '1px solid #000', padding: '10px 40px', color: 'black', '&:hover': {
                                                        backgroundColor: '#009FE3 !important',
                                                        color: 'white',
                                                        border: '0px'
                                                    }, width: '157.5', height: '51px', textTransform: 'none'
                                                }} onClick={signUp} >Sign Up</Button> <br />

                                            </Box>
                                            <Box sx={{ marginTop: '20px', cursor: 'pointer' }}>
                                                <Link onClick={forgotPassword}>Forgot Password</Link>
                                            </Box>


                                        </form>
                                    </Box>
                                </Box>
                                <br />
                                <br />
                            </Box>
                        </Box>
                    </Box>

                    <Button onClick={handleFacebookSignIn} sx={{
                        border: '1px solid #000', width: '300px', marginBottom: '20px', color: 'black', fontWeight: '600', '&:hover': {
                            backgroundColor: '#009FE3 !important',
                            color: 'white'
                        }
                    }}> <img src={facebookIcon} alt="" style={{ width: '20px', marginRight: '10px' }} /> Continue With Facebook</Button>


                    <Button onClick={handleGoogleSignIn} sx={{
                        border: '1px solid #000', width: '300px', color: 'black', fontWeight: '600', '&:hover': {
                            backgroundColor: '#009FE3 !important',
                            color: 'white'
                        }
                    }}><img src={googleIcon} alt="" style={{ width: '20px', marginRight: '10px' }} />  Continue With Google</Button>
                </Box>
            </Modal>
        </Box>
    );
};

export default Form;