import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: 300,
    backgroundColor: '#222222',
    marginLeft: '20px',
    border: '1px solid #444444',
    height : 40,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    }
  },
  input: {
    color: '#fbfbff',
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  inner:{
    '&::placeholder':{
      fontSize: '12px'
    }
  },
  iconButton: {
    padding: 10,
    background: '#000',
    borderRadius: 3,
    fontSize : '14px',
    color: theme.palette.white,
    height:'100%'
  },
}));

export default function AflogInput() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        placeholder="Email Address"
        inputProps={{ 'aria-label': 'email address', className: classes.inner }}
        className={classes.input}
      />
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        <i className="fas fa-paper-plane"></i>
      </IconButton>
    </Paper>
  );
}
