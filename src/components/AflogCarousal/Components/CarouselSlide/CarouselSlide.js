import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({

}));


const CarouselSlide = ({ activeIndex, slide, index }) => {
  const classes = useStyles();

  return (
    <li
      className={
        index == activeIndex
          ? "carousel__slide carousel__slide--active"
          : "carousel__slide"
      }
    >
      <div className="carousel__slide_item">
        <p>
          <strong className="carousel-slide__author">
            {slide.title}
          </strong>,
        </p>
        <p className="carousel-slide__content">{slide.content}</p>
      </div>
      <div className="carousel__slide_item">
        <img src={slide.img} alt={slide.img} />
      </div>
    </li>
  );
};

export default CarouselSlide;

