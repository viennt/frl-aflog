import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import BackToTopButton from '../components/BackToTopButton';
import { UserInfo, UserAflogs, Logout } from './components';

const useStyles = makeStyles(theme => ({
  profile_root: {
    padding: theme.spacing(4),
    boxSizing: 'borderBox',
    backgroundColor: '#FAFAFA',
    '& *:not(i)': {
      fontFamily: 'Muli, sans-serif !important'
    },

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 170,
      '& .MuiInput-input': {
        color: theme.palette.text.dark
      },
      '& .MuiInputLabel-root': {
        color: theme.palette.text.light,
        fontSize: 14,
        lineHeight: '18px',
        fontWeight: 'normal'
      },
      '& .MuiInputBase-multiline': {
        width: '200%',
      }
    },
  }
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.profile_root} >
      <BackToTopButton />
      <Grid
        container
        justify={'center'}
      >
        <Grid
          container
          item
          justify={'center'}
          md={8}
          xs={12}
        >
          <Grid
            item
            sm={4}
            xs={12}
          >
            <UserInfo/>
            <Logout />
          </Grid>
          <Grid
            item
            sm={8}
            xs={12}
          >
            <UserAflogs />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
