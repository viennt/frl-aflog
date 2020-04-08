import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Grid, CircularProgress } from '@material-ui/core';

import { apiLoading, apiSuccess, apiError } from '../../../../redux/actions/app';
import { setAlert } from '../../../../redux/actions/alert';
import { rootURL } from '../../../../utils/constants/apiUrl';
import {
  CampaignCard,
  CampaignTypeTags,
  CampaignModal,
  CampainDetail,
  CampaignChatBox
} from '../../../../components';

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
  flexMasonryItem: {
    cursor: 'pointer'
  },
  loader: {
    textAlign: 'center'
  }
}));

const TypedCampaigns = ({
  isApiLoading,
  appToken,
  loggedUser,
  setAlert: setAlertDispatcher,
  apiLoading: apiLoadingDispatcher,
  apiSuccess: apiSuccessDispatcher,
  apiError: apiErrorDispatcher
}) => {
  const classes = useStyles();
  const [type, setType] = useState('TYPE_ELIGIBILITY');
  const [campaigns, setCampaigns] = useState([]);
  const [campaign, setCampaign] = useState();
  const [openCampaignModal, setOpenCampaignModal] = useState(true);
  const [openCampaignChat, setOpenCampaignChat] = useState(false);

  const handleCampaignModalOpen = (campaign) => {
    if (campaign && (type === 'TYPE_ELIGIBILITY' || type === 'TYPE_PENDING')) {
      setOpenCampaignModal(true);
    }
  };

  const handleCampaignModalClose = () => {
    setOpenCampaignModal(false);
  };

  const handleCampaignChatOpen = () => {
    if (campaign && (type === 'TYPE_ONGOING' || type === 'TYPE_FINISHED')) {
      setOpenCampaignChat(true);
    }
  };

  const handleCampaignChatClose = () => {
    setOpenCampaignChat(false);
  };

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
    if (appToken != undefined) {
      getCampaignByType(appToken, type);
    }
  }, [type, appToken]);

  return (
    <div className={classes.roots} >
      <div className={classes.header}>{type.substring(5, type.length)}</div>
      <CampaignTypeTags
        clear={() => {}}
        selected={type}
        setCampaigns={setCampaigns}
        setPage={() => {}}
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
              className={classes.flexMasonryItem}
              item
              key={index}
              onClick={() => {
                setCampaign(campaign);
                handleCampaignModalOpen(campaign);
                handleCampaignChatOpen(campaign);
              }}
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
      {campaign && (
        <CampaignModal
          onClose={handleCampaignModalClose}
          open={openCampaignModal}
        >
          <CampainDetail
            campaign={{
              name: campaign.name,
              brandName: campaign.brand.company_name,
              backgroundImage: campaign.image,
              brandImage: campaign.brand.image,
              applyBefore: campaign.apply_before,
              slotLeft: campaign.slots_remaining,
              locationCity: campaign.location_city,
              industry: campaign.industry,
              campaignGoal: campaign.campaign_goal,
              aboutTheBrand: campaign.brand.description,
              aboutTheCampaign: campaign.description,
              shootDetail: campaign.product.description,
              tasks: campaign.deliverables,
            }}
          />
        </CampaignModal>
      )}
      {campaign && openCampaignChat && (
        <CampaignChatBox
          campaign={{
            campaignId: campaign.id,
            campaignName: campaign.name,
            campaignAvatar: campaign.image,
          }}
          onClose={handleCampaignChatClose}
          user={{
            userId: loggedUser.id
          }}
        />
      )}
    </div>
  )
};

const mapStateToProps = state => ({
  error: state.aflogState.error,
  hasMore: state.aflogState.hasMore,
  isApiLoading: state.appState.apiLoading,
  authToken: state.authState.authToken,
  appToken: state.authState.appToken,
  loggedUser: state.authState.user
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
