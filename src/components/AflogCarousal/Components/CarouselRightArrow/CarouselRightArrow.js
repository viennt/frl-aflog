import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(theme => ({

}));


const CarouselRightArrow = ({ onClick }) => {
  const classes = useStyles();

  return (
    <a
      href="#"
      className="carousel__arrow carousel__arrow--right"
      onClick={onClick}
    >
      <img src={'/images/Banners/arrow_right_normal.svg'} alt="left" />
      {/* <ArrowRightIcon /> */}
    </a>
  );
};

export default CarouselRightArrow;