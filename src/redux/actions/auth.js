import axios from "axios";
import { apiLoading, apiSuccess, apiError } from "./app";
import { rootURL } from '../../utils/constants/apiUrl';
import history from '../../utils/historyRoute';
import {
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './index';
import { setAlert } from './alert';

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
      dispatch({ 
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      history.push('/Profile');
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
      dispatch({ type: LOGOUT });
      dispatch(apiSuccess());
      history.push('/Home');
    }
  } catch (err) {
    dispatch(setAlert(err.message, 'danger'));
    dispatch(apiError());
  }
}
