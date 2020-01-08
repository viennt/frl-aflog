import { SET_APP_STATUS } from './index';

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
