import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
// import { setAlert } from '../../../../redux/actions/alert';
import { logout } from '../../../../redux/actions/auth';

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
    cursor: 'pointer'
  },
}));

const Logout = ({
  authToken,
  logout: logoutDispatcher
}) => {
  const classes = useStyles();

  return (
    <button
      className={classes.roots}
      onClick={() => logoutDispatcher(authToken) }
    >
      Log out
    </button>
  )
};

const mapStateToProps = state => ({
  authToken: state.authState.authToken
});

export default connect(mapStateToProps, { logout })(Logout);
