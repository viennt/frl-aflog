import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

let moment = require('moment');

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiCard-root': {
      borderRadius: 20
    }
  },
  campaign: {
    position: 'relative'
  },
  campaignBackground: {
    width: '100%',
  },
  slotLeft: {
    position: 'absolute',
    right: theme.spacing(4),
    top: -theme.spacing(8),
    padding: theme.spacing(1, 2),
    color: theme.palette.common.black,
    backgroundColor: '#FFD72E',
    borderRadius: 7
  },
  campaignHeader: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    position: 'relative',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    zIndex: 99,
  },
  brandImage: {
    margin: 'auto',
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  campaignTitle: {
    fontSize: '24px',
    fontWeight: 700,
    margin: theme.spacing(1, 0),
  },
  brandName: {
    fontSize: '18px',
    margin: theme.spacing(1, 0),
    color: '#999999'
  },
  moreInfo: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: 2,
    '& i': {
      color: '#555DF0',
      marginLeft: theme.spacing(1),
    }
  },
  expansionPanel: {
    borderTopLeftRadius: '12px!important',
    borderTopRightRadius: '12px!important',
    borderBottomLeftRadius: '12px!important',
    borderBottomRightRadius: '12px!important',
    marginBottom: theme.spacing(2),
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.12)',
    '&:before': {
      opacity: 0
    },
    '& .MuiExpansionPanelSummary-content *': {
      fontWeight: 700,
    },
    '& .Mui-expanded *': {
      color: '#555DF0',
    }
  },
  applyButton: {
    fontSize: '14px',
    width: '100%',
    margin: '0px!important',
    padding: theme.spacing(2, 2),
    color: theme.palette.common.white,
    fontWeight: 700,
    backgroundColor: '#555DF0',
    border: 'none',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
    cursor: 'pointer'
  }
}));

export default function AflogDetail({
  campaign: {
    name,
    backgroundImage,
    brandImage,
    brandName,
    applyBefore,
    campaignGoal,
    industry,
    locationCity,
    slotLeft,
    aboutTheBrand,
    aboutTheCampaign,
    shootDetail,
    tasks,
  },
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('ABOUT_BRAND');

  const handleExpandedChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.campaign}>
        <img
          alt={backgroundImage}
          className={classes.campaignBackground}
          src={backgroundImage}
        />
        <CardContent className={classes.campaignHeader}>
          <div className={classes.slotLeft}>
            <i className="fas fa-exclamation-circle" /> {slotLeft} slots left
          </div>
          <Avatar
            alt={brandImage}
            className={classes.brandImage}
            src={brandImage}
            type="button"
          />

          <div className={classes.campaignTitle}>
            {name}
          </div>
          <div className={classes.brandName}>
              By {brandName}
          </div>
          <div className={classes.moreInfo}>
            <i className="fas fa-clock" /> Apply before {moment(applyBefore).format('DD MMM, YYYY')}
          </div>
          <div className={classes.moreInfo}>
            <i className="fas fa-dot-circle" /> {campaignGoal}{' '}
            <i className="fas fa-dot-circle" /> {industry}{' '}
            <i className="fas fa-map-marker-alt" /> {locationCity}{' '}
          </div>
        </CardContent>

        <CardContent>
          <ExpansionPanel
            className={classes.expansionPanel}
            expanded={expanded === 'ABOUT_BRAND'}
            onChange={handleExpandedChange('ABOUT_BRAND')}
          >
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              className={classes.expansionPanelSummary}
              expandIcon={<ExpandMoreIcon />}
              id="panel1a-header"
            >
              <Typography>About the brand</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{aboutTheBrand}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            className={classes.expansionPanel}
            expanded={expanded === 'ABOUT_CAMPAIGN'}
            onChange={handleExpandedChange('ABOUT_CAMPAIGN')}
          >
            <ExpansionPanelSummary
              aria-controls="panel2a-content"
              className={classes.expansionPanelSummary}
              expandIcon={<ExpandMoreIcon />}
              id="panel2a-header"
            >
              <Typography>About the campaign</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{aboutTheCampaign}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            className={classes.expansionPanel}
            expanded={expanded === 'ABOUT_SHOOT'}
            onChange={handleExpandedChange('ABOUT_SHOOT')}
          >
            <ExpansionPanelSummary
              aria-controls="panel3a-content"
              className={classes.expansionPanelSummary}
              expandIcon={<ExpandMoreIcon />}
              id="panel3a-header"
            >
              <Typography>Shoot Details</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{shootDetail}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </CardContent>


        {/* <CardContent>
          <ExpansionPanel
            className={classes.expansionPanel}
            expanded={expanded === 'ABOUT_BRAND'}
            onChange={handleExpandedChange('ABOUT_BRAND')}
          >
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              className={classes.expansionPanelSummary}
              expandIcon={<ExpandMoreIcon />}
              id="panel1a-header"
            >
              <Typography>About the brand</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{aboutTheBrand}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </CardContent> */}


        <button className={classes.applyButton}>Apply</button>
      </Card>
    </div>
  );
}
