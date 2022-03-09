import { Box, Button, Checkbox, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuizes } from '../../redux/action';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Quiz = () => {
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
  bgcolor: "#43B97E",
  color: "#fff",
  padding: ".5em 2em",
  border: "1px solid #43B97E",
  borderRadius: "3px",
  fontFamily: "Manrope",
  "&:hover": {
   bgcolor: "#F9B233",
   border: "1px solid #F9B233",
  },
 };

 const quizes = useSelector(state => state.quizes);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchQuizes());
}, [dispatch]);



 const [questions, setQuestions] = useState([]);
 const [showFinalResults, setFinalResults] = useState(false);
 const [score, setScore] = useState(0);

 const [currentQuestion, setCurrentQuestion] = useState(0);

 useEffect(() => {
  fetch("/quiz.json")
   .then((res) => res.json())
   .then((data) => setQuestions(data));
 }, []);

 console.log(questions);

 const handleNextQuestion = () => {
  if (currentQuestion + 1 < quizes.length) {
   setCurrentQuestion(currentQuestion + 1);
  } else {
   alert("final question reached");
  }
 };

 const handleQuestionCheking = (id) => {
  if (quizes[currentQuestion].right_answer === id) {
   setScore(score + 1);
  }
 };



 return (
  <Box>
   <Header color='white' />
   <Container sx={{ fontFamily: "Lato" }}>
    <Box sx={{ bgcolor: "#fff", p: 5, borderRadius: "10px" }}>
     <Typography
      sx={{
       fontWeight: "bold",
       fontSize: "1.5rem",
       fontFamily: "Lato",
       color: "#10375C",
      }}
     >
      <Typography
       component="span"
       sx={{
        bgcolor: "#43B97E",
        color: "#fff",
        padding: "0.2em 0.5em",
        borderRadius: "5px",
        mr: 2,
        fontSize: "1.5rem",
       }}
      >
       {currentQuestion + 1}
      </Typography>
      {quizes[currentQuestion]?.question}
     </Typography>

     <Box>
      {/* Question Container */}
      {quizes[currentQuestion]?.options?.map((option) => (
       <Box key={option.id} sx={questionLineStyle}>
        <Checkbox onClick={(e) => handleQuestionCheking(option.id)} />
        <Typography sx={{ fontSize: "1.2rem" }}>{option?.option}</Typography>
       </Box>
      ))}
     </Box>
     {/* Question card footer */}
     <Box
      sx={{
       display: "flex",
       alignItems: "center",
       justifyContent: "space-evenly",
      }}
     >
      <Typography
       sx={{ fontWeight: "bold", fontSize: "2rem", color: "gray" }}
      >
       Question {currentQuestion + 1}/10
      </Typography>
      <Button sx={buttonStyles} onClick={handleNextQuestion}>
       NEXT
      </Button>
     </Box>
    </Box>
   </Container>
   <Footer />
  </Box>
 );
};

export default Quiz;