import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const useStyles = makeStyles(theme => ({
  root: {
    color: 'black',
    // position : 'relative'
  }
}));

const ContactLocation = (props) => {
  const classes = useStyles();

  const onMarkerClick=()=>{}
  return (
    <div className={classes.root}>
      <Map
        gestureHandling="none"
        google={props.google}
        initialCenter={{
          lat: 12.912610, lng: 77.588470
        }}
        zoom={17}
      >
        <Marker
          name={'Current location'}
          onClick={onMarkerClick}
          position={{ lat: 12.912610, lng: 77.588470 }}
        />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAVnLqKfE1qYvI9Nr8c7i7VYDzDxSCraz4')
})(ContactLocation);
