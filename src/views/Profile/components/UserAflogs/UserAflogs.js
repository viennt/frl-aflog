import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Grid, Box } from '@material-ui/core';
import { setAlert } from '../../../../redux/actions/alert';

const useStyles = makeStyles(theme => ({
  roots: {
  },
}));

const ContactInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.roots}>
      <Grid
        container
        justify={'center'}
      >
        <Box>A</Box>
      </Grid>
    </div>
  )
};

export default connect(null, { setAlert })(ContactInfo);
