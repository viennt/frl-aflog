import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(theme => ({
  arrow:{
    color : '#fff',
    fontSize: '2rem'
  }
}));


const CarouselRightArrow = ({ onClick }) => {
  const classes = useStyles();

  return (
    <a
      href="#"
      className="carousel__arrow carousel__arrow--right"
      onClick={onClick}
    >
      {/* <i class="fas fa-caret-circle-right"></i> */}
      {/* <img src={'/images/Banners/arrow_right_normal.svg'} alt="left" /> */}
      <ArrowRightIcon className={classes.arrow}/>
    </a>
  );
};

export default CarouselRightArrow;