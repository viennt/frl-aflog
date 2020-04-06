import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

import BackToTopButton from '../components/BackToTopButton';
import { CollaborateHeader, AvailableCampaigns, ApplyCollaborate } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    '& *:not(i)': {
      fontFamily: 'Muli, sans-serif !important'
    },
  },
}));

const Collaborate = ({loggedIn, requestToken}) => {
  const classes = useStyles();
  const appliedCollaborate = !!requestToken;

  return (
    <div className={classes.root}>
      <BackToTopButton />
      {
        appliedCollaborate ? (
          null
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
