import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import Masonry from 'react-masonry-css';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import TabPanel from './TabPanel';
import { AflogCard } from '../../../../components';
import { AflogCardSwap, AflogModal } from '../../../../components';
import { getAllAflogs, getAflogsByCategory, clearAflog } from '../../../../redux/actions/aflog';


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
    minHeight : 400
  },
  flexMasonryColumn: {
    backgroundClip: 'padding-box'
  },
}));

const ContactInfo = ({
  error,
  hasMore,
  apiLoading,
  Aflogs,
  getAllAflogs: getAllAflogsDispatcher
}) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  useEffect(() => {
    getAllAflogsDispatcher(page)
  }, [page]);

  window.onscroll = debounce(() => {
    if (error || apiLoading || !hasMore) return;

    // Checks that the page has scrolled to the bottom
    if (
      window.innerHeight + document.documentElement.scrollTop
      >= 0.9*document.documentElement.offsetHeight
    ) {
      setPage(page + 1);
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
          slides={Aflogs}
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
          {
            Aflogs.map((item, index) => (
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
          {
            Aflogs.map((item, index) => (
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
    </div>
  )
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
)(ContactInfo);
