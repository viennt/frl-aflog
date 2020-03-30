import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles(theme => ({
  arrow: {
    color: '#fff',
    fontSize: '2rem'
  },
  backToTop: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    zIndex: '9999',
    borderRadius: '50%',
    backgroundColor: '#41CAD4',
    width: '40px',
    height: '40px',
    border: '0',
    textAlign: 'center',
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  }
}));


const BackToTopButton = () => {
  const classes = useStyles();
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <a
      href="#"
      className={classes.backToTop}
      onClick={(e) => scrollToTop(e)}
    >
      <ArrowUpwardIcon className={classes.arrow}/>
    </a>
  );
};

export default BackToTopButton;
