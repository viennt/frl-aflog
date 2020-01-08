import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/styles';
import { compose } from "redux";
import { Topbar } from '../components';
import { Footer } from '../components';
import { Alert } from '../../components';

const useStyles = makeStyles(theme => ({
  aflog_root: {
    height: '100%',
    position: 'relative'
  },
  content: {
    height: '100%'
  },
  hide: {
    display: 'none'
  },
  overLay: {
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0
  },
}));

const Main = ({ children }) => {
  const classes = useStyles();  
  return (
    <div className={classes.aflog_root}>
      <Topbar />
      <main className={classes.content}>
        <Alert />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default compose(
  connect(null, {}),
  withRouter
)(Main);
