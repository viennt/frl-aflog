import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: theme.spacing(25),
    padding: theme.spacing(1),
    margin: 0,
    color: theme.palette.text.contrastText,
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    borderRadius: 15,
    overflow: 'hidden',
  },
  cardInfo: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(2),
  },
  brandImage: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  name: {
    fontSize: '18px',
    fontWeight: 900,
    margin: theme.spacing(1, 0),
  },
  applyBefore: {
    fontSize: '14px',
  },
}));

const CampaignCard = ({
  campaign: {
    backgroundImage,
    brandImage,
    name,
    applyBefore,
    slotLeft,
  },
}) => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
    >
      <div
        className={classes.card}
        style={{backgroundImage: `url(${backgroundImage})`}}
      >
        <Grid
          className={classes.cardInfo}
          container
          direction="column"
          item
          justify="flex-end"
          xs={12}
        >
          <img
            alt={brandImage}
            className={classes.brandImage}
            src={brandImage}
          />
          <div className={classes.name}>{name}</div>
          <div className={classes.applyBefore}>{applyBefore && 'Apply before' + applyBefore.substring(0, 10) + '-'} {slotLeft} slots left</div>
        </Grid>
      </div>
    </div>
  );
};

export default CampaignCard;
