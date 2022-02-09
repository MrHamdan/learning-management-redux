import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import facebookIcon from '../../Images/facebook.png';
import googleIcon from '../../Images/google.png';
import CloseIcon from '@mui/icons-material/Close';


const style = {
    position: 'absolute',
    textAlign: 'center',
    top: { xs: '30%', md: '60%', xl: '46%' },
    left: { xs: '45%', md: '48%', xl: '74%' },
    transform: 'translate(-50%, -50%)',
    width: { xs: 300, md: 400, xl: 400 },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    margin: '20px'
};

const Form = ({ open, handleClose }) => {
    const { handleEmailChange, handlePasswordChange, error, toggleLogin, isLogin, handleNameChange, createUserWithEmailAndPassword, signInWithEmailAndPassword, password, setError, email, auth, setUser, verifyEmail, setUserName, handleResetPassword, handleGoogleSignIn } = useAuth();
    const location = useLocation();

    const navigate = useNavigate();
    const navigateRoute = () => {
        navigate('/');
    }

    const handleRegistration = e => {
        e.preventDefault();

        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case letter');
            return;
        }

        if (isLogin) {
            processLogin(email, password);
            Swal.fire({
                position: 'middle',
                icon: 'success',
                title: 'Login Successfull',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/');
        }
        else {
            registerNewUser(email, password);
            Swal.fire({
                position: 'middle',
                icon: 'success',
                title: 'You Have Been Registered',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/');
        }

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })

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
                    <Typography
                        onClick={handleClose}
                        sx={{
                            position: 'relative',
                            left: { xs: '0px', md: '0px', xl: '380px' },
                            top: { xs: '0px', md: '0px', xl: '-70px' },
                            padding: "10px 20px",
                            width: "fit-content",
                            borderRadius: "50%",
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontSize: '20px',

                        }}
                    >
                        <CloseIcon></CloseIcon>
                    </Typography>
                    <Box>
                        <Box>
                            <Box>
                                <Box>
                                    <form onSubmit={handleRegistration}>
                                        <Typography sx={{fontSize:'30px', marginBottom: '30px', fontWeight:'bold'}}>{isLogin ? 'Log In' : 'Sign Up'}</Typography>
                                        {!isLogin && <Box >
                                            <Box >
                                                <input style={{ width: '300px', height: '30px', marginBottom: '20px' }} placeholder="Name" type="text" onBlur={handleNameChange} id="inputName" required />
                                            </Box>
                                        </Box>}
                                        <Box >
                                            <Box>
                                                <input placeholder="Email" style={{ width: '300px', height: '30px', marginBottom: '20px' }} onBlur={handleEmailChange} type="email" id="inputEmail3" required />
                                            </Box>
                                        </Box>
                                        <Box >
                                            <Box >
                                                <input placeholder="Password" style={{ width: '300px', height: '30px', marginBottom: '20px' }} type="password" onBlur={handlePasswordChange} id="inputPassword3" required />
                                            </Box>
                                        </Box>
                                        <Box >
                                            <Box >
                                                <Box sx={{ marginBottom: '30px' }}>
                                                    <input onChange={toggleLogin} type="checkbox" id="gridCheck1" />
                                                    <label htmlFor="gridCheck1">
                                                        Already Registered ?
                                                    </label>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box >{error}</Box>
                                        <Button sx={{
                                            fontWeight: '600', marginRight: '12px', border: '1px solid #000', padding: '10px 40px', color: 'black', '&:hover': {
                                                backgroundColor: '#009FE3 !important',
                                                color: 'white',
                                                border: '0px'
                                            }
                                        }} type="submit"  >
                                            {isLogin ? 'Login' : 'Sign Up'}
                                        </Button>
                                        <Button type="button" onClick={handleResetPassword} >Reset Password</Button>

                                    </form>
                                </Box>
                                <br />
                                <br />
                            </Box>
                        </Box>
                    </Box>

                    <Button sx={{
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