import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

import BackToTopButton from '../components/BackToTopButton';
import {
  CollaborateHeader,
  AvailableCampaigns,
  ApplyCollaborate,
  TypedCampaigns
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    '& *:not(i)': {
      fontFamily: 'Muli, sans-serif !important'
    },
  },
}));

const Collaborate = ({ requestToken }) => {
  const classes = useStyles();
  const appliedCollaborate = !!requestToken;

  return (
    <div className={classes.root}>
      <BackToTopButton />
      {
        appliedCollaborate ? (
          <TypedCampaigns />
        ) : (
          <>
            <CollaborateHeader />
            <AvailableCampaigns />
            <ApplyCollaborate />
          </>
        )
      }
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.authState.loggedIn,
  requestToken: state.authState.requestToken,
});

export default connect(mapStateToProps)(Collaborate);
