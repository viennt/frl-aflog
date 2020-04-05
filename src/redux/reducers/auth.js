import {
  LOGOUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/index';

let user = JSON.parse(localStorage.getItem('user'));
let authToken = localStorage.getItem('auth_token');
const initialState = {
  loggedIn: authToken ? true : false,
  authToken: authToken ? authToken : null,
  user: user ? user : {}
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
        user: payload.user
      };
    case LOGIN_FAILURE:
      return {
        loggedIn: false,
        authToken: null,
        user: {}
      };
    case LOGOUT:
      return {
        loggedIn: false,
        authToken: null,
        user: {}
      };
    default:
      return state;
  }
}
