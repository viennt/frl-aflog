import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Router } from 'react-router-dom';
import browserHistory from './utils/historyRoute';

import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
