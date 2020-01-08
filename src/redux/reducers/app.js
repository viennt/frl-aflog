import { SET_APP_STATUS} from '../actions';

const initialState = {
  apiLoading: false,
  apiError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_APP_STATUS:
      return { ...state, ...payload };

      default:
      return state;
  }
};