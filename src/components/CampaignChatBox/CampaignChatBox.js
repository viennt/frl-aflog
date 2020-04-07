import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  window: {
    position: 'fixed',
    width: theme.spacing(50),
    maxWidth: '800px',
    height: '500px',
    borderTopRightRadius: '21px',
    borderTopLeftRadius: '21px',
    backgroundColor: '#FFF',
    right: '10%',
    bottom: 0,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
    overflow: 'hidden',
    zIndex: 999,
  },
  header: {
    backgroundColor: '#FAFAFA',
    position: 'relative',
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headerAvatar: {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    display: 'inline-block',

    backgroundColor: '#DEDEDE',
  },
  headerTitle: {
    textAlign: 'left',
    fontSize: '15px',
    padding: theme.spacing(0, 1),
  },
  headerButtons: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    height: '100%',
    top: 0,
    right: 0,

    '& > div': {
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      display: 'inline-block',
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
      position: 'relative',
      fontSize: '20px',
      fontWeight: 900
    },
  },
  messages: {
    position: 'relative',
    listStyle: 'none',
    padding: '20px 10px 0 10px',
    margin: '0',
    height: '383px',
    overflow: 'scroll',
    '& > li': {
      clear: 'both',
      overflow: 'hidden',
      marginBottom: '20px',
      transition: 'all 0.5s linear',
    },
  },
  messageLeft: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  messageLeftAvatar: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    display: 'inline-block',

    backgroundColor: '#555DF0',
    float: 'left'
  },
  messageLeftTextWrapper: {
    display: 'inline-block',
    borderRadius: '12px',
    width: 'calc(100% - 150px)',
    minWidth: '100px',
    position: 'relative',

    backgroundColor: '#EEEEEE',
    border: '1px solid #EEEEEE',
    marginLeft: '10px',
    overflow: 'hidden'
  },
  messageLeftText: {
    padding: theme.spacing(2),
    fontSize: '16px',
    color: '#000000'
  },
  messageLeftActions: {
    '& > div': {
      fontSize: '14px',
      fontWeight: 700,
      textAlign: 'center',
      color: '#555DF0',
      backgroundColor: '#FFFFFF',
      border: '1px solid #EEEEEE',
      padding: theme.spacing(1.5),
    }
  },
  messageLeftAction: {
    fontSize: '16px',
    color: '#000000'
  },
  messageRightTextWrapper: {
    display: 'inline-block',
    borderRadius: '12px',
    width: 'calc(100% - 150px)',
    minWidth: '100px',
    position: 'relative',

    backgroundColor: '#555DF0',
    border: '1px solid #555DF0',
    float: 'right',
    overflow: 'hidden'
  },
  messageRightText: {
    padding: theme.spacing(2),
    fontSize: '16px',
    textAlign: 'right',
    color: '#FFFFFF'
  },
  //
  //
  //
  bottomWrapper: {
    width: '100%',
    backgroundColor: '#fff',
    bottom: '0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  },
  inputWrapper: {
    display: 'inline-block',
    height: '45px',
    width: 'calc(100% - 80px)',
    padding: '0 20px'
  },
  input: {
    fontSize: '14px',
    border: 'none',
    height: '100%',
    boxSizing: 'border-box',
    width: 'calc(100% - 40px)',
    outlineWidth: '0',
    color: 'gray'
  },
  sendMessage: {
    width: '30px',
    height: '30px',
    display: 'inline-block',
    borderRadius: '50px',
    backgroundColor: '#555DF0',
    border: '2px solid #555DF0',
    color: '#FFFFFF',
    cursor: 'pointer',
    transition: 'all 0.2s linear',
    textAlign: 'center',
    float: 'right',

    '&:hover': {
      color: '#555DF0',
      backgroundColor: '#FFFFFF'
    },
  },
  sendMessageText: {
    fontSize: '15px',
    lineHeight: 1.8,
    transform: 'rotate(52deg)',
    display: 'inline-block',
  },
}));

const CampaignChatBox = ({ campaignId, userId }) => {
  const classes = useStyles();

  return (
    <div className={classes.window}>
      <div className={classes.header}>
        <div className={classes.headerAvatar} />
        <div className={classes.headerTitle}>Campaign Name by Brand Name</div>
        <div className={classes.headerButtons}>
          <div>_</div>
          <div>X</div>
        </div>
      </div>
      <ul className={classes.messages}>
        <li className={classes.messageRight}>
          <div className={classes.messageRightTextWrapper}>
            <div className={classes.messageRightText}>
              Peach caption with more than 2 lines like this. With hashtags #peach_store #peach #more #hashtags @peach.in
            </div>
          </div>
        </li>
        <li className={classes.messageLeft}>
          <div className={classes.messageLeftAvatar} />
          <div className={classes.messageLeftTextWrapper}>
            <div className={classes.messageLeftText}>
              Hope you had a good time at the shoot! Please submit your content for review here before posting on Instagram.
            </div>
            <div className={classes.messageLeftActions}>
              <div className={classes.messageLeftAction}>View Guidelines</div>
              <div className={classes.messageLeftActio}>Send content for review</div>
            </div>
          </div>
        </li>
        <li className={classes.messageLeft}>
          <div className={classes.messageLeftAvatar} />
          <div className={classes.messageLeftTextWrapper}>
            <div className={classes.messageLeftText}>
              Hi <strong>Parvathi</strong>,<br/><br/>
              Congrats on getting selected to be a part of the <strong>Diwali Gifting Campaign</strong> by <strong>Peach</strong>.
            </div>
          </div>
        </li>
        <li className={classes.messageRight}>
          <div className={classes.messageRightTextWrapper}>
            <div className={classes.messageRightText}>
              Peach caption with more than 2 lines like this. With hashtags #peach_store #peach #more #hashtags @peach.in
            </div>
          </div>
        </li>
      </ul>
      <div className={classes.bottomWrapper}>
        <div className={classes.inputWrapper}>
          <input
            className={classes.input}
            placeholder="Message..."
          />
        </div>
        <div className={classes.sendMessage}>
          <div className="icon" />
          <div className={classes.sendMessageText}>
            <i className="fas fa-paper-plane" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignChatBox
