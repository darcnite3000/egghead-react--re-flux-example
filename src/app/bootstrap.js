import React from 'react';
import Router from 'react-router';
import {routes} from './components/router/app-routes';

Router.run(routes, Handler => {
  React.render(<Handler />, document.getElementById('main'));
});