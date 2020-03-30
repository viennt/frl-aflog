import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import validate from 'validate.js';
import {
  Typography,
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import clsx from 'clsx';
import { emailContact } from '../../../../redux/actions/aflog';
import { setAlert } from '../../../../redux/actions/alert';

const schema = {
  name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  email: {
    presence: { allowEmpty: true, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  message: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 200
    }
  },

};

const useStyles = makeStyles(theme => ({
  roots: {
    padding: theme.spacing(4),
    boxSizing: 'borderBox',
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
  },
  button: {
    ...theme.typography.button,
    textTransform: 'capitalize',
    width: 100,
    fontSize: 14,
    marginTop: 20,
  },
  heading: {
    fontSize: '24px',
    fontWeight: 800,
    color: theme.palette.text.dark,
    lineHeight: '20px'
  },
  para: {
    fontSize: '13px',
    fontWeight: 'normal',
    color: theme.palette.text.secondary,
    lineHeight: '20px'
  },
  done: {
    fontSize: '18px',
    fontWeight: 900,
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: 5,
    color: '#12aad8'
  },
  group: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 20
  },
  label: {
    fontSize: '12px',
    fontWeight: 600,
    color: theme.palette.text.secondary,
    lineHeight: '20px'
  },
  flex: {
    display: 'flex',
    marginTop: '50px'
  },
  social: {
    background: '#fff',
    boxShadow: '0px 0px 8px -3px #000',
    marginRight: '20px'
  },
  mobile: {
    [theme.breakpoints.down('xs')]: {
      marginTop: 70
    }
  }
}));

const ContactInfo = ({
  setAlert
}) => {
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

  const sendFeedback = (templateId, variables)=> {
    window.emailjs.send(
      'gmail',  //service ID
      templateId,
      variables,
    ).then(res => {
      setAlert('We have received your email', 'success');
      setFormState({
        isValid: false,
        values: {},
        touched: {},
        errors: {}
      });
    }).catch(err => setAlert('Oops, something went wrong', 'danger'))
  }
  const handleSubmit = e => {
    e.preventDefault();
    const templateId = 'template_XfuM3x0K';
    sendFeedback(templateId, {
      message_html: formState.values.message,
      from_name: formState.values.name,
      to_email: formState.values.email
    })
  }

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;


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
          md={8}
          xs={12}
        >
          <Grid
            item
            sm={6}
            xs={12}
          >
            <div className="pr5">
              <Typography
                className={clsx('mb3', classes.heading)}
                component="h3"
              >
                Get in touch
              </Typography>
              <Typography
                className={clsx('mb3', classes.para)}
                component={'p'}
              >
                Unlike your crush, we’re always available. Call, email or slide into our
                DMs and we’ll make sure we don’t leave you on
                {/* <i className"fas fa-check-double"></i> */}
                <DoneAllIcon className={classes.done} />
              </Typography>
              <div className={classes.group}>
                <i className="fas fa-mobile icons" />
                <Typography className={classes.label} >
                  +91 96203 36373
                </Typography>
              </div>
              <div className={classes.group}>
                {/* <i className"fas fa-envelope-open-text"></i> */}
                <i className="fas fa-envelope-open icons" />
                <Typography className={classes.label} >
                  info@aflog.in
                </Typography>
              </div>
              <div className={classes.group}>
                <i className="fas fa-location-arrow icons" />
                <Typography className={classes.label} >
                  #1936, 5th Cross, 20th Main road, J.P.Nagar 2nd Phase,
                  Bangalore, Karnataka, 560078
                </Typography>
              </div>

              <div className={classes.flex}>
                <a
                  href="https://www.facebook.com/Afl0g"
                  style={{color: '#bdbdbd'}}
                  target="_blank"
                >
                  <Avatar className={clsx(classes.small, classes.social)}>
                    <i className="fab fa-facebook-f fb " />
                  </Avatar>
                </a>
                <a
                  href="https://twitter.com/aflog_in"
                  style={{color: '#bdbdbd'}}
                  target="_blank"
                >
                  <Avatar className={clsx(classes.small, classes.social)}>
                    <i className="fab fa-linkedin-in linkedIn" />
                  </Avatar>
                </a>
                <a
                  href="https://www.instagram.com/aflog.in/"
                  style={{color: '#bdbdbd'}}
                  target="_blank"
                >
                  <Avatar className={clsx(classes.small, classes.social)}>
                    <i className="fab fa-instagram insta" />
                  </Avatar>
                </a>
              </div>
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
          >
            <div className={clsx('pr5', classes.mobile)}>
              <Typography
                className={clsx('mb3', classes.heading)}
                component="h3"
              >
                Send a message
              </Typography>
              <Typography
                className={clsx('mb3', classes.para)}
                component={'p'}
              >
                This used to take a pigeon and a whole lotta patience back in the day.
                Let’s all be grateful we’ve grown out of that.
              </Typography>
              <form
                className={classes.form}
                onSubmit={handleSubmit}
              >
                <TextField
                  className={classes.textField}
                  error={hasError('name')}
                  helperText={
                    hasError('name') ? formState.errors.name[0] : null
                  }
                  label="Name"
                  name="name"
                  onChange={handleChange}
                  value={formState.values.name || ''}
                />
                <TextField
                  className={classes.textField}
                  error={hasError('email')}
                  helperText={
                    hasError('email') ? formState.errors.email[0] : null
                  }
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  value={formState.values.email || ''}
                />
                <TextField
                  error={hasError('message')}
                  helperText={
                    hasError('message') ? formState.errors.message[0] : null
                  }
                  id="textarea"
                  label="Message"
                  multiline
                  name="message"
                  onChange={handleChange}
                  rows="3"
                  value={formState.values.message || ''}
                />
                <div className="mb3" />
                <Button
                  className={classes.button}
                  disabled={!formState.isValid}
                  type="submit"
                  variant="contained"

                >
                  Submit
                </Button>

              </form>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};

export default connect(
  null,
  { setAlert }
)(ContactInfo);
