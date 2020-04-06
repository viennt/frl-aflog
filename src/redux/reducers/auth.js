import {
  LOGOUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  APPLY_COLLABORATE_SUCCESS
} from '../actions/index';

let user = JSON.parse(localStorage.getItem('user'));
let authToken = localStorage.getItem('auth_token');
let requestToken = localStorage.getItem('request_token');
const initialState = {
  loggedIn: authToken ? true : false,
  authToken: authToken ? authToken : null,
  user: user ? user : {},
  requestToken: requestToken ? requestToken : null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loggedIn: false
      };
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        authToken: payload.auth_token,
        user: payload.user,
        requestToken: payload.request_token
      };
    case LOGIN_FAILURE:
      return {
        loggedIn: false,
        authToken: null,
        user: {},
        requestToken: false
      };
    case LOGOUT:
      return {
        loggedIn: false,
        authToken: null,
        user: {},
        requestToken: false
      };
    case APPLY_COLLABORATE_SUCCESS:
      return {
        ...state,
        requestToken: payload
      }
    default:
      return state;
  }
}
