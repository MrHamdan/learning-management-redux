import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer.js/Footer';
import Header from '../Header/Header';

const Quiz = () => {
    const [quizes, setQuizes] = useState([]);

    useEffect(() => {
        fetch('/quiz.json')
            .then(res => res.json())
            .then(data => setQuizes(data))
    }, []);
    console.log(quizes);
    return (
        <Box>
            <Header color='white'/>
            <Box sx={{backgroundColor:'#FAFAFA', height:'1080px'}}>
            <Container>
                <Typography sx={{textAlign:'center'}}>
                    Free Quiz
                </Typography>
            </Container>
        </Box>
        <Footer/>
        </Box>
    );
};

export default Quiz;