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
  divider: {
    marginTop : 60
  },
  tags: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: '24px',
    cursor: 'pointer',
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


const AflogCategoryTags = ({ 
  selected, 
  setCat, 
  setPage, 
  get, 
  getAll, 
  page, 
  path,
  clear }) => {
  const classes = useStyles();

  return (
    <Fragment>
      {path === '/Home' ? null : <Divider className={classes.divider} />}
      <div className={classes.root}>
        <Typography
          component="p"
          className={clsx({
            [classes.tags]: true,
            [classes.active]: selected === 0
          })}
          onClick={() => {
            setCat(0);
            setPage(1);
            clear();
            // getAll(page)
          }}
        >
          All
      </Typography>
        <Typography
          variant="body2"
          component="p"
          className={clsx({
            [classes.tags]: true,
            [classes.active]: selected == 6
          })}
          onClick={() => {
            setCat(6);
            setPage(1); 
            clear();
            // get(page, 6);
          }}
        >
          Food
      </Typography>
        <Typography
          variant="body2"
          component="p"
          className={clsx({
            [classes.tags]: true,
            [classes.active]: selected == 4
          })}
          onClick={() => {
            setCat(4);
            setPage(1);
            clear(); 
            // get(page, 4)
          }}
        >
          Fashion
      </Typography>
        <Typography
          variant="body2"
          component="p"
          className={clsx({
            [classes.tags]: true,
            [classes.active]: selected == 1
          })}
          onClick={() => {
            setCat(1);
            setPage(1); 
            clear();
            // get(page, 1)
          }}
        >
          Travel
      </Typography>
        <Typography
          variant="body2"
          component="p"
          className={clsx({
            [classes.tags]: true,
            [classes.active]: selected == 5
          })}
          onClick={() => {
            setCat(5);
            setPage(1); 
            clear();
            // get(page, 5)
          }}
        >
          Books
      </Typography>
        <Typography
          variant="body2"
          component="p"
          className={clsx({
            [classes.tags]: true,
            [classes.active]: selected == 3
          })}
          onClick={() => {
            setCat(3);
            setPage(1); 
            clear();
            // get(page, 3)
          }}
        >
          Wacky
      </Typography>
      </div>
    </Fragment>
  );
};

export default AflogCategoryTags
