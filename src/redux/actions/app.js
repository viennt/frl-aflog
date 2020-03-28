import { SET_APP_STATUS, SET_LIGHT_BOX } from './index';

export const apiLoading = () => ({
  type: SET_APP_STATUS,
  payload: {
    apiLoading: true
  }
});

export const apiSuccess = () => ({
  type: SET_APP_STATUS,
  payload: {
    apiLoading: false,
    apiError: false
  }
});

export const apiError = () => ({
  type: SET_APP_STATUS,
  payload: {
    apiLoading: false,
    apiError: true
  }
});

export const setLightBox = (payload) => ({
  type: SET_LIGHT_BOX,
  payload,
});
