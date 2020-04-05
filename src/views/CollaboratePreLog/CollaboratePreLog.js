import React from 'react';
import { makeStyles } from '@material-ui/styles';

import BackToTopButton from '../components/BackToTopButton';
import { CollaborateHeader, AvailableCampaigns } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
}));

const CollaboratePreLog = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BackToTopButton />
      <CollaborateHeader />
      <AvailableCampaigns />
    </div>
  );
};

export default CollaboratePreLog;
