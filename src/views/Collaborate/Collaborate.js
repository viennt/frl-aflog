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

const Collaborate = ({loggedIn}) => {
  const classes = useStyles();
  const appliedCollaborate = false;

  return (
    <div className={classes.root}>
      <BackToTopButton />
      {
        !appliedCollaborate ? (
          <>
            <CollaborateHeader />
            <AvailableCampaigns />
            <ApplyCollaborate />
          </>
        ) : null
      }
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.authState.loggedIn,
});

export default connect(mapStateToProps)(Collaborate);
