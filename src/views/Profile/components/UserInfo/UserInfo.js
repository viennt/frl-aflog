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

const ContactInfo = ({
  userInfo
}) => {
  const classes = useStyles();

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
            alt={userInfo.name}
            className={classes.avatar}
            src={userInfo.image}
          />
        </Container>
        <div
          className={classes.userDisplayName}
        >
          {userInfo.name}
        </div>
        <div
          className={classes.userDescription}
        >
          {userInfo.description}
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
            <div className={classes.statsNumber}>{userInfo.like}</div>
            <div className={classes.statsText}>Stars</div>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <div className={classes.statsNumber}>{userInfo.view}</div>
            <div className={classes.statsText}>Views</div>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <div className={classes.statsNumber}>{userInfo.share}</div>
            <div className={classes.statsText}>Redirects</div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};

const mapStateToProps = state => ({
  userInfo: state.authState.user
});

export default connect(mapStateToProps, { setAlert })(ContactInfo);
