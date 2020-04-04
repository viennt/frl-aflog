import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid, Avatar } from '@material-ui/core';
import { setAlert } from '../../../../redux/actions/alert';

const useStyles = makeStyles(theme => ({
  roots: {
    display: 'flex',
    boxShadow: '0px 2px 10px 2px #ECECEC',
    borderRadius: 10,
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  avatar: {
    margin: 'auto',
    width: `${theme.spacing(15)}px !important`,
    height: `${theme.spacing(15)}px !important`,
  },
  userDisplayName: {
    margin: `${theme.spacing(2)}px !important`,
    fontWeight: 900,
    fontSize: '18px'
  },
  userDescription: {
    margin: `${theme.spacing(2)}px !important`,
    textAlign: 'center',
    fontSize: '14px'
  },
  statsNumber: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: '18px'
  },
  statsText: {
    color: theme.palette.text.primary,
    textAlign: 'center',
    fontSize: '12px'
  }
}));

const ContactInfo = () => {
  const classes = useStyles();

  const userAvatar = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200';
  const userDisplayName = 'John Appleseed';
  const userDescription = 'Lorem Ipsum has been the industrys';
  const userStars = '5,000';
  const userViews = '5,000';
  const userRedirects = '5,000';

  return (
    <div className={classes.roots}>
      <Grid
        container
        justify={'center'}
      >
        <Container
          className={classes.avatarContainer}
          maxWidth="sm"
        >
          <Avatar
            alt={userDisplayName}
            className={classes.avatar}
            src={userAvatar}
          />
        </Container>
        <div
          className={classes.userDisplayName}
        >
          {userDisplayName}
        </div>
        <div
          className={classes.userDescription}
        >
          {userDescription}
        </div>

        <Grid
          container
          item
          justify={'center'}
          xs={12}
        >
          <Grid
            item
            xs={4}
          >
            <div className={classes.statsNumber}>{userStars}</div>
            <div className={classes.statsText}>Stars</div>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <div className={classes.statsNumber}>{userViews}</div>
            <div className={classes.statsText}>Views</div>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <div className={classes.statsNumber}>{userRedirects}</div>
            <div className={classes.statsText}>Redirects</div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};

export default connect(null, { setAlert })(ContactInfo);
