import React from 'react';
import { makeStyles } from '@material-ui/styles';
import BackToTopButton from '../components/BackToTopButton';
import { AboutUs, Services, Team } from './components';

const useStyles = makeStyles(theme => ({
  aboutus_root: {
    boxSizing : 'border-box'
  }
}));
const About = ({
}) => {
  const classes = useStyles();

  return (
    <div className={classes.aboutus_root} >
      <BackToTopButton />
      <AboutUs />
      <Services />
      <Team />
    </div>
  );
};

export default About;
