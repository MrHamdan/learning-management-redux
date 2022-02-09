import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';
import facebookIcon from '../../Images/facebook.png';
import googleIcon from '../../Images/google.png';


const style = {
    position: 'absolute',
    textAlign: 'center',
    top: { xs: '30%', md: '60%', xl: '70%' },
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
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>



                    <Box sx={{ marginBottom: '20px' }}>
                        <Button sx={{
                            fontWeight: '600', marginRight: '12px', border: '1px solid #000', padding: '10px 40px', color: 'black', '&:hover': {
                                backgroundColor: '#009FE3 !important',
                                color: 'white',
                                border: '0px'
                            }
                        }}>Log In</Button>
                        <Button sx={{
                            fontWeight: '600', color: 'black', marginLeft: '12px', border: '1px solid #000', padding: '10px 40px', '&:hover': {
                                backgroundColor: '#009FE3 !important',
                                border: '0px'
                            }
                        }}>Sign Up</Button>
                    </Box>

                    <Button sx={{ border: '1px solid #000', width: '300px', marginBottom: '20px' }}> <img src={facebookIcon} alt="" style={{ width: '20px', marginRight: '10px' }} /> Continue With Facebook</Button>
                    <Button sx={{ border: '1px solid #000', width: '300px' }}><img src={googleIcon} alt="" style={{ width: '20px', marginRight: '10px' }} />  Continue With Google</Button>
                </Box>
            </Modal>
        </div>
    );
};

export default Form;