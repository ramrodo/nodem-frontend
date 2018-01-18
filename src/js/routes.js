import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import DemoPage from './pages/DemoPage';
import App from './pages/App';
import Apollo from './pages/Apollo';
import Nodem from './pages/Nodem';

export default params => (
  <ConnectedRouter history={params.history}>
    <Switch>
      <Route exact path="/app" component={App} />
      <Route path="/apollo" component={Apollo} />
      <Route path="/nodem" component={Nodem} />
      <Route path="/" component={DemoPage} />
    </Switch>
  </ConnectedRouter>);
