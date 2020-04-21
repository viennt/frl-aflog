import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import LoginModal from './LoginModal';

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
    backgroundColor: theme.palette.common.black
  },
  link:{
    textDecoration : 'none',
    color: theme.palette.common.white,
    padding : '0 15px',
    fontSize : '13px',
    fontFamily: 'Muli, sans-serif'
  },
  linkActive:{
    fontWeight: '900',
    color: '#5B63F8',
  },
  mobilelink:{
    fontFamily: 'Muli, sans-serif',
    textDecoration : 'none',
    color: theme.palette.common.black,
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
  avatar: {
    margin: `-${theme.spacing(1)}px`,
    width: `${theme.spacing(4)}px !important`,
    height: `${theme.spacing(4)}px !important`,
  },
}));

const Topbar = ({userInfo, loggedIn})=> {
  const classes = useStyles();

  const [openLoginModal, setOpenLoginModal] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleLoginModalOpen = () => {
    setOpenLoginModal(true);
  };

  const handleLoginModalClose = () => {
    setOpenLoginModal(false);
  };

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
      onClose={handleMobileMenuClose}
      open={isMobileMenuOpen}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MenuItem>
        <RouterLink
          className={classes.mobilelink}
          to="/Home"
        >
          Home
        </RouterLink>
      </MenuItem>
      <MenuItem>
        <RouterLink
          className={classes.mobilelink}
          to="/About-us"
        >
          About
        </RouterLink>
      </MenuItem>
      <MenuItem>
        <RouterLink
          className={classes.mobilelink}
          to="/Contact"
        >
          Contact
        </RouterLink>
      </MenuItem>
      <MenuItem>
        <RouterLink
          className={classes.mobilelink}
          onClick = {
            () => {
              window.open('https://forms.gle/H4GKcg6No9NDouSN6', '_blank');
            }
          }
        >
          Community
        </RouterLink>
      </MenuItem>
    </Menu>
  );

  const renderLoginModal = (
    <LoginModal
      onClose={handleLoginModalClose}
      open={openLoginModal}
    />
  );

  return (
    <div className={classes.aflog_navbar}>
      <AppBar
        className={classes.appbar_custom}
        position="static"
      >
        <Toolbar>
          <RouterLink
            className={classes.logo}
            to="/Home"
          >
            <img
              alt="Logo"
              src="/images/Header/aflog_logo_white.svg"
            />
          </RouterLink>
          <div className={classes.actions}>
            <IconButton
              aria-label="app store button"
              className={classes.app_store}
              color="inherit"
              edge="start"
              onClick = {
                () => {
                  window.open('https://play.google.com/store/apps/details?id=in.aflog.app', '_blank');
                }
              }
            >
              <img
                alt=""
                src="/images/Header/play_store_banner.svg"
              />
            </IconButton>
            <IconButton
              aria-label="Google play button"
              className={classes.google_play}
              color="inherit"
              edge="start"
              onClick = {
                () => {
                  window.open('https://apps.apple.com/in/app/aflog/id1452031355', '_blank');
                }
              }
            >
              <img
                alt=""
                src="/images/Header/app_store_banner.svg"
              />
            </IconButton>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <NavLink
              activeClassName={classes.linkActive}
              className={classes.link}
              to="/Home"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName={classes.linkActive}
              className={classes.link}
              to="/Collaborate"
            >
              Collaborate
            </NavLink>
            <NavLink
              activeClassName={classes.linkActive}
              className={classes.link}
              to="/About-us"
            >
              About
            </NavLink>
            <NavLink
              activeClassName={classes.linkActive}
              className={classes.link}
              to="/Contact"
            >
              Contact
            </NavLink>
            <NavLink
              activeClassName={classes.linkActive}
              className={classes.link}
              onClick = {
                () => {
                  window.open('https://forms.gle/H4GKcg6No9NDouSN6', '_blank');
                }
              }
            >
              Community
            </NavLink>
            {
              loggedIn ? (
                <>
                  <NavLink
                    activeClassName={classes.linkActive}
                    className={classes.link}
                  >
                    <i className="fas fa-bell" />
                  </NavLink>
                  <NavLink
                    activeClassName={classes.linkActive}
                    className={classes.link}
                    to="/Profile"
                  >
                    <Avatar
                      alt={userInfo.name}
                      className={classes.avatar}
                      src={userInfo.image}
                    />
                  </NavLink>
                </>
              ) : (
                <NavLink
                  activeClassName={classes.linkActive}
                  className={classes.link}
                  onClick={handleLoginModalOpen}
                >
                  Sign in
                </NavLink>
              )
            }
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              aria-label="show more"
              color="inherit"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderLoginModal}
    </div>
  );
}

const mapStateToProps = state => ({
  userInfo: state.authState.user,
  loggedIn: state.authState.loggedIn,
});

export default connect(mapStateToProps)(withRouter(Topbar));
