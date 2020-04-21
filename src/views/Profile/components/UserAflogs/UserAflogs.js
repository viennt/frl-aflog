import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import Masonry from 'react-masonry-css';
import { makeStyles } from '@material-ui/styles';
import { Grid, CircularProgress } from '@material-ui/core';

import { AflogCard } from '../../../../components';
import { AflogCardSwap, AflogModal } from '../../../../components';
import { apiLoading, apiSuccess, apiError } from '../../../../redux/actions/app';
import { setAlert } from '../../../../redux/actions/alert';
import { rootURL } from '../../../../utils/constants/apiUrl';
import TabPanel from './TabPanel';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  roots: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  tabs: {
    fontSize: '16px',
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'rows'
  },
  tab: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    fontWeight: 900,
    color: theme.palette.text.light,
    cursor: 'pointer'
  },
  tabActive: {
    color: theme.palette.text.dark,
  },
  flexMasonry: {
    display: '-webkit-box',
    display: '-ms-flexbox',
    display: 'flex',
    width: 'auto',
    background: theme.palette.background.light,
    minHeight : 400,
    textAlign: 'right'
  },
  flexMasonryColumn: {
    backgroundClip: 'padding-box'
  },
}));

const ContactInfo = ({
  authToken,
  user,
  error,
  hasMore,
  isApiLoading,
  setAlert: setAlertDispatcher,
  apiLoading: apiLoadingDispatcher,
  apiSuccess: apiSuccessDispatcher,
  apiError: apiErrorDispatcher,
}) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [aflogsPage, setAflogsPage] = useState(1);
  const [wishlistPage, setWishlistPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [aflogs, setAflogs] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const getAflogPostedByUser = async (userId, page) => {
    try {
      apiLoadingDispatcher();
      const res = await
      axios.get(`${rootURL}/aflogger/get-aflogs?id=${userId}&page=${page}`,
        {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }
      );

      if (res.data) {
        setAflogs(res.data);
        apiSuccessDispatcher();
      }

    } catch (err) {
      setAlertDispatcher(err.message, 'danger');
      apiErrorDispatcher();
    }
  };

  const getUserWishList = async (page) => {
    try {
      apiLoadingDispatcher();
      const res = await
      axios.get(`${rootURL}/wishlist/get-user-wishlist?page=${page}`,
        {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }
      );

      if (res.data) {
        setAflogs(res.data);
        apiSuccessDispatcher();
      }

    } catch (err) {
      setAlertDispatcher(err.message, 'danger');
      apiErrorDispatcher();
    }
  };

  useEffect(() => {
    if (value == 0) {
      getAflogPostedByUser(user.id, aflogsPage);
    } else {
      getUserWishList(wishlistPage);
    }
  }, [aflogsPage, wishlistPage, value]);

  window.onscroll = debounce(() => {
    if (error || isApiLoading || !hasMore) return;

    // Checks that the page has scrolled to the bottom
    if (
      window.innerHeight + document.documentElement.scrollTop
      >= 0.9*document.documentElement.offsetHeight
    ) {
      if (value == 0) {
        setAflogsPage(aflogsPage + 1);
      } else {
        setWishlistPage(wishlistPage + 1);
      }
    }
  }, 100);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.roots}>
      <AflogModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
      >
        <AflogCardSwap
          selected={selectedIndex}
          slides={aflogs}
        />
      </AflogModal>


      <div className={classes.tabs}>
        <div
          className={`${classes.tab} ${value === 0 ? classes.tabActive : ''}`}
          onClick={() => handleChange(0)}
        ><i className="fas fa-th-large" /> Aflogs</div>
        <div
          className={`${classes.tab} ${value === 1 ? classes.tabActive : ''}`}
          onClick={() => handleChange(1)}
        ><i className="fas fa-bookmark" /> Saved</div>
      </div>


      <TabPanel
        index={0}
        value={value}
      >
        <Masonry
          breakpointCols={{
            default: 2,
            1100: 2,
            700: 1,
            500: 1
          }}
          className={classes.flexMasonry}
          columnClassName={classes.flexMasonryColumn}
        >
          {isApiLoading &&
            <div className={classes.loader}><CircularProgress /></div>
          }
          {
            aflogs.map((item, index) => (
              <Grid
                item
                key={index}
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                <AflogCard
                  aflog={item}
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                />
              </Grid>
            ))
          }
        </Masonry>
      </TabPanel>
      <TabPanel
        index={1}
        value={value}
      >
        <Masonry
          breakpointCols={{
            default: 2,
            1100: 2,
            700: 1,
            500: 1
          }}
          className={classes.flexMasonry}
          columnClassName={classes.flexMasonryColumn}
        >
          {isApiLoading &&
            <div className={classes.loader}><CircularProgress /></div>
          }
          {
            aflogs.map((item, index) => (
              <Grid
                item
                key={index}
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                <AflogCard
                  aflog={item}
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                />
              </Grid>
            ))
          }
        </Masonry>
      </TabPanel>
      {(aflogs.length == 0) &&
        <div>You did it! You reached the end!</div>
      }
    </div>
  )
};

const mapStateToProps = state => ({
  error: state.aflogState.error,
  hasMore: state.aflogState.hasMore,
  isApiLoading: state.appState.apiLoading,
  // Aflogs: state.aflogState.Aflogs,
  user: state.authState.user,
  authToken: state.authState.authToken
});

export default connect(
  mapStateToProps,
  {
    // getAllAflogs,
    // getAflogsByCategory,
    // clearAflog,
    apiLoading,
    apiSuccess,
    apiError,
    setAlert
  }
)(ContactInfo);
