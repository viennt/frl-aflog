import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography
} from '@material-ui/core';
import {ContactInfo,ContactLocation} from './components';

const useStyles = makeStyles(theme => ({
}));
const Contact = ({
}) => {
  const classes = useStyles();
  return (
    <div>
      <ContactInfo/>
      <ContactLocation/>
    </div>
  );
};

export default Contact
