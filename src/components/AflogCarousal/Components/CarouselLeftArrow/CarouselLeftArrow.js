import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const useStyles = makeStyles(theme => ({

}));


const CarouselLeftArrow = ({ onClick }) => {
  const classes = useStyles();

  return (
    <a
      href="#"
      className="carousel__arrow carousel__arrow--left"
      onClick={onClick}
    >
      <img src={'/images/Banners/arrow_left_normal.svg'} alt="left" />
      {/* <ArrowLeftIcon /> */}
    </a>
  );
};

export default CarouselLeftArrow;