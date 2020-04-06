import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Grid, CircularProgress } from '@material-ui/core';

import { apiLoading, apiSuccess, apiError } from '../../../../redux/actions/app';
import { setAlert } from '../../../../redux/actions/alert';
import { rootURL } from '../../../../utils/constants/apiUrl';
import { CampaignCard, CampaignTypeTags } from '../../../../components';

const useStyles = makeStyles(theme => ({
  roots: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(0, 2, 15, 2),
  },
  header: {
    textAlign: 'right',
    fontSize: theme.spacing(15),
    fontWeight: 900,
    color: '#00000011',
    textTransform: 'uppercase',
    padding: theme.spacing(1),
  },
  flexMasonry: {
    display: '-webkit-box',
    display: '-ms-flexbox',
    display: 'flex',
    width: 'auto',
    minHeight : 400
  },
  flexMasonryColumn: {
    backgroundClip: 'padding-box'
  },
  loader: {
    textAlign: 'center'
  }
}));

const TypedCampaigns = ({
  authToken,
  error,
  hasMore,
  isApiLoading,
  appToken,
  setAlert: setAlertDispatcher,
  apiLoading: apiLoadingDispatcher,
  apiSuccess: apiSuccessDispatcher,
  apiError: apiErrorDispatcher
}) => {
  const classes = useStyles();
  const [type, setType] = useState('TYPE_ONGOING');
  const [page, setPage] = useState(1);
  const [campaigns, setCampaigns] = useState([]);

  const getCampaignByType = async (appToken, type) => {
    try {
      apiLoadingDispatcher();
      const res = await
      axios.post(`${rootURL}/collaborate-app/campaign/get-campaign-by-type`,
        {
          type: type
        },
        {
          headers: {
            'Authorization': `Bearer ${appToken}`
          }
        }
      );
      if (res.data) {
        setCampaigns(res.data);
        apiSuccessDispatcher();
      }

    } catch (err) {
      setAlertDispatcher(err.message, 'danger');
      apiErrorDispatcher();
    }
  };

  useEffect(() => {
    // FIXME
    if (type != 'TYPE_ELIGIBLE') {
      getCampaignByType(appToken, type);
    }
  }, [type]);

  return (
    <div className={classes.roots} >
      <div className={classes.header}>{type.substring(5, type.length)}</div>
      <CampaignTypeTags
        clear={() => {}}
        selected={type}
        setCampaigns={setCampaigns}
        setPage={setPage}
        setType={setType}
      />
      {isApiLoading &&
        <div className={classes.loader}><CircularProgress /></div>
      }
      <Masonry
        breakpointCols={{
          default: 3,
          1100: 3,
          700: 1,
          500: 1
        }}
        className={classes.flexMasonry}
        columnClassName={classes.flexMasonryColumn}
      >
        {
          campaigns.map((campaign, index) => (
            <Grid
              item
              key={index}
              onClick={() => {}}
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
      </Masonry>
    </div>
  )
};

const mapStateToProps = state => ({
  error: state.aflogState.error,
  hasMore: state.aflogState.hasMore,
  isApiLoading: state.appState.apiLoading,
  authToken: state.authState.authToken,
  appToken: state.authState.appToken
});

export default connect(
  mapStateToProps,
  {
    apiLoading,
    apiSuccess,
    apiError,
    setAlert
  }
)(TypedCampaigns);
