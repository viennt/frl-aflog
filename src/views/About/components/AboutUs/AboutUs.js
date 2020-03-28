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
    padding : '30px',
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
            <img src={'/images/aflog_icon_purple.svg'} className={classes.logo} />
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
            We’re a content based agency tech company. But that’s oversimplified.
          </Typography>
            <br />
              <Typography variant='body1'>
              We, at Aflog, believe that experiences sell more than ads. When done right, influencers and content creators can both benefit greatly from User-Generated content. Influencer marketing, while popular, is misunderstood and isn’t being utilised to its fullest potential. We come to work everyday because we want to solve a problem- help brands use their own consumers to market their products. We’re obsessively passionate about it and we’re making it happen.
            </Typography>
              <br />
            <Typography variant='body1'>
              We started off as a group of young people frustrated with the ineffective ads thrown at us all day everyday. 2 years and a lot of ups and downs later, we’re here, building seamless tech to help you create content for the brands you know and love. What are you waiting for? Join our community.
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
              We created Aflog to be the go-to resource for discovering the best
              content creators to connect and collaborate with.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default AboutUs;
