
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import App from './containers/App';
import Page from './containers/Page';
import configure from './store';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/page" component={Page} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
