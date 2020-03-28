import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import { Topbar } from '../components';
import { Footer } from '../components';
import { Alert } from '../../components';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  content: {
    height: '100%'
  }
}));

const Minimal = props => {
  const { children } = props;
  const { location } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>
        <Alert />
        {children}
      </main>
      {location.pathname === '/Contact' ? null : <Footer />}
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default withRouter(Minimal);

