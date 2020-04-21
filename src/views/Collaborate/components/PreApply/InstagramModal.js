import React from 'react';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

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
    width: theme.spacing(50),
    maxWidth: '80vw',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid',
    borderColor: theme.palette.text.secondary,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  header: {
    width: '100%',
    fontSize: '14px',
    textAlign: 'left',
    margin: theme.spacing(1, 0),
  },
  image: {
    margin: 'auto',
    width: '40%',
  }
}));

const InstagramModal = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <Modal
      aria-describedby="simple-modal-description"
      aria-labelledby="simple-modal-title"
      className={classes.modal}
      onClose={onClose}
      open={open}
    >
      <div className={classes.roots}>
        <div className={classes.header}>Go to your Instagram profile > Click on <i className="fas fa-bars" /> > Insights</div>
        <div className={classes.header}>> Audience tab</div>
        <div className={classes.header}>> Scroll down till you see <strong>Top Locations, Age range & Gender</strong></div>
        <div className={classes.header}>> Take a screenshot</div>
        <Grid
          alignItens="center"
          container
          item
          justify="center"
          sm={12}
        >
          <img
            alt={'/images/instagram.png'}
            className={classes.image}
            src={'/images/instagram.png'}
          />
        </Grid>
      </div>
    </Modal>
  )
}

export default InstagramModal;
