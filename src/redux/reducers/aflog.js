
import {
  SET_CATEGORY,
  GET_ALL_AFLOGS,
  GET_AFLOGS_BY_CATEGORY
} from '../actions/index';

const initialState = {
  category : null,
  Aflogs : [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: payload
      }
    case GET_ALL_AFLOGS:
      return {
        ...state,
        Aflogs: payload
      }
    case GET_AFLOGS_BY_CATEGORY:
      return {
        ...state,
        Aflogs: payload
      };
      
    default:
      return state;
  }
};