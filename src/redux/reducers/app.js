import { SET_APP_STATUS, SET_LIGHT_BOX } from '../actions';

const initialState = {
  apiLoading: false,
  apiError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_APP_STATUS:
      return { ...state, ...payload };
    case SET_LIGHT_BOX:
      localStorage.setItem('lightbox', payload.token)
      return {...state }
    default:
      return state;
  }
};