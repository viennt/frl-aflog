import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  aflog_navbar: {
    flexGrow: 1,
  },
  grow:{
    flexGrow: 1
  },
  logo:{
    paddingRight : '30px'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  appbar_custom:{
    backgroundColor: theme.palette.black
  },
  link:{
    textDecoration : 'none',
    color: theme.palette.white,
    padding : '0 15px',
    fontSize : '13px'
  },
  mobilelink:{
    textDecoration : 'none',
    color: theme.palette.black,
    padding : '0 15px',
    fontSize : '13px'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Topbar = ({location})=> {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);  
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <RouterLink to="/Home" className={classes.mobilelink}>
          Home
        </RouterLink>
      </MenuItem>
      <MenuItem>
        <RouterLink to="/About-us" className={classes.mobilelink}>
          About
        </RouterLink>
      </MenuItem>
      <MenuItem>
        <RouterLink to="/Contact" className={classes.mobilelink}>
          Contact
        </RouterLink>
      </MenuItem>
      <MenuItem>
        <RouterLink to="/Contact" className={classes.mobilelink}>
          Community
        </RouterLink>
      </MenuItem>
    </Menu>
  );
    
  return (
    <div className={classes.aflog_navbar}>
      <AppBar position="static" className={classes.appbar_custom}>
        <Toolbar>
          <RouterLink to="/Home" className={classes.logo}>
            <img
              alt="Logo"
              src="/images/Header/aflog_logo_white.svg"              
            />
          </RouterLink>
          <div className={classes.actions}>
            <IconButton
              edge="start"
              className={classes.app_store}
              color="inherit"
              aria-label="app store button"
            >
              <img src="/images/Header/play_store_banner.svg" alt="" />
            </IconButton>
            <IconButton
              edge="start"
              className={classes.google_play}
              color="inherit"
              aria-label="Google play button"
            >
              <img src="/images/Header/app_store_banner.svg" alt="" />
            </IconButton>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <RouterLink to="/Home" className={classes.link}>
              Home
            </RouterLink>
            <RouterLink to="/About-us" className={classes.link}>
              About
            </RouterLink>
            <RouterLink to="/Contact" className={classes.link}>
              Contact
            </RouterLink>
            <RouterLink to="/Community" className={classes.link}>
              Community
            </RouterLink>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

export default withRouter(Topbar);
