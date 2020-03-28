
import {
  SET_CATEGORY,
  GET_ALL_AFLOGS,
  GET_AFLOGS_BY_CATEGORY,
  CLEAR_AFLOGS
} from '../actions/index';

const initialState = {
  error : '',
  hasMore : true,
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
        Aflogs: [...state.Aflogs , ...payload],
        hasMore : payload.length === 0 ?  false : true
      }
    case GET_AFLOGS_BY_CATEGORY:
      return {
        ...state,
        Aflogs: [...state.Aflogs , ...payload],
        hasMore : payload.length === 0 ? false : true
      };
    case CLEAR_AFLOGS :
      return{
        ...state,
        Aflogs:[],
        hasMore : true
      }  
    default:
      return state;
  }
};