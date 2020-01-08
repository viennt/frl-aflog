import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  
}));


const CarouselIndicator = ({ onClick ,index, activeIndex}) => {
  const classes = useStyles();
  
  return (
    <li>
      <a
        className={
          index == activeIndex
            ? "carousel__indicator carousel__indicator--active"
            : "carousel__indicator"
        }
        onClick={onClick}
      />
    </li>
  );
};

export default CarouselIndicator;
