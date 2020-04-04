import React, { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import validate from 'validate.js';

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
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
};

const LoginModal = ({ open, onClose }) => {
  const classes = useStyles();

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
    // TODO:
    console.log(formState.values.email);
    console.log(formState.values.password);
  }

  return (
    <Modal
      aria-describedby="simple-modal-description"
      aria-labelledby="simple-modal-title"
      className={classes.modal}
      onClose={onClose}
      open={open}
    >
      <div className={classes.roots}>
        <div className={classes.header}>Be a part of Collaborate!</div>
        <div className={classes.signUp}>New user? Create an Account</div>
        <button className={classes.google}>
          <i className="fab fa-google" />{' '}
          <span>Continue with Google</span>
        </button>
        <button className={classes.facebook}>
          <i className="fab fa-facebook" />{' '}
          <span>Continue with Facebook</span>
        </button>
        <div className={classes.or}>or</div>
        <form
          onSubmit={handleSubmit}
        >
          <TextField
            className={classes.fields}
            error={hasError('email')}
            helperText={
              hasError('email') ? formState.errors.email[0] : null
            }
            label="Email"
            name="email"
            onChange={handleChange}
            size="small"
            type="email"
            value={formState.values.email || ''}
            variant="outlined"
          />
          <TextField
            className={classes.fields}
            error={hasError('password')}
            helperText={
              hasError('password') ? formState.errors.password[0] : null
            }
            label="Password"
            name="password"
            onChange={handleChange}
            size="small"
            type="password"
            value={formState.values.password || ''}
            variant="outlined"
          />
          <button className={classes.login}>
            <span>Sign in</span>
          </button>
        </form>
      </div>
    </Modal>
  )
}

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& *:not(i)': {
      fontFamily: 'Muli, sans-serif !important'
    },
  },
  roots: {
    position: 'absolute',
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid',
    borderColor: theme.palette.text.secondary,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2, 6, 3, 6),
    textAlign: 'center'
  },
  header: {
    fontSize: '24px',
    fontWeight: 900,
    margin: theme.spacing(1, 0),
  },
  signUp: {
    fontSize: '13px',
    fontWeight: 900,
    margin: theme.spacing(1, 0, 2, 0),
  },
  google: {
    width: '100%',
    fontSize: '14px',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    borderWidth: '2px',
    borderColor: '#EA4334',
    borderRadius: '8px',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1.5, 4, 1.5, 4),
    cursor: 'pointer',
    '& i': {
      color: '#EA4334',
      fontSize: '18px',
      marginRight: theme.spacing(1),
    },
    '& span': {
      verticalAlign: 'top',
    }
  },
  facebook: {
    width: '100%',
    fontSize: '14px',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    borderWidth: '2px',
    borderColor: '#295DC9',
    borderRadius: '8px',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1.5, 4, 1.5, 4),
    cursor: 'pointer',
    '& i': {
      color: '#295DC9',
      fontSize: '18px',
      marginRight: theme.spacing(1),
    },
    '& span': {
      verticalAlign: 'top',
    }
  },
  or: {
    fontSize: '13px',
    fontWeight: 900,
    margin: theme.spacing(1, 0, 1, 0),
  },
  fields: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  login: {
    width: '100%',
    fontSize: '14px',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    borderWidth: '2px',
    borderColor: theme.palette.text.dark,
    borderRadius: '8px',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1.5, 4, 1.5, 4),
    cursor: 'pointer',
    '& span': {
      verticalAlign: 'top',
    }
  },
}));

export default LoginModal;
