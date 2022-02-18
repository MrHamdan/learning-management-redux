import { Avatar, Box, Card, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import line from '../../Images/line.png';
import quote from '../../Images/quote.png';
import './StudentSaying.css';
import { styled } from '@mui/material/styles';
import reviewers from '../../Images/reviewers.png';
import Rating from 'react-rating';

const Styles = {
  Student: {
    width: '100%',
    height: {xl:'681px', md:'800px'}
  }
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const reviews = [
  {
    id: "1",
    reviews: "Nunc eu tempus ultrices vitae, a suspendisse porta magna suscipit. Blandit consequat arcu quam sed mauris tempus. Neque, massa aliquam vitae, facilisis ut vel risus vitae gravida.",
    name: "Jenifer Smith",
    ratings: "4.5"
  },
  {
    id: "2",
    reviews: "Nunc eu tempus ultrices vitae, a suspendisse porta magna suscipit. Blandit consequat arcu quam sed mauris tempus. Neque, massa aliquam vitae, facilisis ut vel risus vitae gravida.",
    name: "Jenifer Smith",
    ratings: "3.5"
  },
  {
    id: "3",
    reviews: "Nunc eu tempus ultrices vitae, a suspendisse porta magna suscipit. Blandit consequat arcu quam sed mauris tempus. Neque, massa aliquam vitae, facilisis ut vel risus vitae gravida.",
    name: "Jenifer Smith",
    ratings: "2.5"
  },
  {
    id: "4",
    reviews: "Nunc eu tempus ultrices vitae, a suspendisse porta magna suscipit. Blandit consequat arcu quam sed mauris tempus. Neque, massa aliquam vitae, facilisis ut vel risus vitae gravida.",
    name: "Jenifer Smith",
    ratings: "1.5"
  },
  {
    id: "5",
    reviews: "Nunc eu tempus ultrices vitae, a suspendisse porta magna suscipit. Blandit consequat arcu quam sed mauris tempus. Neque, massa aliquam vitae, facilisis ut vel risus vitae gravida.",
    name: "Jenifer Smith",
    ratings: ".5"
  },
]


const settingsFour = {
  dots: true,
  dotsClass: 'vertical-dots',
  vertical: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


const StudentSaying = () => {
  const sliderRef = React.useRef(null);
  return (
    <Box sx={Styles.Student}>
      <Container >
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ color: '#0D2A62', fontSize: { xs: '20px', md: '40px', xl: '48px' }, fontWeight: '800', fontFamily: 'Inter', marginTop: '30px' }}>
            What Student Saying
          </Typography>
          <Typography sx={{ color: '#0D2A62', fontSize: { xs: '20px', md: '40px', xl: '48px' }, fontWeight: '800', fontFamily: 'Inter', marginRight:{xl:'290px'}}}>About US</Typography>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: '50px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={5}>
              <Item sx={{ boxShadow: 0 }}><img src={reviewers} alt="" /></Item>
            </Grid>
            <Grid item xs={12} xl={7}>
              <Item sx={{ position: 'relative', boxShadow: '0' }}>
                <img style={{ position: 'absolute', left: '0px', top: '0px', zIndex: '-1' }} src={line} alt="" />
                <img src={quote} style={{ position: 'absolute', top: '40px', width: '39.47px', height: '30px', left: '50px' }} alt="" />
              </Item>
              <Item sx={{ position: 'relative', boxShadow: 0, marginTop: '90px', marginLeft: '10px' }}>
                <Slider ref={sliderRef} {...settingsFour} >
                  {reviews.map(review => (
                    <Box key={review.id} review={review} >
                      <Box sx={{ textAlign: 'left', marginLeft:'30px' }}>
                        <Typography>{review.reviews}</Typography>
                        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'black' }}>{review.name}</Typography>
                        <Rating
                          className="fs-4"
                          initialRating={review.ratings}
                          emptySymbol="far fa-star "
                          fullSymbol="fas fa-star "
                          readonly></Rating>
                      </Box>
                    </Box>
                  ))}
                </Slider>

              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default StudentSaying;