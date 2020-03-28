import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const useStyles = makeStyles(theme => ({
  arrow: {
    color: '#fff',
    fontSize: '2rem'
  }
}));


const CarouselLeftArrow = ({ onClick }) => {
  const classes = useStyles();

  return (
    <a
      href="#"
      className="carousel__arrow carousel__arrow--left"
      onClick={onClick}
    >
      {/* <i class="fas fa-caret-circle-left"></i> */}
      {/* <img src={'/images/Banners/arrow_left_normal.svg'} alt="left" /> */}
      <ArrowLeftIcon className={classes.arrow} />
    </a>
  );
};

export default CarouselLeftArrow;