import { combineReducers } from 'redux';
import alertReducer from './alert';
import appReducer from './app';
import aflogReducer from './aflog';

export default combineReducers({
  alertState : alertReducer ,
  appState : appReducer,
  aflogState: aflogReducer
});
