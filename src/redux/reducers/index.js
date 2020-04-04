import { combineReducers } from 'redux';
import alertReducer from './alert';
import appReducer from './app';
import aflogReducer from './aflog';
import authReducer from './auth';

export default combineReducers({
  alertState : alertReducer ,
  appState : appReducer,
  aflogState: aflogReducer,
  authState: authReducer
});
