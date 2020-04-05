import {
  LOGOUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_USERNAME,
  SET_PASSWORD
} from '../actions/index';

let user = JSON.parse(localStorage.getItem('user'));
let authToken = localStorage.getItem('auth_token');
const initialState = {
  loggedIn: false,
  authToken: authToken ? authToken : null,
  user: user ? user : {},
  username: null,
  password: null
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
        user: JSON.stringify(payload.user)
      };
    case LOGIN_FAILURE:
      return initialState;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
