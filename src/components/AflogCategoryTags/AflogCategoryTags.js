import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Divider
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0'
  },
  divider:{
    marginTop: 1
  },
  tags: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: '24px',
    cursor:'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    color: theme.palette.text.light,
    padding: '4px 6px',
    borderRadius: 6,
    justifyContent: 'center',
    width: 55,
    zIndex: 5,
    marginRight: '10px !important',
    transition: 'background 0.2s ease-in-out',
    '&:hover': {
      color: theme.palette.primary.main,
      transition: 'background 0.2s ease-in-out'
    },
  },
  active: {
    background: theme.palette.primary.light,
    color: theme.palette.primary.main,
  }
}));


const AflogCategoryTags = ({ selected, set, get, getAll, page }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Divider  className={classes.divider}/>
      <div className={classes.root}>
        <Typography
          component="p"
          className={clsx({
            [classes.tags]: true,
            [classes.active]: selected === '0'
          })}
          onClick={() => {
            set('0');
            getAll(page)
          }}
        >
          All
      </Typography>
        <Typography
          variant="body2"
          component="p"
          className={clsx({
            [classes.tags]: true,
            [classes.active]: selected == '6'
          })}
          onClick={() => {
            set('6')
            get(page, '6')
          }}
        >
          Food
      </Typography>
        <Typography
          variant="body2"
          component="p"
          className={clsx({
            [classes.tags]: true,
            [classes.active]: selected == '4'
          })}
          onClick={() => {
            set('4')
            get(page, '4')
          }}
        >
          Fashion
      </Typography>
        <Typography
          variant="body2"
          component="p"
          className={clsx({
            [classes.tags]: true,
            [classes.active]: selected == '1'
          })}
          onClick={() => {
            set('1')
            get(page, '1')
          }}
        >
          Travel
      </Typography>
        <Typography
          variant="body2"
          component="p"
          className={clsx({
            [classes.tags]: true,
            [classes.active]: selected == '5'
          })}
          onClick={() => {
            set('5')
            get(page, '5')
          }}
        >
          Books
      </Typography>
        <Typography
          variant="body2"
          component="p"
          className={clsx({
            [classes.tags]: true,
            [classes.active]: selected == '3'
          })}
          onClick={() => {
            set('3')
            get(page, '3')
          }}
        >
          Wacky
      </Typography>
      </div>
    </Fragment>
  );
};

export default AflogCategoryTags
