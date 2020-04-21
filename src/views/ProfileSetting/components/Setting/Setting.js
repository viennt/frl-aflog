import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { BackToProfile } from '../index';

const useStyles = makeStyles(theme => ({
  roots: {
    display: 'flex',
    boxShadow: '0px 2px 10px 2px #ECECEC',
    borderRadius: 10,
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  settingText: {
    color: theme.palette.text.primary,
    fontSize: '24px',
    fontWeight: 'bold',
    paddingLeft: theme.spacing(1),
    color: '#333333'
  }
}));

const Setting = () => {
  const classes = useStyles();

  return (
    <div className={classes.roots}>
      <Grid
        container
        justify={'center'}
      >

        <Grid
          container
          item
          justify={'center'}
          xs={12}
        >
          <Grid
            item
            xs={6}
          >
            <div className={classes.settingText}>Settings</div>
          </Grid>
          <Grid
            item
            xs={6}
          >
            <BackToProfile />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};

export default Setting;
