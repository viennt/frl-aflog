import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link, IconButton } from '@material-ui/core';

import { AflogInput } from '../../../components';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.dark,
    padding : '0 20px ',
    display: 'flex',
    alignItems: 'center',
    flexWrap : 'wrap',
    boxSizing :'border-box',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      padding : '20px ',
    }
  },
  grow: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display : 'none'
    }
  },
  link: {
    color: '#ffffff'
  },
  socialIconButton: {
    color : theme.palette.white,
    fontSize : 14,
    lineHeight : 18,
    margin : '0 3px'
  },
  social_buttons: {
    marginRight: 30
  },
  copyright: {
    color : theme.palette.text.light,
    fontSize: 12,
    lineHeight: '15px',
  },
  primary_text:{
    color: theme.palette.text.primary,
    fontSize: 12,
    lineHeight: '15px',
  },
  lable :{
    color: theme.palette.text.contrastText,
    fontSize: 14,
    lineHeight: '18px',
  },
  text:{
    color : '#fff'
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.social_buttons}>
        <IconButton edge="start" className={classes.socialIconButton} color="inherit" aria-label="menu" onClick = {
          () => {
            window.open('https://www.facebook.com/Afl0g/', '_blank');
          }
        }>
          <i className="fab fa-facebook-f"></i>
        </IconButton>
        <IconButton edge="start" className={classes.socialIconButton} color="inherit" aria-label="menu" onClick = {
          () => {
            window.open('https://www.instagram.com/aflog.in/', '_blank');
          }
        }>
          <i className="fab fa-instagram"></i>
        </IconButton>
        <IconButton edge="start" className={classes.socialIconButton} color="inherit" aria-label="menu" onClick = {
          () => {
            window.open('https://www.linkedin.com/company/aflogindia/?originalSubdomain=in', '_blank');
          }
        }>
          <i className="fab fa-linkedin-in"></i>
        </IconButton>
        <IconButton edge="start" className={classes.socialIconButton} color="inherit" aria-label="menu" onClick = {
          () => {
            window.open('https://twitter.com/aflog_in', '_blank');
          }
        }>
          <i className="fab fa-twitter"></i>
        </IconButton>
      </div>
      <div>
        <Typography component="span" className={classes.copyright}>
          <Link
            component="a"
            href=""
            className={classes.link}
            target="_blank"
          >
            Affilogue Private Ltd.&nbsp;
          </Link>
        </Typography>
        <Typography component="span" className={classes.primary_text}>
          &copy;{' '} 2019
        </Typography>
        <Typography component="span" className={classes.copyright}>
          &nbsp; all rights reserved
        </Typography>
      </div>
      <div className={classes.grow} />

      <div className={classes.actions}>
        <IconButton
          edge="start"
          className={classes.app_store}
          color="inherit"
          aria-label="app store button"
          onClick = {
            () => {
              window.open('https://play.google.com/store/apps/details?id=in.aflog.app', '_blank');
            }
          }
        >
          <img src="/images/Header/play_store_banner.svg" alt="" />
        </IconButton>
        <IconButton
          edge="start"
          className={classes.google_play}
          color="inherit"
          aria-label="Google play button"
          onClick = {
            () => {
              window.open('https://apps.apple.com/in/app/aflog/id1452031355', '_blank');
            }
          }
        >
          <img src="/images/Header/app_store_banner.svg" alt="" />
        </IconButton>
      </div>
      <Typography className={classes.text}>
        Stay curated &nbsp;
        <img src="/images/Footer/af_icon.svg" alt="" />
      </Typography>
      <AflogInput />
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
