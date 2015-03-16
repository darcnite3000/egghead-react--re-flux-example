import React from 'react';

import Router from 'react-router';
const RouteHandler = Router.RouteHandler;

import {Header} from './header/app-header';

export var App = React.createClass({
  render(){
    return (
      <div className="container">
        <Header />
        <RouteHandler />
      </div>
    );
  }
});


