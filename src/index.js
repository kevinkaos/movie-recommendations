import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import App from './containers/app';
import ScrollToTop from './utils/scrollToTop';

import 'sanitize.css/sanitize.css';
import './index.scss';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ScrollToTop />
      <App />
    </ConnectedRouter>
  </Provider>,
  target
);
