import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  alert_success: {
    position: 'relative',
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    backgroundColor: '#d4edda',
  },
  text : {
    color: '#fff',
  },
  alert_danger:{
    position: 'relative',
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    color: '#721c24',
    backgroundColor: '#f8d7da',
  }
}));

const Alert = ({ alerts }) =>{ 
  const classes = useStyles();

  return alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div 
    key={alert.id} 
    className={`${alert.alertType === 'success' ? classes.alert_success : classes.alert_danger}`}>
    <Typography
        className={classes.text}
        variant="h4"
      >        
      {alert.msg}
      </Typography>
    </div>
  ));
}

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alertState
});

export default connect(mapStateToProps)(Alert);
