import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiCard-root': {
      borderRadius: 20
    }
  },
  campaign: {

  },
  campaignBackground: {
    width: '100%',
    borderRadius: 20
  },
  campaignHeader: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  applyButton: {
    fontSize: '14px',
    margin: `${theme.spacing(2)}px!important`,
    width: theme.spacing(14),
    color: theme.palette.common.white,
    fontWeight: 700,
    backgroundColor: theme.palette.text.primary,
    border: 'none',
    borderRadius: '8px',
    padding: theme.spacing(1, 2),
    cursor: 'pointer'
  }
}));

export default function AflogDetail({
  campaign: {
    backgroundImage,
    brandImage,
    name,
    applyBefore,
    slotLeft,
    aboutTheBrand,
    aboutTheCampaign,
    shootDetail,
    tasks,
  },
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.campaign}>
        <img
          alt={backgroundImage}
          className={classes.campaignBackground}
          src={backgroundImage}
        />
        <CardContent>
          <div className={classes.campaignHeader}>
            <Avatar
              alt={brandImage}
              className={classes.avatar}
              src={brandImage}
              type="button"
            />

            <div className="pl3">
              <Typography
                component="p"
              >
                {name}
              </Typography>
            </div>
          </div>
        </CardContent>
        <CardContent>

          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              expandIcon={<ExpandMoreIcon />}
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Expansion Panel 1</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel2a-content"
              expandIcon={<ExpandMoreIcon />}
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Expansion Panel 2</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel disabled>
            <ExpansionPanelSummary
              aria-controls="panel3a-content"
              expandIcon={<ExpandMoreIcon />}
              id="panel3a-header"
            >
              <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
        </CardContent>
        <button
          className={classes.applyButton}
        >Submit</button>
      </Card>
    </div>
  );
}
