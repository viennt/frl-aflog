import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Divider,
  CircularProgress
} from '@material-ui/core';
import { Slide } from 'material-auto-rotating-carousel';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { AflogDetail } from '../index';
const useStyles = makeStyles(theme => ({
  root: {
  },
  button: {
    display: 'none'
  },
  modal: {
    background: 'grey',
    '& .MuiBackdrop-root': {
    }
  }
}));

const AflogCardSwap = ({ setOpen, open, Aflogs, index, loading }) => {
  const classes = useStyles();
  console.log(Aflogs === []);
  return (
    <div className={classes.root}>
      {
        Aflogs === [] && Aflogs.length === 0 ?
          null :
          <AutoRotatingCarousel
            label='Get started'
            open={open}
            ButtonProps={{ className: classes.button }}
            onClose={() => setOpen(false)}
            onStart={() => setOpen(false)}
            style={{ position: 'absolute' }}
            containerStyle={{ background: 'green' }}
            ModalProps={{ className: classes.modal }}
            autoplay={false}
            landscape={true}
          >
            {
              Aflogs.map((item, index) => (
                <AflogDetail aflog={item} />
              ))
            }
          </AutoRotatingCarousel>
      }
    </div>
  );
};

export default AflogCardSwap;