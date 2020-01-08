import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import {
  Typography,
  Grid
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import color from '@material-ui/core/colors/amber';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    padding: '40px 20px'
  },
  logo: {
    width: 50
  },
  primaryText: {
    color: theme.palette.primary.dark
  },
  banner: {
    marginTop: 30,
    background: theme.palette.primary.main,
    textAlign: 'center',
    padding : '30px'
  },
}));

const AboutUs = ({
}) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.root}>
        <Grid
          container
          justify="center"
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
          >
            <img src={'/images/About us/aflog_icon_purple.svg'} className={classes.logo} />
            <Typography variant={"h2"}>
              We f*cking love {' '} <strike>good</strike>
              <span className={classes.primaryText}> great{' '}</span>
              content.
            </Typography>

            <Typography variant={'h3'} className={classes.textColorr}>
              And we want
            <span className={classes.primaryText}> everyone{' '}</span>
              to feel the same way.
          </Typography>
            <div className="mt5" />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
        >
          <Grid
            item
            xs={12}
            sm={8}
          >
            <Typography variant='body1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel diam libero. Nullam laoreet sem nec commodo lacinia. Ut lacinia sodales consectetur. Nunc sit amet elit eget nibh semper pulvinar at non augue. Nullam turpis elit, rhoncus in bibendum eu, tempus in ante.
              In rutrum vel mauris at hendrerit. Ut ultrices ex nibh, sed cursus augue fermentum nec.consectetur adipiscing elit. Praesent vel diam libero. Nullam laoreet sem nec commodo lacinia. Ut lacinia sodales consectetur. Nunc sit amet elit eget nibh semper pulvinar at non augue. Nullam turpis elit, rhoncus in bibendum eu, tempus in ante.
              In rutrum vel mauris at hendrerit. augue fermentum nec.
          </Typography>
            <br />
            <Typography variant='body1'>
              Maecenas a aliquet leo, nec feugiat lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vitae eleifend eros. Nulla pharetra ipsum sit amet nunc ultrices, vestibulum mattis urna blandit. Praesent malesuada turpis ut justo commodo, sit amet dignissim sapien euismod.
              Praesent lorem quam, tristique feugiat lacus et, elementum mattis turpis.
          </Typography>
          </Grid>
        </Grid>
      </div>
      <div className={classes.banner}>
        <Grid
          container
          justify="center"      >
          <Grid
            item
            xs={12}
            sm={6}
          >
            <Typography variant="h4">
              So we created aflog to be the go-to resource for discovering the best
              content creators and to connect and collaborate with.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default AboutUs;
