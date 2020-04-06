import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    padding: theme.spacing(4, 2, 8, 2),
    minHeight: '100vh'
  },
  header: {
    textAlign: 'right',
    fontSize: theme.spacing(15),
    fontWeight: 900,
    color: '#00000011',
    textTransform: 'uppercase',
    padding: theme.spacing(1),
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
      <div className={classes.header}>ongoing</div>
      <CampaignTypeTags
        clear={() => {}}
        selected={type}
        setPage={setPage}
        setType={setType}
        setCampaigns={setCampaigns}
      />
      {isApiLoading &&
        <div className={classes.loader}><CircularProgress /></div>
      }
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
