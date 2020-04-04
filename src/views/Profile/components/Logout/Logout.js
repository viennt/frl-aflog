import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { setAlert } from '../../../../redux/actions/alert';

const useStyles = makeStyles(theme => ({
  roots: {
    display: 'block',
    width: '100%',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    borderColor: theme.palette.text.primary,
    borderRadius: '8px',
    fontWeight: 900,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const Logout = () => {
  const classes = useStyles();

  return (
    <button className={classes.roots}>Log out</button>
  )
};

export default connect(null, { setAlert })(Logout);
