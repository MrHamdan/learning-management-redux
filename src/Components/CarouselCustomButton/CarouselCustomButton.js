import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Styles = {
    next: {
        background: '#EEEEEE',
        borderRadius: '6px',
        padding: '20px',
        color: 'black',
        '&:hover': {
            color:'white',
            background: '#009FE3',
        }
    },
    prev:{
        background: '#EEEEEE',
        borderRadius: '6px',
        padding: '20px',
        color: 'black',
        '&:hover': {
            color:'white',
            background: '#009FE3',
        }
    }
}

const CarouselCustomButton = ({sliderRef}) => {
    return (
        <div>
            <ArrowBackIcon sx={{ ...Styles.prev, mr: '10px' }} onClick={() => sliderRef?.current?.slickPrev()} />
            <ArrowForwardIcon sx={Styles.next} onClick={() => sliderRef?.current?.slickNext()} />
        </div>
    );
};

export default CarouselCustomButton;