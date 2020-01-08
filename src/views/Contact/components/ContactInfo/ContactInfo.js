import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
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
    display: "inline-block",
    verticalAlign: "middle",
    marginLeft: 5,
    color: "#12aad8"
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
  mobile:{
    [theme.breakpoints.down('xs')]:{
      marginTop : 70
    }
  }
}));

const ContactInfo = () => {
  const classes = useStyles();
  const [formState, setFormState] = useState({
    values: {}
  });

  return (
    <div className={classes.roots}>
      <Grid
        container
        justify={'center'}
      >
        <Grid
          item
          container
          justify={'center'}
          xs={12}
          md={8}
        >
          <Grid
            item
            xs={12}
            sm={6}
          >
            <div className="pr5">
              <Typography component='h3' className={clsx("mb3", classes.heading)}>
                Get in touch
            </Typography>
              <Typography component={'p'} className={clsx("mb3", classes.para)}>
                Unlike your crush, we’re always available. Call, email or slide into our
                DMs and we’ll make sure we don’t leave you on
              {/* <i className"fas fa-check-double"></i> */}
                <DoneAllIcon className={classes.done} />
              </Typography>
              <div className={classes.group}>
                <i className="fas fa-mobile icons"></i>
                <Typography className={classes.label} >
                  +91 96203 36373
              </Typography>
              </div>
              <div className={classes.group}>
                {/* <i className"fas fa-envelope-open-text"></i> */}
                <i className="fas fa-envelope-open icons"></i>
                <Typography className={classes.label} >
                  info@aflog.in
              </Typography>
              </div>
              <div className={classes.group}>
                <i className="fas fa-location-arrow icons"></i>
                <Typography className={classes.label} >
                  #1936, 5th Cross, 20th Main road, J.P.Nagar 2nd Phase,
                  Bangalore, Karnataka, 560078
              </Typography>
              </div>

              <div className={classes.flex}>
                <Avatar className={clsx(classes.small, classes.social)}>
                  <i class="fab fa-facebook-f fb "></i>
                </Avatar>
                <Avatar className={clsx(classes.small, classes.social)}>
                  <i class="fab fa-instagram insta"></i>
                </Avatar>
                <Avatar className={clsx(classes.small, classes.social)}>
                  <i class="fab fa-linkedin-in linkedIn"></i>
                </Avatar>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <div className={clsx("pr5", classes.mobile)}>
              <Typography component='h3' className={clsx("mb3", classes.heading)}>
                Send a message
            </Typography>
              <Typography component={'p'} className={clsx("mb3", classes.para)}>
                This used to take a pigeon and a whole lotta patience back in the day.
                Let’s all be grateful we’ve grown out of that.
            </Typography>
              <form
                className={classes.form}
                onSubmit={""}
              >
                <TextField
                  className={classes.textField}
                  label="Name"
                  name="name"
                  value={formState.values.name}
                />
                <TextField
                  className={classes.textField}
                  label="Email"
                  name="email"
                  defaultValue="rohitshroff@aol.com"
                  value={formState.values.email}
                />
                <TextField
                  id="textarea"
                  label="Message"
                  rows="3"
                  multiline
                />
                <div className="mb3" />
                <Button
                  className={classes.button}
                  type="submit"
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

export default ContactInfo;
