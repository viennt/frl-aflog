import React from 'react';
import { makeStyles } from '@material-ui/styles';
import history from '../../../../utils/historyRoute';

const useStyles = makeStyles(theme => ({
  roots: {
    display: 'block',
    width: '100%',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    borderColor: theme.palette.text.primary,
    borderRadius: '8px',
    fontWeight: 900,
    padding: theme.spacing(1),
    cursor: 'pointer'
  },
}));

const BackToProfile = () => {
  const classes = useStyles();

  return (
    <button
      className={classes.roots}
      onClick={() =>  history.push('/Profile')}
    >
      Back to Profile
    </button>
  )
};

export default BackToProfile;
