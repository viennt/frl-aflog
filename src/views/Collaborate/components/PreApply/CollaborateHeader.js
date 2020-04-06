import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
  roots: {
    backgroundColor: theme.palette.common.black,
    padding: theme.spacing(6, 2, 6, 2),
  },
  header: {
    fontSize: '42px',
    fontWeight: 900,
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2)
  },
  description: {
    fontSize: '18px',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2)
  },
  applyButton: {
    fontSize: '14px',
    width: theme.spacing(14),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.text.primary,
    border: 'none',
    borderRadius: '8px',
    padding: theme.spacing(1, 2)
  },
  image: {
    width: '80%'
  },
}));

const CollaborateHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.roots} >
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
          <Hidden smUp>
            <Grid
              container
              item
              sm={5}
            >
              <img
                alt={'/images/collaborate-header.png'}
                className={classes.image}
                src={'/images/collaborate-header.png'}
              />
            </Grid>
          </Hidden>

          <Grid
            container
            direction="column"
            item
            justify="center"
            sm={7}
            xs={12}
          >
            <div className={classes.header}>Introducing Collaborate!</div>
            <div className={classes.description}>An opportunity for content creators to partner up with their
favourite brands and engage in brand campaigns! </div>
            <button className={classes.applyButton}>Apply now!</button>
          </Grid>

          <Hidden xsDown>
            <Grid
              container
              item
              justify="center"
              sm={5}
            >
              <img
                alt={'/images/collaborate-header.png'}
                className={classes.image}
                src={'/images/collaborate-header.png'}
              />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  )
};

export default CollaborateHeader;
