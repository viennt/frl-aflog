import {
  LOGOUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  APPLY_COLLABORATE_SUCCESS,
  APPLY_CHECK_SUCCESS
} from '../actions/index';

let user = JSON.parse(localStorage.getItem('user'));
let authToken = localStorage.getItem('auth_token');
let requestToken = localStorage.getItem('request_token');
let appToken = localStorage.getItem('app_token');
let newUserId = localStorage.getItem('new_user_id');

const initialState = {
  loggedIn: authToken ? true : false,
  authToken: authToken ? authToken : null,
  user: user ? user : {},
  requestToken: requestToken ? requestToken : null,
  appToken: appToken ? appToken : null,
  newUserId: newUserId ? newUserId : null
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
        requestToken: null,
        appToken: null,
        newUserId: null
      };
    case LOGOUT:
      return {
        loggedIn: false,
        authToken: null,
        user: {},
        requestToken: null,
        appToken: null,
        newUserId: null
      };
    case APPLY_COLLABORATE_SUCCESS:
      return {
        ...state,
        requestToken: payload
      }
    case APPLY_CHECK_SUCCESS:
      return {
        ...state,
        appToken: payload.auth_token,
        newUserId: payload.user_id
      }
    default:
      return state;
  }
}
