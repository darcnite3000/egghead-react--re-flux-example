import React from 'react';

import Router from 'react-router';
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;


import {App} from '../app';
import {Catalog} from '../catalog/app-catalog';
import {CatalogDetail} from '../product/app-catalogdetail';
import {Cart} from '../cart/app-cart';

export var routes = (
  <Route name="app" path="/" handler={App} >
    <Route name="cart" handler={Cart} />
    <Route name="item" path="item/:item" handler={CatalogDetail} />
    <DefaultRoute handler={Catalog} />
  </Route>
);