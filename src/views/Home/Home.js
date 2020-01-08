import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from "react-redux";
import { CircularProgress, Typography, Grid, Button } from '@material-ui/core';
import { AflogCategoryTags } from '../../components';
import { AflogCard } from '../../components';
import { getAllAflogs, setCategory, getAflogsByCategory } from "../../redux/actions/aflog";
import { AflogCarousal, AflogModal, AflogCardSwap } from '../../components';

import { carouselSlidesData } from '../../utils/';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative'
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
    // width: '100vw',
    overflowX: 'scroll',
    boxSizing: 'border-box',
    justifyContent: 'space-evenly',
  },
  masnoryItem: {
    width: 'auto',
    color: 'white',
  }
}));

const Home = ({
  apiLoading,
  Aflogs,
  getAllAflogs: getAllAflogsDispatcher,
  getAflogsByCategory: getAflogsByCategoryDispatcher
}) => {

  const classes = useStyles();

  const [category, setCategory] = useState('0');
  const [page, setPage] = useState(2);
  const [open, setOpen] = React.useState(false);
  const [selected, setselected] = React.useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getAllAflogsDispatcher(page);
  }, [page])

  return (
    <div className={classes.root}>
      <AflogCarousal slides={carouselSlidesData} />
      <AflogCardSwap
        setOpen={setOpen}
        open={open}
        Aflogs={Aflogs}
        index={selected}
        loading = {apiLoading}
      />
      <div className={classes.grow} />

      <AflogCategoryTags
        set={setCategory}
        selected={category}
        get={getAflogsByCategoryDispatcher}
        getAll={getAllAflogsDispatcher}
      />
      <Grid
        container
      >
        <Grid
          item
          xs={12}
        >
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
                        <div
                          key={index}
                          className={classes.masnoryItem}
                          onClick={() => {
                            setOpen(true);
                            setselected(index)
                          }}
                        >
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
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  apiLoading: state.appState.apiLoading,
  Aflogs: state.aflogState.Aflogs,
});

export default connect(
  mapStateToProps,
  { getAllAflogs, setCategory, getAflogsByCategory }
)(Home);
