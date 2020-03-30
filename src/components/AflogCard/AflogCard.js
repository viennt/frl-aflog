import React from 'react';

import { Link ,Redirect} from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Avatar,
  Grid,
  Popper
} from '@material-ui/core';
import clsx from 'clsx';
import StarRateIcon from '@material-ui/icons/StarRate';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShareIcon from '@material-ui/icons/Share';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {categories} from '../../utils';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.contrastText,
    margin :10,
    marginBottom : 25
  },
  cardHead: {
    width: '100%',
    borderRadius: 20,
    position: 'relative',
  },
  cardBody: {
    marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  cardImage: {
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    borderRadius: 20,
    width: '100%'
  },
  mask: {
    position: 'absolute',
    boxSizing: 'border-box',
    width: '100%',
    left: 0,
    top: 0,
    bottom: 4,
    background: 'rgba(0 , 0, 0, 0.5)',
    borderRadius: 20,
    padding: '5px 15px',
    opacity: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',

    transition: 'opacity 0.5s ease-in-out',
    '&:hover': {
      opacity: 1,
      transition: 'opacity 0.5s ease-in-out'
    }
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'absolute',
    boxSizing: 'border-box',
    width: '100%',
    top: 0,
    left: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 15
  },
  grow: {
    flexGrow: 1,
  },
  flex: {
    display: 'flex',
  },
  group: {
    paddingRight: 5,
    display: 'flex',
    alignItems: 'center'
  },
  tags: {
    fontSize : 12,
    fontWeight: 'bold',
    border: '1px solid white',
    background: 'rgba(255, 255, 255, 0.3)',
    padding: '2px 4px',
    borderRadius: 6,
    width: 55,
    zIndex: 3000,
    textDecoration : 'none',
    color : theme.palette.text.contrastText,
    transition: 'background 0.2s ease-in-out',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.6)',
      transition: 'background 0.2s ease-in-out'
    }
  },
  icon: {
    width: '0.8em'
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.white,
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    borderRadius: 4
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  alignX:{
    display: 'flex',
    alignItems: 'center'
  },
  username:{
    color: theme.palette.text.dark,
    fontWeight: 'bold',
    fontSize: '13px',
    letterSpacing: 'normal',
    lineHeight: '25px'
  },
  lable:{
    color: theme.palette.text.dark,
    fontWeight: 800,
    fontSize: '14px',
    letterSpacing: 'normal',
    lineHeight: '14px',
    marginLeft: 2
  },
  buynow:{
    color:'white',
    textDecorationLine:'none'
  }
}));


const AflogCard = ({ aflog: {
  image,
  title,
  description,
  category,
  likes_count,
  share_count,
  user,
  product
},
handleOpen,
handleClose
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  let itemSrc = category && category.length > 0 &&
    categories.filter(item => (item.name === category[0].name))
  return (
    <div className={classes.root} >
      <div
        className={classes.cardHead}
        onClick={handleOpen}
      >
        <img
          alt={image}
          className={classes.cardImage}
          src={image}
        />
        <div className={classes.mask} >
          <div className={classes.actions} >
            {/* <Typography variant="subtitle2" component="span" className={classes.tags}>
              <StarRateIcon className={classes.icon} />
              {' '}Star
            </Typography>
            <Typography variant="subtitle2" component="span" className={classes.tags}>
              <BookmarkIcon className={classes.icon} />
              {' '}Save
          </Typography> */}
            {/* <a href={product.link} target="_blank"> */}
            <Typography
              className={classes.tags}
              component="a"
              href={product && product.link}
              onClick={handleClose}
              target="_blank"
              variant="subtitle2"
            >
              <LocalMallIcon className={classes.icon} />
                &nbsp;Buy
            </Typography>
            {/* </a> */}
            {/* <Typography variant="subtitle2" component="span" className={classes.tags}>
              <ShareIcon className={classes.icon} />
              {' '}Share
          </Typography> */}
          </div>
          <Typography variant="subtitle1">
            {title}
          </Typography>
          <Typography
            className="title"
            variant="subtitle2"
          >
            <img
              alt={itemSrc}
              src={itemSrc && itemSrc[0].iconWhite}
            /> &nbsp;
            {description}
          </Typography>
        </div>
      </div>
      <div className={classes.cardBody}>
        {
          user && user.image ?
            <Avatar
              alt={user.image}
              aria-describedby={id}
              className={classes.small}
              onClick={handleClick}
              src={user.image}
              type="button"
            /> :
            <Avatar
              alt={'avatar'}
              aria-describedby={id}
              className={classes.small}
              onClick={handleClick}
              src={'/images/About Us/user-placeholder2.svg'}
              type="button"
            />
        } &nbsp;
        <Typography
          className={clsx(classes.alignX, classes.username)}
          component="p"
        >
          {user && user.name}
        </Typography>
        <div className={classes.grow} />
        <div className={classes.flex}>
          <div className={classes.group}>
            <img
              alt="stars"
              src={'/images/Grid Item/star_icon.svg'}
            />
            <Typography
              className={classes.lable}
              component="span"
            >{likes_count}</Typography>
          </div>
          <div className={classes.group}>
            <img
              alt="shares"
              src={'/images/Grid Item/shopping_bag_purple.svg'}
            />
            <Typography
              className={classes.lable}
              component="span"
            >{share_count}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AflogCard;
