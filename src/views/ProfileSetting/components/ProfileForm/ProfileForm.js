import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Avatar, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { apiLoading, apiSuccess, apiError } from '../../../../redux/actions/app';
import { setAlert } from '../../../../redux/actions/alert';
import { rootURL } from '../../../../utils/constants/apiUrl';
import validate from 'validate.js';
import axios from 'axios';

const schema = {
  phone_number: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  full_name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  user_name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  bio: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 80
    }
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 32
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  confirm_password: {
    presence: { allowEmpty: false, message: 'is required' },
    equality: 'password',
    length: {
      maximum: 32
    }
  },
};

const useStyles = makeStyles(theme => ({
  roots: {
    '& .MuiTextField-root': {
      width: '100% !important'
    },
    '& .MuiInputBase-multiline': {
      width: '100% !important'
    },
    '& .MuiOutlinedInput-input': {
      borderColor: '#999999',
      borderRadius: '8px',
      padding: '12.5px 14px'
    },
    '& .MuiOutlinedInput-multiline': {
      borderColor: '#999999',
      borderRadius: '8px',
      padding: '0 !important'
    },
    display: 'flex',
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  settingText: {
    color: theme.palette.text.primary,
    fontSize: '24px',
    fontWeight: 'bold',
    paddingLeft: theme.spacing(1),
    color: '#333333'
  },
  noteText: {
    fontSize: '13px',
    color: '#333333',
    paddingLeft: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  avatar: {
    width: `${theme.spacing(15)}px !important`,
    height: `${theme.spacing(15)}px !important`,
    margin: 'auto'
  },
  gridContainer: {
    paddingTop: theme.spacing(3)
  },
  uploadBtn: {
    height: '44px',
    width: '140px',
    backgroundColor: '#5D65EE',
    borderRadius: '5px',
    cursor: 'pointer',
    color: '#FFFFFF',
    fontWeight: 'bold',
    display: 'block',
    borderColor: 'transparent',
    margin: 'auto'
  },
  labelText: {
    paddingLeft: theme.spacing(2),
    fontWeight: 'bold',
    fontSize: '13px',
    color: '#333333'
  },
  fieldsPassword: {
    paddingRight: '10px'
  },
  fieldsPasswordConfirm: {
    paddingLeft: '10px'
  }
}));

const Setting = ({
  error,
  hasMore,
  isApiLoading,
  userInfo,
  authToken
}) => {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formState.isValid) {
      console.log(formState);
    }
  }

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState]);

  return (
    <div className={classes.roots}>
      <Grid
        container
        justify={'center'}
      >

        <Grid
          container
          item
          justify={'center'}
          xs={12}
        >
          <Grid
            item
            xs={12}
          >
            <div className={classes.settingText}>Edit Profile</div>
            <div className={classes.noteText}>One liner over here something to do with profile settings.</div>
          </Grid>
          <Grid
            className={classes.gridContainer}
            container
            item
            xs={12}
          >
            <Grid
              item
              xs={6}
            >
              <Avatar
                alt={userInfo.name}
                className={classes.avatar}
                src={userInfo.image}
              />
            </Grid>
            <Grid
              item
              xs={6}
            >
              <button className={classes.uploadBtn} >Upload now</button>
            </Grid>
          </Grid>
          <Grid
            className={classes.gridContainer}
            item
            xs={12}
          >
            <div className={classes.labelText}>Full name</div>
            <TextField
              className={classes.fields}
              error={hasError('full_name')}
              helperText={
                hasError('full_name') ? formState.errors.full_name[0] : null
              }
              name='full_name'
              onChange={handleChange}
              size="small"
              value={formState.values.full_name || ''}
              variant="outlined"
            />
          </Grid>
          <Grid
            className={classes.gridContainer}
            item
            xs={12}
          >
            <div className={classes.labelText}>User name</div>
            <TextField
              className={classes.fields}
              error={hasError('user_name')}
              helperText={
                hasError('user_name') ? formState.errors.user_name[0] : null
              }
              name='user_name'
              onChange={handleChange}
              size="small"
              value={formState.values.user_name || ''}
              variant="outlined"
            />
          </Grid>
          <Grid
            className={classes.gridContainer}
            item
            xs={12}
          >
            <div className={classes.labelText}>Bio</div>
            <TextField
              className={classes.fields}
              error={hasError('bio')}
              helperText={
                hasError('bio') ? formState.errors.bio[0] : null
              }
              name='bio'
              onChange={handleChange}
              size="small"
              value={formState.values.bio || ''}
              variant="outlined"
              multiline
              rows={3}
            />
          </Grid>
          <Grid
            className={classes.gridContainer}
            item
            xs={12}
          >
            <div className={classes.labelText}>Email</div>
            <TextField
              classes={classes.fieldsPassword}
              error={hasError('email')}
              helperText={
                hasError('email') ? formState.errors.email[0] : null
              }
              name='email'
              onChange={handleChange}
              size="small"
              value={formState.values.email || ''}
              variant="outlined"
            />
          </Grid>
          <Grid
            className={classes.gridContainer}
            container
            item
            xs={12}
          >
            <Grid
              item
              xs={6}
              className={classes.fieldsPassword}
            >
              <div className={classes.labelText}>Password</div>
              <TextField
                type='password'
                error={hasError('password')}
                helperText={
                  hasError('password') ? formState.errors.password[0] : null
                }
                name='password'
                onChange={handleChange}
                size="small"
                value={formState.values.password || ''}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              xs={6}
              className={classes.fieldsPasswordConfirm}
            >
              <div className={classes.labelText}>Confirm password</div>
              <TextField
                type='password'
                error={hasError('confirm_password')}
                helperText={
                  hasError('confirm_password') ? formState.errors.confirm_password[0] : null
                }
                name='confirm_password'
                onChange={handleChange}
                size="small"
                value={formState.values.confirm_password || ''}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid
            className={classes.gridContainer}
            item
            xs={12}
          >
            <button className={classes.uploadBtn} onClick={(event) => handleSubmit(event)}>Save profile</button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};

const mapStateToProps = state => ({
  error: state.aflogState.error,
  hasMore: state.aflogState.hasMore,
  isApiLoading: state.appState.apiLoading,
  userInfo: state.authState.user,
  authToken: state.authState.authToken
});

export default connect(
  mapStateToProps,
  {
    apiLoading,
    apiSuccess,
    apiError,
    setAlert
  }
)(Setting);
