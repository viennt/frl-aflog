import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& *:not(i)': {
      fontFamily: 'Muli, sans-serif !important'
    },
  },
  paper: {
    backgroundColor: 'transparent',
    overflowY : 'scroll',
    width: '800px',
    maxWidth: '80vh',
    height: '80vh',
    '&:focus': {
      outline: 'none'
    }
  },
}));

const CampaignModal = ({ open, onClose, children }) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-describedby="simple-modal-description"
        aria-labelledby="simple-modal-title"
        className={classes.modal}
        onClose={onClose}
        open={open}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {children}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default CampaignModal;
