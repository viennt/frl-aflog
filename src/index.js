import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import * as serviceWorker from './serviceWorker';
import App from './App';
const browserHistory = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
