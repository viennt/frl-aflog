import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { CampaignCard } from '../../../components';

const useStyles = makeStyles(theme => ({
  roots: {
    backgroundColor: theme.palette.common.white,
    '& *:not(i)': {
      fontFamily: 'Muli, sans-serif !important'
    },
    padding: theme.spacing(4, 2),
  },
  header: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 900,
    padding: theme.spacing(1),
  }
}));

const AvailableCampaigns = () => {
  const classes = useStyles();

  const campaigns = [
    {
      'id': 373,
      'name': 'Name test',
      'image': 'https://images.befunky.com/wp/wp-2016-03-blur-background-featured-1.jpg?auto=format&fm=jpg&q=75&w=880&ixlib=js-1.4.1',
      'apply_before': '2020-03-12 00:12:00',
      'brand': {
        'id': 83,
        'image': 'https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png',
      },
    },
    {
      'id': 373,
      'name': 'Name test',
      'image': 'https://images.befunky.com/wp/wp-2016-03-blur-background-featured-1.jpg?auto=format&fm=jpg&q=75&w=880&ixlib=js-1.4.1',
      'apply_before': '2020-03-12 00:12:00',
      'brand': {
        'id': 83,
        'image': 'https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png',
      },
    },
    {
      'id': 373,
      'name': 'Name test',
      'image': 'https://images.befunky.com/wp/wp-2016-03-blur-background-featured-1.jpg?auto=format&fm=jpg&q=75&w=880&ixlib=js-1.4.1',
      'apply_before': '2020-03-12 00:12:00',
      'brand': {
        'id': 83,
        'image': 'https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png',
      },
    },
  ]

  return (
    <div className={classes.roots} >
      <div className={classes.header}>Some campaigns that are currently available</div>
      <Grid
        container
        justify="center"
      >
        {
          campaigns.map((campaign, index) => (
            <Grid
              container
              direction="column"
              item
              justify="center"
              key={index}
              onClick={() => {}}
              sm={4}
              xs={12}
            >
              <CampaignCard
                campaign={{
                  backgroundImage: campaign.image,
                  brandImage: campaign.brand.image,
                  name: campaign.name,
                  applyBefore: campaign.apply_before,
                  slotLeft: 4,
                }}
              />
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
};

export default AvailableCampaigns;
