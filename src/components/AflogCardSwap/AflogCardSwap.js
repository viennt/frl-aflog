import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { AflogDetail } from '../index';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(theme => ({
  root: {
  },
  arrow: {
    color: '#fff',
    fontSize: '2rem'
  }
}));

const AflogCardSwap = ({ slides, selected }) => {
  const classes = useStyles();

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setActiveIndex(selected);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  }

  const goToPrevSlide = (e) => {
    e.preventDefault();

    let index = activeIndex;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;
    setActiveIndex(index);
  }

  const goToNextSlide = (e) => {
    e.preventDefault();

    let index = activeIndex;

    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = 0;
    } else {
      ++index;
    }

    setActiveIndex(index);
  }
  return (
    <div className={classes.root}>
      <a
        href="#"
        className="carousel__arrow carousel__arrow--left"
        onClick={e => goToPrevSlide(e)} 
      >
        <ArrowLeftIcon />
      </a>

      <ul className="carousel__slides">
        {
          slides.length > 0 && slides.map((item, index) => (
            <li
              className={
                index == activeIndex
                  ? "carousel__slide carousel__slide--active"
                  : "carousel__slide"
              }
            >
              <div className="carousel__slide_item">
                <AflogDetail aflog={item} />
                {/* <img src={item.image} /> */}
              </div>
            </li>
          ))}
      </ul>

      <a
        href="#"
        className="carousel__arrow carousel__arrow--right"
        onClick={e => goToNextSlide(e)}
      >
        <ArrowRightIcon className={classes.arrow} />
      </a>
    </div>
  );
};

export default AflogCardSwap;