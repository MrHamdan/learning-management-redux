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


    const questionLineStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        my: 2,
        bgcolor: "#f4f4f4",
        color: "rgba(0,0,0, 0.7)",
        py: 1,
        borderRadius: "5px",
       };
       const buttonStyles = {
        bgcolor: "#FF4958",
        color: "#fff",
        padding: ".5em 2em",
        border: "1px solid #FF4958",
        borderRadius: "3px",
        fontFamily: "Manrope",
        "&:hover": {
         bgcolor: "#F9B233",
         border: "1px solid #F9B233",
        },
       };
      
       const [questions, setQuestions] = useState([]);
       const [showFinalResults, setFinalResults] = useState(false);
       const [score, setScore] = useState(0);
      
       const [currentQuestion, setCurrentQuestion] = useState(0);
      
       useEffect(() => {
        fetch("quizContent.json")
         .then((res) => res.json())
         .then((data) => setQuestions(data));
       }, []);
      
       console.log(questions);
      
       const handleNextQuestion = () => {
        if (currentQuestion + 1 < questions.length) {
         setCurrentQuestion(currentQuestion + 1);
        } else {
         alert("final question reached");
        }
       };
      
       const handleQuestionCheking = (id) => {
        if (questions[currentQuestion].right_answer == id) {
         setScore(score + 1);
        }
       };
      

    
    return (
        <Box>
        <Header color='white'/>
            
        <Footer/>
        </Box>
    );
};

export default Quiz;