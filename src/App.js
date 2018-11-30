import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import HomeComponent from './components/Home';
import FormUser from './containers/User/Form';
import { store, persistor } from './store';
import history from './services/RoutingService';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Switch>
              <Route path="/" component={HomeComponent} exact />
              <Route path="/users/new" component={FormUser} exact />
              <Route path="/users/:id/edit" component={FormUser} exact />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
