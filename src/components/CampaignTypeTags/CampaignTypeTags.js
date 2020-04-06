import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '20px 0'
  },
  divider: {
    marginTop : 60
  },
  tags: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: '24px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    color: theme.palette.text.light,
    padding: '4px 6px',
    borderRadius: 6,
    justifyContent: 'center',
    width: theme.spacing(12),
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
    fontWeight: 900,
  }
}));

const CampaignTypeTags = ({ setType, setPage, clear, selected }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div
          className={clsx({
            [classes.tags]: true,
            [classes.active]: selected === 'TYPE_ELIGIBLE'
          })}
          component="p"
          onClick={() => {
            setType('TYPE_ELIGIBLE');
            setPage(1);
            clear();
          }}
        >
          ELIGIBLE
        </div>
        <div
          className={clsx({
            [classes.tags]: true,
            [classes.active]: selected === 'TYPE_ONGOING'
          })}
          component="p"
          onClick={() => {
            setType('TYPE_ONGOING');
            setPage(1);
            clear();
          }}
        >
          ONGOING
        </div>
        <div
          className={clsx({
            [classes.tags]: true,
            [classes.active]: selected === 'TYPE_PENDING'
          })}
          component="p"
          onClick={() => {
            setType('TYPE_PENDING');
            setPage(1);
            clear();
          }}
        >
          PENDING
        </div>
        <div
          className={clsx({
            [classes.tags]: true,
            [classes.active]: selected === 'TYPE_FINISHED'
          })}
          component="p"
          onClick={() => {
            setType('TYPE_FINISHED');
            setPage(1);
            clear();
          }}
        >
          FINISHED
        </div>
      </div>
    </>
  );
};

export default CampaignTypeTags
