import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from "react-redux";
import { CircularProgress, Typography } from '@material-ui/core';
import { colors } from '@material-ui/core';

import { AflogCategoryTags } from '../../components';
import { AflogCard } from '../../components';
import { getAllAflogs, getAflogsByCategory } from "../../redux/actions/aflog";
import { AflogLandingOverlay } from '../../components';

import { AflogCarousal } from '../../components';
import { carouselSlidesData } from '../../utils/'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  grow: {
    height: '82vh'
  },
  flexMasonry: {
    display: 'flex',
    padding: '24px',
    boxOrient: 'vertical',
    boxDirection: 'normal',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxHeight: 2500,
    background: theme.palette.background.light,
  },
  masnoryItem: {
    width: 'auto',
    color: 'white',
  }
}));

const Landing = ({
  apiLoading,
  Aflogs,
  getAllAflogs: getAllAflogsDispatcher,
  getAflogsByCategory: getAflogsByCategoryDispatcher
}) => {

  const classes = useStyles();
  const [category, setCategory] = useState('0');
  const [page, setPage] = useState(2);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getAllAflogsDispatcher(page);
  }, [page])

  return (
    <div className={classes.root}>
      <AflogLandingOverlay />
      <AflogCarousal slides={carouselSlidesData} />      
      <AflogCategoryTags
        set={setCategory}
        selected={category}
        get={getAflogsByCategoryDispatcher}
        getAll={getAllAflogsDispatcher}
      />

      {
        apiLoading ?
          <div className={classes.root}>
            <CircularProgress />
          </div> :
          Aflogs !== null ?
            <div className={classes.flexMasonry}>
              {
                Aflogs.length > 0 ?
                  Aflogs.map((item, index) => (
                    <div key={index} className={classes.masnoryItem}>
                      <AflogCard aflog={item} />
                    </div>
                  )) :
                  <Fragment>
                    <Typography
                      className={classes.title}
                      gutterBottom
                      variant="h4"
                    >
                      No results found
          				      </Typography>
                  </Fragment>
              }
            </div> :
            null
      }
    </div>
  );
};

const mapStateToProps = state => ({
  apiLoading: state.appState.apiLoading,
  Aflogs: state.aflogState.Aflogs,
});

export default connect(
  mapStateToProps,
  { getAllAflogs, getAflogsByCategory }
)(Landing);
