import React from 'react';

import Router from 'react-router';
const Link = Router.Link;

import {store} from 'app/stores/app-store';
import {StoreListenMixin} from 'app/mixins/StoreListenMixin';

function getTotals() {
  return store.getCartTotals();
}

export const CartSummary = React.createClass({
  mixins: [StoreListenMixin(getTotals)],
  render(){
    return (
      <div>
        <Link to="cart" className="btn btn-success">Cart Items: {this.state.qty} / ${this.state.total}</Link>
      </div>
    );
  }
});