import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import people from '../../Images/people.png';
import box from '../../Images/box.png';
import board from '../../Images/board.png';
import student from '../../Images/student.png';


const Styles = {
    detailsBg: {
        background: '#0D2A62',
        height: { xl: '510px', xs: '1400px' },
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}




const Details = () => {
    return (
        <Box sx={Styles.detailsBg}>
            <Container>
                <Grid>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={3} >

                            <Grid item>
                                <Paper sx={{ height: 270, width: 270, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Box>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <img src={people} alt="" />
                                        </Box>
                                        <Typography sx={{ fontSize: '48px', textAlign: 'center', color: '#0D2A62', fontWeight: '800' }}>2k+</Typography>
                                        <Typography sx={{ fontSize: '24px', textAlign: 'center' }}>Total Students</Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper sx={{ height: 270, width: 270, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Box>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <img src={box} alt="" />
                                        </Box>
                                        <Typography sx={{ fontSize: '48px', textAlign: 'center', color: '#0D2A62', fontWeight: '800', fontFamily: 'Inter'}}>1k+</Typography>
                                        <Typography sx={{ fontSize: '24px', textAlign: 'center' }}>Total Students</Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper sx={{ height: 270, width: 270, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Box>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <img src={board} alt="" />
                                        </Box>
                                        <Typography sx={{ fontSize: '48px', textAlign: 'center', color: '#0D2A62', fontWeight: '800', fontFamily: 'Inter' }}>15+</Typography>
                                        <Typography sx={{ fontSize: '24px', textAlign: 'center' }}>Total Students</Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper sx={{ height: 270, width: 270, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Box>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <img src={student} alt="" />
                                        </Box>
                                        <Typography sx={{ fontSize: '48px', textAlign: 'center', color: '#0D2A62', fontWeight: '800' , fontFamily: 'Inter'}}>10+</Typography>
                                        <Typography sx={{ fontSize: '24px', textAlign: 'center' }}>Total Students</Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Details;