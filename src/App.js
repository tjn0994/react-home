import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import HomeComponent from './components/Home';
import FormUser from './containers/User/Form';
import { store } from './store';
import history from './services/RoutingService';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={HomeComponent} exact />
            <Route path="/users/new" component={FormUser} exact />
            <Route path="/users/:id/edit" component={FormUser} exact />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
