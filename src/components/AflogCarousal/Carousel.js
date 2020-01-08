import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  CarouselIndicator,
  CarouselLeftArrow,
  CarouselRightArrow,
  CarouselSlide
} from './Components'
import './Carousal.css';

const useStyles = makeStyles(theme => ({
  aflog_carousal_root: {
    position: 'relative',
    maxWidth: '100%',

  }
}));


const Carousel = ({
  slides
}) => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

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
      index = -1;
    }
    ++index;
    setActiveIndex(index);
  }

  return (
    <div className="carousel-container">
      <div className="carousel">
        <CarouselLeftArrow onClick={e => goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {/* {slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={activeIndex}
              slide={slide}
            />
          )} */}
          <li
            className={
              0 == activeIndex
                ? "carousel__slide carousel__slide--active"
                : "carousel__slide"
            }
          >
            <div className="carousel__slide_item">
              <ul className="carousel__indicators">
                {slides.map((slide, index) =>
                  <CarouselIndicator
                    key={index}
                    index={index}
                    activeIndex={activeIndex}
                    isActive={activeIndex == index}
                    onClick={e => goToSlide(index)}
                  />
                )}
              </ul>
              <p className="carousel-slide__title">
                Over{' '}
                <span className="carousel-slide__primary">
                  100+ brands
                </span>{' '}
                for you to instantly shop from.
              </p>
              <p className="carousel-slide__content">
                Browse through a catalogue of curated experiences from the finest content creators around you.
              </p>
            </div>
            <div className="carousel__slide_item carousel__slide_item_img">
              <img src={"/images/Banners/banner1.png"} alt={"/images/Banners/banner1.png"} />
            </div>
          </li>
          <li
            className={
              1 == activeIndex
                ? "carousel__slide carousel__slide--active"
                : "carousel__slide"
            }
          >
            <div className="carousel__slide_item">
              <ul className="carousel__indicators">
                {slides.map((slide, index) =>
                  <CarouselIndicator
                    key={index}
                    index={index}
                    activeIndex={activeIndex}
                    isActive={activeIndex == index}
                    onClick={e => goToSlide(index)}
                  />
                )}
              </ul>
              <p className="carousel-slide__title">
                Discover the{' '}
                <span className="carousel-slide__primary">
                  crème de la crème
                </span>{' '}
                of Content Creators.
              </p>
              <p className="carousel-slide__content">
                Browse through a catalogue of curated experiences from the finest content creators around you.
              </p>
            </div>
            <div className="carousel__slide_item carousel__slide_item_img">
              <img src={"/images/Banners/banner2.png"} alt={"/images/Banners/banner2.png"} />
            </div>
          </li>
          <li
            className={
              2 == activeIndex
                ? "carousel__slide carousel__slide--active"
                : "carousel__slide"
            }
          >
            <div className="carousel__slide_item">
              <ul className="carousel__indicators">
                {slides.map((slide, index) =>
                  <CarouselIndicator
                    key={index}
                    index={index}
                    activeIndex={activeIndex}
                    isActive={activeIndex == index}
                    onClick={e => goToSlide(index)}
                  />
                )}
              </ul>
              <p className="carousel-slide__title">
                A{' '}
                <span className="carousel-slide__primary">
                  curated feed
                </span>{' '}
                to suit your personal aesthetic.
              </p>
              <p className="carousel-slide__content">
                Browse through a catalogue of curated experiences from the finest content creators around you.
              </p>
            </div>
            <div className="carousel__slide_item carousel__slide_item_img">
              <img src={"/images/Banners/banner3.png"} alt={"/images/Banners/banner3.png"} />
            </div>
          </li>
        </ul>

        <CarouselRightArrow onClick={e => goToNextSlide(e)} />
      </div>
    </div>
  );
};

export default Carousel
