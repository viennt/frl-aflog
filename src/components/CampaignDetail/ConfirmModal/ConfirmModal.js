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
    backgroundColor: '#FFFFFF',
    overflowY : 'scroll',
    width: '300px',
    height: '140px',
    borderRadius: 10,
    overflowY: 'hidden',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '16px'
  },
  buttons: {
    marginTop: '1.5em'
  },
  note: {
    color: '#666666',
    fontSize: '14px'
  },
  cancel: {
    color: '#666666',
    marginRight: '10px',
    cursor: 'pointer'
  },
  confirm: {
    color: '#555DF0',
    marginLeft: '10px',
    cursor: 'pointer'
  }
}));

const ConfirmModal = ({ open, onClose, handleConfirmButton }) => {
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
            <p>Are you sure you want to apply?</p>
            <p className={classes.note} >This cannot be undone.</p>
            <div className={classes.buttons}>
              <a className={classes.cancel} onClick={onClose}>Cancel</a>
              <a className={classes.confirm} onClick={handleConfirmButton}>Confirm</a>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ConfirmModal;
