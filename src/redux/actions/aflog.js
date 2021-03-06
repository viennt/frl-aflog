import axios from 'axios';
import { setAlert } from './alert';
import { apiLoading, apiSuccess, apiError } from './app';
import { rootURL } from '../../utils/constants/apiUrl';

import {
  SET_CATEGORY,
  GET_ALL_AFLOGS,
  GET_AFLOGS_BY_CATEGORY,
  CLEAR_AFLOGS
} from './index';

// import data from '../../categories/dummyall';

const apiURL = `${rootURL}/web/aflogs`;

export const setCategory = (cat) => {
  return {
    type: SET_CATEGORY,
    payload: cat
  }
}
export const clearAflog = () => {
  return {
    type: CLEAR_AFLOGS,
  }
}

export const getAllAflogs = (page_count) => async dispatch => {
  try {
    dispatch(apiLoading());
    const res = await
      axios.get(`${apiURL}?page=${page_count}`);

    if (res.data) {
      dispatch({
        type: GET_ALL_AFLOGS,
        payload: res.data
        // payload: data
      });
      dispatch(apiSuccess());
    }

  } catch (err) {
    dispatch(setAlert(err.message, 'danger'));
    dispatch(apiError());
  }
}

export const getAflogsByCategory = (page_count , categoryId) => async dispatch => {
  try {
    dispatch(apiLoading());
    const res = await
      axios.get(`${apiURL}/category?id=${categoryId}&page=${page_count}`);

    if (res.data) {
      dispatch({
        type: GET_AFLOGS_BY_CATEGORY,
        payload: res.data
      });
      dispatch(apiSuccess());
    }

  } catch (err) {
    dispatch(setAlert(err.message, 'danger'));
    dispatch(apiError());
  }
}

export const emailContact = (data) => async dispatch => {
  try {
    dispatch(apiLoading());
    const res = await axios.post(`${apiURL}?message=${data}`);
    if (res) {
      dispatch(apiSuccess());}

  } catch (err) {
    dispatch(setAlert(err.message, 'danger'));
    dispatch(apiError());
  }
}
