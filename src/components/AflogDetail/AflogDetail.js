import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Redirect } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import {
  Avatar,
  Tooltip,
  Grid,
  Popper
} from '@material-ui/core';
import clsx from 'clsx';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { categories } from '../../utils';

const useStyles = makeStyles(theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: "7px",
    },
    '*::-webkit-scrollbar-track': {
      background: "#f1f1f1"
    },
    '*::-webkit-scrollbar-thumb': {
      background: "#555"
    }
  },
  root: {
    '& .MuiCard-root': {
      borderRadius: 20
    }
  },
  media: {
    width: '100%',
    borderRadius: 20
  },
  icon: {
    width: '30px !important'
  },
  cardBody: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  grow: {
    flexGrow: 1,
  },
  flex: {
    display: 'flex',
  },
  avatar: {
    width: '64px',
    height: '64px'
  },
  alignX: {
    display: 'flex',
    alignItems: 'center'
  },
  username: {
    color: theme.palette.text.dark,
    fontWeight: 800,
    fontSize: '16px',
    letterSpacing: 'normal',
    lineHeight: '20px'
  },
  name: {
    color: theme.palette.text.light,
    fontWeight: 600,
    fontSize: '14px',
    letterSpacing: 'normal',
    lineHeight: '20px'
  },
  group: {
    marginRight: 20,
    display: 'flex',
    alignItems: 'center'
  },
  lable: {
    color: theme.palette.text.light,
    fontWeight: 'bold',
    fontSize: '16px',
    letterSpacing: 'normal',
    lineHeight: '14px',
    marginLeft: 2
  },
  title: {
    color: theme.palette.text.dark,
    fontWeight: 800,
    fontSize: '24px',
    letterSpacing: 'normal',
    lineHeight: '30px',
  },
  desc: {
    color: theme.palette.text.dark,
    fontWeight: 'bold',
    fontSize: '16px',
    letterSpacing: 'normal',
    lineHeight: '20px',
    marginLeft: 2,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  content: {
    color: theme.palette.text.secondary,
    fontWeight: 600,
    fontSize: '16px',
    letterSpacing: 'normal',
    lineHeight: '28px',
    marginTop: '20px'
  },
  tags: {
    marginTop: '50px',
    display: 'flex',
    alignItems: 'center'
  },
  tag: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: '24px',
    border: `1px solid ${theme.palette.text.primary}`,
    background: '#fff',
    padding: '6px 8px',
    borderRadius: 6,
    color: theme.palette.text.primary,
    marginRight: '10px'
  },
  buy: {
    background: theme.palette.primary.dark
  },
  tooltip: {
    backgroundColor: '#fff',
    color: '#000'
  }
}));

export default function AflogDetail({
  aflog: {
    id,
    image,
    title,
    description,
    category,
    likes_count,
    share_count,
    content,
    view_count,
    user,
    tags,
    product
  },
}) {
  const classes = useStyles();
  let itemSrc = category.length > 0 &&
    categories.filter(item => (item.name === category[0].name))


  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        {/* <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        /> */}
        <img src={image} alt={image} className={classes.media} />
        <CardContent>
          <div className={classes.cardBody}>
            {
              user.image ?
                <Avatar
                  src={user.image}
                  alt={user.image}
                  aria-describedby={id}
                  type="button"
                  className={classes.avatar}
                /> :
                <Avatar
                  src={"/images/About Us/user-placeholder2.svg"}
                  alt={"avatar"}
                  aria-describedby={id}
                  type="button"
                  className={classes.avatar}
                />
            }

            <div className="pl3">
              <Typography component='p' className={clsx(classes.alignX, classes.username)}>
                {user.name}
              </Typography>
              {/* todo username is missing */}
              {/* <Typography component='p' className={clsx(classes.alignX, classes.name)}>
                {user.email}
              </Typography> */}
            </div>
            <div className={classes.grow} />
            <div className={classes.flex}>
              <div className={classes.group}>
                <img src={'/images/Gridcard Dialog/views_icon.svg'} alt="views" />
                <Typography component="span" className={classes.lable}>{view_count}</Typography>
              </div>
              <div className={classes.group}>
                <img src={'/images/Gridcard Dialog/star_icon.svg'} alt="likes" />
                <Typography component="span" className={classes.lable}>{likes_count}</Typography>
              </div>
              <div className={classes.group}>
                <img src={'/images/Gridcard Dialog/shopping_bag_icon.svg'} alt="shares" />
                <Typography component="span" className={classes.lable}>{share_count}</Typography>
              </div>
            </div>
          </div>
        </CardContent>
        <CardContent>
          <Typography component="h3" className={classes.title}>
            {title}
          </Typography>
          <Typography component="h4" className={classes.desc}>
            <img
              src={itemSrc && itemSrc[0].iconPurple}
              alt={itemSrc}
              className={classes.icon} /> &nbsp;
            {description}
          </Typography>

          <Typography component="p" className={classes.content} >
            {content}
          </Typography>

          <div className={classes.tags}>
            {
              tags ?
                tags.map((item, index) => {
                  return <Typography component="span" className={classes.tag} key={index}>
                    {item}
                  </Typography>
                })
                : null
            }
            <div className={classes.grow} />
            <Typography
              component="a"
              href={product.link}
              target="_blank"
            >
              <Tooltip title="Buy Now" placement="top" className={classes.tooltip}>
                <Avatar className={clsx(classes.buy)} >
                  <img src={'/images/Gridcard Dialog/buy_now_button.svg'} alt="buy now" />
                </Avatar>
              </Tooltip>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div >
  );
}