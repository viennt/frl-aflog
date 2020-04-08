import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import io from 'socket.io-client';
import { chatSockerURL } from '../../utils/constants/apiUrl';

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
      fontWeight: 900,
      cursor: 'pointer'
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
      cursor: 'pointer'
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

let socket;

const LeftMessageAction = ({ message, createAt, buttons }) => {
  const classes = useStyles();
  return (
    <li className={classes.messageLeft}>
      <div className={classes.messageLeftAvatar} />
      <div className={classes.messageLeftTextWrapper}>
        <div
          className={classes.messageLeftText}
          dangerouslySetInnerHTML={{ __html: message }}
        />
        <div className={classes.messageLeftActions}>
          {buttons.map((item, index) => {
            return(<div className={classes.messageLeftAction}>{item.text}</div>);
          })}
        </div>
      </div>
    </li>
  );
}

const LeftMessage = ({ message, createAt }) => {
  const classes = useStyles();
  return (
    <li className={classes.messageLeft}>
      <div className={classes.messageLeftAvatar} />
      <div className={classes.messageLeftTextWrapper}>
        <div
          className={classes.messageLeftText}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      </div>
    </li>
  );
}

const RightMessage = ({ message, createAt }) => {
  const classes = useStyles();
  return (
    <li className={classes.messageRight}>
      <div className={classes.messageRightTextWrapper}>
        <div
          className={classes.messageRightText}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      </div>
    </li>
  );
}

const CampaignChatBox = ({
  campaign: {
    campaignAvatar, campaignName, campaignId
  },
  user: {
    userId
  },
  onClose
}) => {
  const [unreadCount, setUnreadCount] = useState(0);
  const [messages, setMessages] = useState([
    {
      type: 'text',
      message: 'Peach caption with more than 2 lines like this. With hashtags #peach_store #peach #more #hashtags @peach.in',
      created_at: '1586316637',
      content_id: 1,
      revision_number: 1,
      is_outbox: true,
      button_data: null,
      image: null
    },
    {
      type: 'text_with_buttons',
      message: 'Hope you had a good time at the shoot! Please submit your content for review here before posting on Instagram.',
      created_at: '1586316637',
      content_id: 10,
      revision_number: 1,
      is_outbox: false,
      button_data: [
        {
          text: 'View Guidelines',
          type: 'TYPE_GUIDELINES',
          event_id: 1,
          on_click: true,
          data: {
            type: 'TYPE_WHOLE',
            content_id: 2
          }
        },
        {
          text: 'Send content for review',
          type: 'TYPE_SEND_CONTENT',
          event_id: 1,
          on_click: true,
          data: {
            type: '‘TYPE_CAPTION’',
            content_id: 3
          }
        }
      ],
      image: null
    },
    {
      type: 'text',
      message: `Hi <strong>Parvathi</strong>,<br/><br/>
      Congrats on getting selected to be a part of the <strong>Diwali Gifting Campaign</strong> by <strong>Peach</strong>.`,
      created_at: '1586316637',
      content_id: 4,
      revision_number: 1,
      is_outbox: false,
      button_data: null,
      image: null
    },
    {
      type: 'text',
      message: 'Got it. Thanks!',
      created_at: '1586316637',
      content_id: 5,
      revision_number: 1,
      is_outbox: true,
      button_data: null,
      image: null
    }
  ]);
  const [message, setMessage] = useState('');
  const classes = useStyles();

  const getUnreadMessage = () => {
    // get unread_count when render
    socket.emit('unread_count', {user_id: `user_${userId}`, campaign_id: `campaign_${campaignId}`});
  };

  const getChatHistory = () => {
    // get chat_history when render
    socket.emit('chat_history', {user_id: `user_${userId}`, campaign_id: `campaign_${campaignId}`});
  };

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      // send message to campaign
      socket.emit('message_relay', {
        recipient_id: `campaign_${campaignId}`,
        type: 'text',
        message: message,
        created_at: Math.floor(Date.now() / 1000),
        is_outbox: true,
        button_data: null,
        images: null
      });
      getChatHistory();
      setMessage('');
    }
  }

  const setMessageToRead = (messageId) => {
    // set unread message to read
    socket.emit('set_read_message', {id: messageId});
  }

  useEffect(() => {
    socket = io(chatSockerURL);

    socket.on('connect', () => {
      console.log('connect ok rồi !!!!');
    });

    getUnreadMessage();
    getChatHistory();
    setMessageToRead();
  }, [chatSockerURL]);

  useEffect(() => {
    // listen to get unread_count
    socket.on(`unread_count_user_${userId}_campaign_${campaignId}`, data => {
      console.log('unread_count: ', data);
      setUnreadCount(data.unread_count);
    });

    // listen to new chat_history
    socket.on(`chat_history_user_${userId}_campaign_${campaignId}`, data => {
      console.log('List chat history', data);
      setMessages(data);
    });

  }, []);
  return (
    <div className={classes.window}>
      <div className={classes.header}>
        <div className={classes.headerAvatar} />
        <div className={classes.headerTitle}>{campaignName}</div>
        <div className={classes.headerButtons}>
          <div>_</div>
          <div onClick={onClose}>X</div>
        </div>
      </div>
      <ul className={classes.messages}>
        {messages.map((item, index) => {
          if (item.type == 'text' && item.is_outbox) {
            return (
              <RightMessage
                createAt={item.created_at}
                message={item.message}
              />
            )
          }
          if (!item.is_outbox) {
            if (item.type == 'text') {
              return (
                <LeftMessage
                  createAt={item.created_at}
                  message={item.message}
                />
              )
            }
            if (item.type == 'text_with_buttons') {
              return (
                <LeftMessageAction
                  buttons={item.button_data}
                  createAt={item.created_at}
                  message={item.message}
                />
              )
            }

          }
        })}
      </ul>
      <div className={classes.bottomWrapper}>
        <div className={classes.inputWrapper}>
          <input
            className={classes.input}
            onChange={({ target: { value } }) => setMessage(value)}
            placeholder="Message..."
            value={message}
          />
        </div>
        <div
          className={classes.sendMessage}
          onClick={(event) => sendMessage(event)}
        >
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
