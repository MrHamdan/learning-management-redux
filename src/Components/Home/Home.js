import React from 'react';
import Banner from '../Banner/Banner';
import Form from '../Form/Form';
import Header from '../Header/Header';
import Courses from '../Courses/Courses';
import Stunning from '../Stunning/Stunning';
import BestCourses from '../BestCourses/BestCourses';
import Details from '../Details/Details';
import Download from '../Download/Download';
import StudentSaying from '../StudentSaying/StudentSaying';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer.js/Footer';

const Home = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Header handleOpen={handleOpen} color='white' />
            <Banner />
            <Form open={open} handleClose={handleClose} />
            <Courses />
            <Stunning />
            <BestCourses />
            <Details />
            <Download />
            <StudentSaying />
            <Subscribe />
            <Footer paddingTop='389px' />
        </div>
    );
};

export default Home;