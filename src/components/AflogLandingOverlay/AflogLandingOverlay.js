import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import ComputerIcon from '@material-ui/icons/Computer';

const useStyles = makeStyles(theme => ({
  aflog_overlay_root: {
    boxSizing: 'border-box',
    width: '100%',
    height: '90vh',
    position: 'absolute',
    top: '-65px',
    left: 0,
    right: 0,
    background: 'rgba(250, 250, 250, 0.98)',
    zIndex: 3000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 5
  },
  art: {
    width: '345px',
    padding: '20px'
  },
  art_img: {
    width: '100%'
  },
  button: {
    ...theme.typography.button,
    textTransform:'uppercase',
    width : 240,
    marginTop: 20,
  },
  tag_line: {
    color: theme.palette.text.secondary,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    marginBottom: 20,
  }
}));

function AflogLandingOverlay({ history, className }) {
  const classes = useStyles();

  const renderHomePage = () => {
    history.push('/Home')
  }

  return (
    <div className={classes.aflog_overlay_root}>

      <div className={classes.art}>
        <img
          src={'/images/Landing Page/art.png'}
          alt={'art.png'}
          className={classes.art_img}
        />
      </div>

      <div className={classes.art}>
        <img
          src={'/images/Landing Page/aflog_logo.svg'}
          alt={'art.png'}
          className={classes.logo} />
        <Typography className={classes.tag_line}>
          From handpicked recommendations, we focus on
          bringing together a community of diverse niches.
        </Typography>
        <img src={'/images/Landing Page/app_store_banner.svg'} alt={'app_store_banner.svg'} />
        <br />
        <img src={'/images/Landing Page/play_store_banner.svg'} alt={'play_store_banner.svg'} />
        <br />
        <Button onClick={renderHomePage} className={classes.button}> 
          <i className="fas fa-desktop"></i> &nbsp;
          CONTINUE TO WEBSITE
        </Button>
      </div>
    </div>
  );
}

export default withRouter(AflogLandingOverlay);
