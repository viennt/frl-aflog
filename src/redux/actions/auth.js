import axios from "axios";
import { apiLoading, apiSuccess, apiError } from "./app";
import { rootURL } from '../../utils/constants/apiUrl';
import history from '../../utils/historyRoute';
import {
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  APPLY_COLLABORATE_SUCCESS,
  APPLY_CHECK_SUCCESS
} from './index';
import { setAlert } from './alert';

export const applyCollaborate = (requestToken) => dispatch => {
  localStorage.setItem('request_token', requestToken);
  dispatch({
    type: APPLY_COLLABORATE_SUCCESS,
    payload: requestToken
  });
}

export const login = (username, password) => async dispatch => {
  try {
    dispatch(apiLoading());
    const res = await axios.post(`${rootURL}/aflogger/login`,
      {
        username: username,
        password: password
      }
    );
    if (res.data) {
      localStorage.setItem('auth_token', res.data.auth_token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('request_token', res.data.request_token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      if (res.data.request_token) {
        const appRes = await axios.post(`${rootURL}/collaborate/apply-check`,
          {
            request_token: 34309
            // FIXME
            // request_token: res.data.request_token
          },
          {
            headers: {
              'Authorization': `Bearer ${res.data.auth_token}`
            }
          }
        );
        if (appRes.data.auth_token) {
          localStorage.setItem('app_token', appRes.data.auth_token);
          dispatch({
            type: APPLY_CHECK_SUCCESS,
            payload: appRes.data.auth_token
          });
        }
      }
      dispatch(apiSuccess());
    }
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE })
    dispatch(setAlert(err.message, 'danger'));
    dispatch(apiError());
  }
}

export const logout = (token) => async dispatch => {
  try {
    dispatch(apiLoading());
    const res = await axios.post(`${rootURL}/logout`,
      {},
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
    if (res.data) {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
      localStorage.removeItem('request_token');
      localStorage.removeItem('app_token');
      dispatch({ type: LOGOUT });
      dispatch(apiSuccess());
      history.push('/Home');
    }
  } catch (err) {
    dispatch(setAlert(err.message, 'danger'));
    dispatch(apiError());
  }
}
