import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { ImagePicker } from 'react-file-picker'

import LoginModal from '../../../layouts/components/Topbar/LoginModal';

const schema = {
  phoneNumber: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  instagramUsername: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  location: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  file: {
    presence: { allowEmpty: false, message: 'is required' },
  },
};

const useStyles = makeStyles(theme => ({
  roots: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2, 2),
  },
  header: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 900,
    padding: theme.spacing(1),
  },
  description: {
    textAlign: 'center',
    fontSize: '14px',
    padding: theme.spacing(1),
  },
  buttonGroup: {
    padding: theme.spacing(2),
  },
  signInButton: {
    fontSize: '14px',
    width: theme.spacing(14),
    color: theme.palette.common.black,
    fontWeight: 700,
    backgroundColor: theme.palette.text.white,
    textDecoration: 'underline',
    border: 'none',
    borderRadius: '8px',
    padding: theme.spacing(1, 2),
    cursor: 'pointer'
  },
  signUpButton: {
    fontSize: '14px',
    width: theme.spacing(14),
    color: theme.palette.common.white,
    fontWeight: 700,
    backgroundColor: theme.palette.text.primary,
    border: 'none',
    borderRadius: '8px',
    padding: theme.spacing(1, 2),
    cursor: 'pointer'
  },
  quote: {
    textAlign: 'center',
    margin: theme.spacing(8, 2, 4, 2),
    '& i': {
      fontSize: '21px',
      margin: theme.spacing(2),
    },
    '& span': {
      fontSize: '14px',
      padding: theme.spacing(0.5, 4),
      color: theme.palette.common.white,
      backgroundColor: theme.palette.common.black,
    }
  },
  fields: {
    width: '100%',
    margin: `${theme.spacing(2)}px!important`,
  },
  upload: {
    width: '100%',
    margin: `${theme.spacing(2)}px!important`,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#c4c4c4',
    borderRadius: '4px',
    cursor: 'pointer',
    '& div': {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  submitButton: {
    fontSize: '14px',
    margin: `${theme.spacing(2)}px!important`,
    width: theme.spacing(14),
    color: theme.palette.common.white,
    fontWeight: 700,
    backgroundColor: theme.palette.text.primary,
    border: 'none',
    borderRadius: '8px',
    padding: theme.spacing(1, 2),
    cursor: 'pointer'
  }
}));

const ApplyCollaborate = ({ loggedIn }) => {
  const classes = useStyles();

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleLoginModalOpen = () => {
    setOpenLoginModal(true);
  };

  const handleLoginModalClose = () => {
    setOpenLoginModal(false);
  };

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

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formState.values);
  }

  const renderSignUp = (
    <>
    <Grid
      className={classes.buttonGroup}
      container
      item
      justify="center"
      sm={12}
      xs={12}
    >
      <button
        className={classes.signInButton}
        onClick={handleLoginModalOpen}
      >Sign In</button>
      <button
        className={classes.signUpButton}
        onClick={handleLoginModalOpen}
      >Sign Up</button>
    </Grid>
    <LoginModal
      onClose={handleLoginModalClose}
      open={openLoginModal}
    />
    </>
  );

  const renderApplyForm = (
    <>
      <div className={classes.description}>Unfortunately we can’t accept everyone into Collaborate at the moment. Drop in your details with us and we’ll get back to you as soon as we can!</div>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          justify="center"
        >
          <Grid
            container
            item
            justify="center"
            md={8}
            xs={12}
          >
            <Grid
              container
              item
              justify="center"
              sm={6}
              xs={12}
            >
              <TextField
                className={classes.fields}
                error={hasError('phoneNumber')}
                helperText={
                  hasError('phoneNumber') ? formState.errors.phoneNumber[0] : null
                }
                label="Phone Number"
                name="phoneNumber"
                onChange={handleChange}
                size="small"
                type="email"
                value={formState.values.phoneNumber || ''}
                variant="outlined"
              />
            </Grid>
            <Grid
              container
              item
              justify="center"
              sm={6}
              xs={12}
            >
              <TextField
                className={classes.fields}
                error={hasError('instagramUsername')}
                helperText={
                  hasError('instagramUsername') ? formState.errors.instagramUsername[0] : null
                }
                label="Instagram Username"
                name="instagramUsername"
                onChange={handleChange}
                size="small"
                type="password"
                value={formState.values.instagramUsername || ''}
                variant="outlined"
              />
            </Grid>
            <Grid
              container
              item
              justify="center"
              sm={6}
              xs={12}
            >
              <div className={classes.upload}>
                <ImagePicker
                  dims={{minWidth: 100, minHeight: 100}}
                  extensions={['jpg', 'jpeg', 'png']}
                  onChange={base64 => {console.log(base64)}}
                  onError={errMsg => {console.log(errMsg)}}
                >
                  <div>Click to upload image</div>
                </ImagePicker>
              </div>
            </Grid>
            <Grid
              container
              item
              justify="flex-start"
              sm={6}
              xs={12}
            >
              <TextField
                className={classes.fields}
                error={hasError('location')}
                helperText={
                  hasError('location') ? formState.errors.location[0] : null
                }
                label="Location"
                name="location"
                onChange={handleChange}
                size="small"
                type="password"
                value={formState.values.location || ''}
                variant="outlined"
              />
              <button
                className={classes.submitButton}
              >Submit</button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  )

  return (
    <div className={classes.roots}>
      <div className={classes.header}>Apply to be part of Collaborate!</div>
      {!loggedIn ? renderSignUp : renderApplyForm}
      <div className={classes.quote}>
        <i className="fas fa-quote-left" /><br/>
        <span>Influencer marketing, an industry worth about $700 million in 2016, will top $10 billion by 2020.</span>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  loggedIn: state.authState.loggedIn,
});

export default connect(mapStateToProps)(ApplyCollaborate);
