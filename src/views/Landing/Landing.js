import React, { useState, useEffect, Fragment, useRef, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { CircularProgress, Typography, Grid, Button } from '@material-ui/core';
import Masonry from 'react-masonry-css';
import { getAllAflogs, getAflogsByCategory, clearAflog } from '../../redux/actions/aflog';
import {
  AflogLandingOverlay,
  AflogCardSwap,
  AflogCarousal,
  AflogCategoryTags,
  AflogCard,
  AflogModal
} from '../../components';
import { carouselSlidesData } from '../../utils/'
import debounce from 'lodash.debounce';
import BackToTopButton from '../components/BackToTopButton';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  flexMasonry: {
    display: '-webkit-box',
    display: '-ms-flexbox',
    display: 'flex',
    width: 'auto',
    background: theme.palette.background.light,
    minHeight : 400
  },
  flexMasonryColumn: {
    backgroundClip: 'padding-box'
  },
  button: {
    ...theme.typography.button,
    textTransform: 'uppercase',
    width: 200,
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center'
  },
  paper: {
    position: 'absolute',
    // width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  loader:{
    textAlign :'center'
  }
}));

const Landing = ({
  location,
  error,
  hasMore,
  apiLoading,
  Aflogs,
  getAllAflogs: getAllAflogsDispatcher,
  getAflogsByCategory: getAflogsByCategoryDispatcher,
  clearAflog: clearAflogDispatcher
}) => {

  const classes = useStyles();

  const [category, setCategory] = useState(0);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    category === 0 ? getAllAflogsDispatcher(page) :
      getAflogsByCategoryDispatcher(page, category);

  }, [page, category]);

  window.onscroll = debounce(() => {
    if (error || apiLoading || !hasMore) return;

    // Checks that the page has scrolled to the bottom
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      setPage(page + 1);
    }
  }, 100);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  return (

    <div className={classes.root}>
      <BackToTopButton />
      <AflogModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
      >
        <AflogCardSwap
          selected={selectedIndex}
          slides={Aflogs}
        />
      </AflogModal>
      <AflogLandingOverlay />
      <AflogCarousal slides={carouselSlidesData} />
      <AflogCategoryTags
        clear={clearAflogDispatcher}
        get={getAflogsByCategoryDispatcher}
        getAll={getAllAflogsDispatcher}
        page={page}
        path={location.pathname}
        selected={category}
        setCat={setCategory}
        setPage={setPage}
      />
      <Masonry
        breakpointCols={{
          default: 4,
          1100: 3,
          700: 2,
          500: 1
        }}
        className={classes.flexMasonry}
        columnClassName={classes.flexMasonryColumn}
      >
        {
          Aflogs.map((item, index) => (
            <Grid
              item
              key={index}
              onClick={() => {
                setSelectedIndex(index);
                handleOpen();
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
      {apiLoading &&
        <div className={classes.loader}><CircularProgress /></div>
      }
      {!hasMore &&
        <div>You did it! You reached the end!</div>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.aflogState.error,
  hasMore: state.aflogState.hasMore,
  apiLoading: state.appState.apiLoading,
  Aflogs: state.aflogState.Aflogs,
});

export default connect(
  mapStateToProps,
  { getAllAflogs, getAflogsByCategory, clearAflog }
)(Landing);
