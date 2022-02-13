import { Avatar, Box, Card, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import line from '../../Images/line.png';
import quote from '../../Images/quote.png';
import './StudentSaying.css';
import { styled } from '@mui/material/styles';
import reviewers from '../../Images/reviewers.png';

const Styles = {
  Student: {
    width: '100%',
    height: '681px'
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
    review: "Nunc eu tempus ultrices vitae, a suspendisse porta magna suscipit. Blandit consequat arcu quam sed mauris tempus. Neque, massa aliquam vitae, facilisis ut vel risus vitae gravida.",
    name: "Jenifer Smith",
    ratings: "4.5"
  },
  {
    id: "2",
    review: "Nunc eu tempus ultrices vitae, a suspendisse porta magna suscipit. Blandit consequat arcu quam sed mauris tempus. Neque, massa aliquam vitae, facilisis ut vel risus vitae gravida.",
    name: "Jenifer Smith",
    ratings: "4.5"
  },
  {
    id: "3",
    review: "Nunc eu tempus ultrices vitae, a suspendisse porta magna suscipit. Blandit consequat arcu quam sed mauris tempus. Neque, massa aliquam vitae, facilisis ut vel risus vitae gravida.",
    name: "Jenifer Smith",
    ratings: "4.5"
  },
  {
    id: "4",
    review: "Nunc eu tempus ultrices vitae, a suspendisse porta magna suscipit. Blandit consequat arcu quam sed mauris tempus. Neque, massa aliquam vitae, facilisis ut vel risus vitae gravida.",
    name: "Jenifer Smith",
    ratings: "4.5"
  },
  {
    id: "5",
    review: "Nunc eu tempus ultrices vitae, a suspendisse porta magna suscipit. Blandit consequat arcu quam sed mauris tempus. Neque, massa aliquam vitae, facilisis ut vel risus vitae gravida.",
    name: "Jenifer Smith",
    ratings: "4.5"
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
          <Typography sx={{ color: '#0D2A62', fontSize: { xs: '20px', md: '40px', xl: '50px' }, fontWeight: 'bold', fontFamily: 'Inter', marginTop: '30px' }}>
            What Student Saying <br/> About US
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop:'50px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={5}>
              <Item sx={{ boxShadow: 0 }}><img src={reviewers} alt="" /></Item>
            </Grid>
            <Grid item xs={12} xl={7}>
              <Item sx={{position: 'relative', boxShadow: '0'}}>
                <img style={{ position: 'absolute', left: '0px', top: '0px' }} src={line} alt="" />
                <img src={quote} style={{ position: 'absolute', top: '40px', width: '39.47px', height: '30px', left:'40px' }} alt="" />
              </Item>
              <Item sx={{ position: 'relative', boxShadow: 0, marginTop:'90px', marginLeft:'10px' }}>
                <Slider ref={sliderRef} {...settingsFour} >
                  {reviews.map(review => (
                    <Box key={review.id} review={review} >
                      <Box sx={{textAlign: 'left'}}>
                        <Typography>{review.review}</Typography>
                        <Typography>{review.name}</Typography>
                        <Typography>{review.ratings}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Slider>

              </Item>
            </Grid>
          </Grid>
        </Box>

        {/* <Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={8} xl={5} sx={{ position: 'relative' }}>
                <Avatar sx={{
                  width: '98.61px',
                  height: '98.61px',
                  position: 'absolute',
                  top: '150px',
                  left: '-20px',
                }} src="https://i.ibb.co/4tdDjPF/Group-892.png" />
                <Avatar sx={{
                  width: '66px',
                  height: '66px',
                  top: '104px',
                  left: '145px',
                  position: 'absolute',
                }} src="https://i.ibb.co/1b8Nt8J/Group-889.png" />
                <Avatar sx={{
                  width: '117px',
                  height: '117px',
                  top: '200px',
                  left: '120px',
                  position: 'absolute',
                }} src="https://i.ibb.co/f45MQSs/Group-890.png" />
                <Avatar sx={{
                  width: '98.61px',
                  height: '98.61px',
                  top: '283px',
                  left: '11px',
                  position: 'absolute',
                }} src="https://i.ibb.co/wzPpjrP/Group-893.png" />
                <Avatar sx={{
                  width: '90px',
                  height: '90px',
                  top: '344px',
                  left: '134px',
                  position: 'absolute',
                }} src="https://i.ibb.co/0p5n5mb/Group-891.png" />
                <img style={{ position: 'absolute', left: '300px', top: '120px' }} src={line} alt="" />
              </Grid>
              <Grid item xs={4} xl={7}>
                <img src={quote} style={{ position: 'relative', top: '120px', width: '39.47px', height: '30px', }} alt="" />
                <Box>
                  <Slider ref={sliderRef} {...settingsFour}>
                    {reviews.map(review => (
                      <Box key={review.id} review={review} >
                        <Box>
                          <Typography>{review.review}</Typography>
                        </Box>
                      </Box>
                    ))}
                  </Slider>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box> */}
      </Container>
    </Box>
  );
};

export default StudentSaying;