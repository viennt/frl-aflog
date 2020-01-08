import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import {
  Typography
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

  root: {

  },
  primaryText: {
    color: theme.palette.primary.dark
  },
  cover: {
    padding: '50px 20px',
    background: theme.palette.background.light
  },
  banner: {
    padding: '30px'
  },
  bannerItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    ...theme.typography.button,
    textTransform: 'capitalize',
    width: 120,
    marginTop: 20,
  },
  service1: {
    textAlign: 'left'
  },
  service2: {
    textAlign: 'right'
  },
  serviceImg: {
    width: '100%'
  },
  figure: {
    fontSize: 36,
    fontWeight: 900,
    lineHeight: '45px',
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '16px',
    letterspacing: '1.4px',
    textAlign: 'center',
    color: theme.palette.text.dark
  },
  mt3_xs: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '3rem'
    }
  }
}));
const Services = ({
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.cover}>
          <Grid
            container
            justify={'center'}
          >
            <Grid
              item
              container
              justify={'center'}
              xs={12}
              sm={8}
              md={10}
            >
              <Grid
                item
                sm={12}
                md={7}
              >
                <div className={classes.service1}>
                  <Typography variant={"h2"}>
                    What is aflog?
                  </Typography>
                  <Typography variant={"h1"} className="mt3">
                    A collection of experiences by
                    the leading <span className={classes.primaryText}> creative talent. </span>
                  </Typography>
                  <Typography variant={"body2"} className="mt4">
                    We have a dream to build a seamless eco-system for content creators
                    to share, collaborate, grow and get noticed by top brands.
              </Typography>
                </div>
              </Grid>
              <Grid
                item
                sm={12}
                md={5}
              >
                <img
                  src={'/images/About us/aflogArt.svg'}
                  alt="aflog art"
                  className={clsx(classes.serviceImg, classes.mt3_xs)}
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className={classes.banner}>
          <Grid
            container
            justify={'center'}
            alignItems="center"
          >
            <Grid
              item
              container
              justify="space-evenly"
              xs={12}
              sm={8}
            >
              <Typography component="p" className={classes.bannerItem}>
                <span className={classes.figure}>500+</span>
                <span className={classes.label}>BRANDS</span>
              </Typography>

              <Typography component="p" className={classes.bannerItem}>
                <span className={classes.figure}>200+</span>
                <span className={classes.label}>AFLOGGERS</span>
              </Typography>

              <Typography component="p" className={classes.bannerItem}>
                <span className={classes.figure}>3000+</span>
                <span className={classes.label}>USERS</span>
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.cover}>
          <Grid
            container
            justify={'center'}
          >
          <Grid
              item
              container
              justify={'center'}
              xs={12}
              sm={8}
              md={10}
          >
            <Grid
              item
              sm={12}
              md={5}
            >
              <img src={'/images/About us/joinUs.svg'} alt="aflog art" className={clsx(classes.serviceImg)} />
            </Grid>
            <Grid
              item
              sm={12}
              md={7}
            >
              <div className={classes.service2}>
                <Typography variant={"h1"} >
                  Over a <span className={classes.primaryText}>million</span> words shared.
                What will <span className={classes.primaryText}>you</span> write about?
                </Typography>
                <Typography variant={"body2"} className="mt4">
                  We have a dream to build a seamless eco-system for content creators
                  to share, collaborate, grow and get noticed by top brands.
                </Typography>
                <Button className={classes.button}>
                  Join Now
                </Button>
              </div>
            </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
