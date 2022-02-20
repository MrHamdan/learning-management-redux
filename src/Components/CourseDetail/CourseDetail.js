import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { styled } from '@mui/material/styles';
import { Link, useParams } from 'react-router-dom';
import { CourseDataContext } from '../../Contexts/CourseDataProvider';
import ReactPlayer from 'react-player';
import bars from '../../Images/bars.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './CourseDetail.css';
import Slider from 'react-slick';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import play from '../../Images/play.png';
import lock from '../../Images/lock.png';
import lockdark from '../../Images/lockdark.png';
import Swal from 'sweetalert2';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CourseDetail = () => {

  const { id } = useParams();

  const [courseList, setCourseList] = useState([]);

  const [course, setCourse] = useState({});

  const [cart, setCart] = useContext(CourseDataContext);

  const handleAddToCart = (course) => {
    const added = cart.find((item) => (item.id === course.id))
    if (added) {
      added.quantity = added.quantity + 1
      Swal.fire({
        position: 'middle',
        icon: 'success',
        title: 'Course Has Been Added',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else {
      course = {
        ...course,
        quantity: 1
      }
      const newCart = [...cart, course];
      setCart(newCart);
    }
    console.log(cart);
  }



  useEffect(() => {
    const selectedCourse = courseList.find(course => course.id === id);
    setCourse(selectedCourse);
  }, [courseList, id]);

  useEffect(() => {
    fetch('/coursedata.json')
      .then(res => res.json())
      .then(data => setCourseList(data))
  }, [])


  const [relatedCourses, setRelatedCourses] = useState([]);
  useEffect(() => {
    fetch('/bestcourses.json')
      .then(data => data.json())
      .then(data => setRelatedCourses(data))
  }, []);


  const sliderRef = React.useRef(null);


  const buttonStyles = {
    next: {
      background: '#EEEEEE',
      borderRadius: '6px',
      padding: '20px',
      color: 'black',
      '&:hover': {
        color: 'white',
        background: '#009FE3',
      }
    },
    prev: {
      background: '#EEEEEE',
      borderRadius: '6px',
      padding: '20px',
      color: 'black',
      '&:hover': {
        color: 'white',
        background: '#009FE3',
      }
    }
  }


  const settingsThree = {
    dots: true,
    dotsClass: 'slick-dots-three',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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


  return (
    <div>
      <Header color="white" />
      <Box sx={{ height: { xl: '450px', xs: '450px' }, backgroundColor: '#0D2A62' }}></Box>
      <Box sx={{ position: 'relative', top: { xl: '-300px', xs: '-420px' } }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} xl={8}>
                <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
                  <Typography sx={{ fontSize: '36px', fontFamily: 'Inter', fontWeight: 'bold', color: 'white', textAlign: 'left', marginBottom: '66px' }}>{course?.title}</Typography>
                </Item>
              </Grid>
              <Grid item xs={12} xl={4} sx={{ marginTop: { xs: '-70px', xl: '0px' } }}>
                <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}><Button sx={{ width: { xl: '350px', xs: '250px' }, height: '51px', border: '1px solid #009FE3', '&:hover': { backgroundColor: '#009FE3', border: '0px' }, color: 'white', marginBottom: '20px', textTransform: 'none', fontSize: '16px', fontFamily: 'Inter', fontWeight: 'bold' }} onClick={() => handleAddToCart(course)}>Take This Course</Button> <br />
                  <Button sx={{ width: { xl: '350px', xs: '250px' }, height: '51px', border: '1px solid #009FE3', '&:hover': { backgroundColor: '#009FE3', border: '0px' }, color: 'white', marginBottom: '20px', textTransform: 'none', fontSize: '16px', fontFamily: 'Inter', fontWeight: 'bold' }}>Gift This Course</Button></Item>
              </Grid>
              <Grid item xs={12} xl={8}>
                <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
                  <ReactPlayer controls width="100%" url={course?.url} />
                </Item>
                <Item sx={{ backgroundColor: 'transparent', boxShadow: 0, display: 'flex', flexDirection: { xl: 'row', md: 'row', xs: 'column' }, alignItems: 'center', marginTop: '31px' }}>
                  <Paper sx={{ width: '140px', height: '100px', marginRight: { xl: '30px' }, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', marginBottom: { xs: '30px' } }}>
                    <Box>
                      <img src={bars} alt="" />
                      <Typography sx={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: 'normal' }}>
                        Beginner Level
                      </Typography>
                    </Box>
                  </Paper>
                  <Paper sx={{ width: '140px', height: '100px', marginRight: { xl: '30px' }, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: { xs: '30px' } }}>
                    <Box>
                      <Typography sx={{ fontSize: '20', fontFamily: 'Inter', fontWeight: 'bold', color: '#201E1E' }}>1000+</Typography>
                      <Typography sx={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: 'normal' }}>Students</Typography>
                    </Box>
                  </Paper>
                  <Paper sx={{ width: '140px', height: '100px', marginRight: { xl: '30px' }, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: { xs: '30px' } }}>
                    <Box>
                      <Typography sx={{ fontSize: '20', fontFamily: 'Inter', fontWeight: 'bold', color: '#201E1E' }}>46+</Typography>
                      <Typography sx={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: 'normal' }}>Video Lessons</Typography>
                    </Box>
                  </Paper>
                  <Paper sx={{ width: '140px', height: '100px', marginRight: { xl: '30px' }, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: { xs: '30px' } }}>
                    <Box>
                      <Typography sx={{ fontSize: '20', fontFamily: 'Inter', fontWeight: 'bold', color: '#201E1E' }}>500+</Typography>
                      <Typography sx={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: 'normal' }}>Positive Reviews</Typography>
                    </Box>
                  </Paper>
                </Item>
              </Grid>
              <Grid item xs={12} xl={4}>
                <Item sx={{ backgroundColor: 'transparent', boxShadow: 0, height: '631px', overflow: 'auto' }}>
                  <Box sx={{ backgroundColor: 'white', padding: '10px 0px' }}>
                    <Typography sx={{ textAlign: 'left', fontFamily: 'Inter', fontSize: '24px', fontWeight: 'bold', color: '#0D2A62', marginLeft: '20px' }}>Course Lessons <br /> <span style={{ fontSize: '14px' }}>8 Sections | 42 Videos</span> </Typography>
                    <Accordion sx={{ marginTop: '20px' }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{ backgroundColor: '#FAFAFA' }}
                      >
                        <Typography >Section 1: Introduction <br /> <span style={{ fontSize: '14px', color: '' }}>3 Videos | 15 minutes</span> </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ '&:hover': { borderLeft: '5px solid #009FE3', backgroundColor: '' } }}>
                        <Typography sx={{ textAlign: 'left' }}>
                          1. 	SAD Course Introduction <br />
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> <Box sx={{ display: 'flex', alignItems: 'center' }}><img style={{ marginRight: '5px' }} src={play} alt="" /> <Typography sx={{ color: '#9D9D9D' }}>3 Mins</Typography></Box> <Box> <img src={lock} alt="" /> </Box> </Box>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails sx={{ '&:hover': { borderLeft: '5px solid #009FE3', backgroundColor: '' } }}>
                        <Typography sx={{ textAlign: 'left' }}>
                          1. 	SAD Course Introduction <br />
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> <Box sx={{ display: 'flex', alignItems: 'center' }}><img style={{ marginRight: '5px' }} src={play} alt="" /> <Typography sx={{ color: '#9D9D9D' }}>3 Mins</Typography></Box> <Box> <img src={lockdark} alt="" /> </Box> </Box>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails sx={{ '&:hover': { borderLeft: '5px solid #009FE3', backgroundColor: '' } }}>
                        <Typography sx={{ textAlign: 'left' }}>
                          1. 	SAD Course Introduction <br />
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> <Box sx={{ display: 'flex', alignItems: 'center' }}><img style={{ marginRight: '5px' }} src={play} alt="" /> <Typography sx={{ color: '#9D9D9D' }}>3 Mins</Typography></Box> <Box> <img src={lockdark} alt="" /> </Box> </Box>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{ backgroundColor: '#FAFAFA' }}
                      >
                        <Typography >Section 1: Introduction <br /> <span style={{ fontSize: '14px', color: '' }}>3 Videos | 15 minutes</span> </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ '&:hover': { borderLeft: '5px solid #009FE3', backgroundColor: '' } }}>
                        <Typography sx={{ textAlign: 'left' }}>
                          1. 	SAD Course Introduction <br />
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> <Box sx={{ display: 'flex', alignItems: 'center' }}><img style={{ marginRight: '5px' }} src={play} alt="" /> <Typography sx={{ color: '#9D9D9D' }}>3 Mins</Typography></Box> <Box> <img src={lockdark} alt="" /> </Box> </Box>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails sx={{ '&:hover': { borderLeft: '5px solid #009FE3', backgroundColor: '' } }}>
                        <Typography sx={{ textAlign: 'left' }}>
                          1. 	SAD Course Introduction <br />
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> <Box sx={{ display: 'flex', alignItems: 'center' }}><img style={{ marginRight: '5px' }} src={play} alt="" /> <Typography sx={{ color: '#9D9D9D' }}>3 Mins</Typography></Box> <Box> <img src={lockdark} alt="" /> </Box> </Box>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails sx={{ '&:hover': { borderLeft: '5px solid #009FE3', backgroundColor: '' } }}>
                        <Typography sx={{ textAlign: 'left' }}>
                          1. 	SAD Course Introduction <br />
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> <Box sx={{ display: 'flex', alignItems: 'center' }}><img style={{ marginRight: '5px' }} src={play} alt="" /> <Typography sx={{ color: '#9D9D9D' }}>3 Mins</Typography></Box> <Box> <img src={lockdark} alt="" /> </Box> </Box>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{ backgroundColor: '#FAFAFA' }}
                      >
                        <Typography >Section 1: Introduction <br /> <span style={{ fontSize: '14px', color: '' }}>3 Videos | 15 minutes</span> </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ '&:hover': { borderLeft: '5px solid #009FE3', backgroundColor: '' } }}>
                        <Typography sx={{ textAlign: 'left' }}>
                          1. 	SAD Course Introduction <br />
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> <Box sx={{ display: 'flex', alignItems: 'center' }}><img style={{ marginRight: '5px' }} src={play} alt="" /> <Typography sx={{ color: '#9D9D9D' }}>3 Mins</Typography></Box> <Box> <img src={lockdark} alt="" /> </Box> </Box>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails sx={{ '&:hover': { borderLeft: '5px solid #009FE3', backgroundColor: '' } }}>
                        <Typography sx={{ textAlign: 'left' }}>
                          1. 	SAD Course Introduction <br />
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> <Box sx={{ display: 'flex', alignItems: 'center' }}><img style={{ marginRight: '5px' }} src={play} alt="" /> <Typography sx={{ color: '#9D9D9D' }}>3 Mins</Typography></Box> <Box> <img src={lockdark} alt="" /> </Box> </Box>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails sx={{ '&:hover': { borderLeft: '5px solid #009FE3', backgroundColor: '' } }}>
                        <Typography sx={{ textAlign: 'left' }}>
                          1. 	SAD Course Introduction <br />
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> <Box sx={{ display: 'flex', alignItems: 'center' }}><img style={{ marginRight: '5px' }} src={play} alt="" /> <Typography sx={{ color: '#9D9D9D' }}>3 Mins</Typography></Box> <Box> <img src={lockdark} alt="" /> </Box> </Box>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{ backgroundColor: '#FAFAFA' }}
                      >
                        <Typography >Section 1: Introduction <br /> <span style={{ fontSize: '14px', color: '' }}>3 Videos | 15 minutes</span> </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ '&:hover': { borderLeft: '5px solid #009FE3', backgroundColor: '' } }}>
                        <Typography sx={{ textAlign: 'left' }}>
                          1. 	SAD Course Introduction <br />
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> <Box sx={{ display: 'flex', alignItems: 'center' }}><img style={{ marginRight: '5px' }} src={play} alt="" /> <Typography sx={{ color: '#9D9D9D' }}>3 Mins</Typography></Box> <Box> <img src={lockdark} alt="" /> </Box> </Box>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails sx={{ '&:hover': { borderLeft: '5px solid #009FE3', backgroundColor: '' } }}>
                        <Typography sx={{ textAlign: 'left' }}>
                          1. 	SAD Course Introduction <br />
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> <Box sx={{ display: 'flex', alignItems: 'center' }}><img style={{ marginRight: '5px' }} src={play} alt="" /> <Typography sx={{ color: '#9D9D9D' }}>3 Mins</Typography></Box> <Box> <img src={lockdark} alt="" /> </Box> </Box>
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails sx={{ '&:hover': { borderLeft: '5px solid #009FE3', backgroundColor: '' } }}>
                        <Typography sx={{ textAlign: 'left' }}>
                          1. 	SAD Course Introduction <br />
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> <Box sx={{ display: 'flex', alignItems: 'center' }}><img style={{ marginRight: '5px' }} src={play} alt="" /> <Typography sx={{ color: '#9D9D9D' }}>3 Mins</Typography></Box> <Box> <img src={lockdark} alt="" /> </Box> </Box>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Box>

                </Item>
              </Grid>
              <Grid item xs={12} xl={12}>
                <Item sx={{ textAlign: 'left', boxShadow: 0 }}>
                  <Typography sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '28px', color: '#201E1E', marginBottom: '20px' }}>
                    Overview
                  </Typography>
                  <Typography sx={{ fontSize: '15px', fontFamily: 'Inter', fontWeight: 'normal', color: '#4E4848', lineHeight: '38px' }}>
                    {course?.description}
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box sx={{ height: { xl: '775px', xs: '700px' }, backgroundColor: '#FAFAFA', position: 'relative', top: { xl: '0px', xs: '0px' } }}>
        <Container >
          <Box>
            <Box sx={{ paddingTop: '100px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row', xl: 'row' } }}>
                <Typography sx={{ color: '#0D2A62', fontSize: { xs: '20px', md: '40px', xl: '48px' }, fontWeight: '800', fontFamily: 'Inter', marginTop: '0px' }}>Related Courses</Typography>
                <Box sx={{ mt: '0px' }}>
                  <ArrowBackIcon sx={{ ...buttonStyles.prev, mr: '20px' }} onClick={() => sliderRef?.current?.slickPrev()} />
                  <ArrowForwardIcon sx={buttonStyles.next} onClick={() => sliderRef?.current?.slickNext()} />
                </Box>
              </Box>
              <Box>
                <Slider ref={sliderRef} {...settingsThree}>
                  {relatedCourses.map(relatedCourse => (
                    <Box key={relatedCourse.id} bestCourse={relatedCourse} >
                      <Card sx={{ height: '400px', margin: '0px 10px', boxShadow: 3, position: 'relative', marginTop: '30px', marginBottom: '40px' }}>
                        <Typography sx={{ backgroundColor: '#FF8A00', color: 'white', borderRadius: '20px', padding: '4px 10px', top: '10px', position: 'absolute', fontSize: '12px', left: '10px', fontWeight: 'bold' }}>Most Popular</Typography>
                        <CardMedia
                          component="img"
                          height="194"
                          image={relatedCourse.coverImage}
                        />
                        <CardContent>
                          <Typography sx={{ fontSize: '22px', color: '' }}>
                            {relatedCourse.title}
                          </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <del style={{ color: 'gray', fontSize: '15px', marginRight: '4px', fontWeight: 'bold', fontFamily: 'Inter' }}>£{relatedCourse.regularPrice}</del>
                            <Typography sx={{ color: '#009FE3', fontSize: '24px', fontWeight: 'bold', fontFamily: 'Inter', }}>£{relatedCourse.discountPrice}</Typography>
                          </Box>
                          <Box>
                            <Link to={`/coursedetail/${relatedCourse.id}`} style={{ textDecoration: 'none' }}><Button variant='contained' sx={{ padding: '5px 10px', backgroundColor: '#009FE3', width: '123px', height: '40px', borderRadius: '4px', fontFamily: 'Inter', textTransform: 'none' }}>Buy Now</Button></Link>
                          </Box>
                        </Box>
                      </Card>
                    </Box>
                  ))}
                </Slider>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer paddingTop='200px' />
    </div>
  );
};

export default CourseDetail;