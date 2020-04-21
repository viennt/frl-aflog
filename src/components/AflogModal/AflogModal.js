import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
    '& .MuiBackdrop-root':{
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
    }
  },
  paper: {
    backgroundColor: 'transparent',
    overflowY : 'scroll',
    width: '800px',
    maxWidth: '80vh',
    height: '80vh'
  },

}));

export default function AflogModal({
  open,
  handleClose,
  handleOpen,
  children
}) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-describedby="transition-modal-description"
        aria-labelledby="transition-modal-title"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        className={classes.modal}
        closeAfterTransition
        onClose={handleClose}
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
