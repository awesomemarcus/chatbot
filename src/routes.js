import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import configureStore from './store/configureStore';

import Main from './core/components/Main';

export const store = configureStore();

const Routes = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/">
        <IndexRoute component={Main} />
        </Route>
      </Router>
    </Provider>
  )
}

export default Routes;
