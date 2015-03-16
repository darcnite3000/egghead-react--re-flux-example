import React from 'react';
import _ from 'lodash';

import {store} from 'app/stores/app-store';
import {StoreListenMixin} from 'app/mixins/StoreListenMixin';

import Router from 'react-router';
const Link = Router.Link;

import {AddToCart} from '../catalog/app-addtocart';

function getItem(component) {
  var item = _.find(store.getCatalog(), {id: component.getParams().item});
  return {item};
}

export const CatalogDetail = React.createClass({
  mixins: [Router.State,StoreListenMixin(getItem)],
  render(){
    return (
      <div>
        <h2>{this.state.item.title}</h2>
        <img src={this.state.item.img} alt="" />
        <p>{this.state.item.description}</p>
        <p>${this.state.item.cost} <span className="text-success">{this.state.item.inCart && '(' + this.state.item.qty + ' in cart)'}</span></p>
        <div className="btn-group btn-group-xs">
          <AddToCart item={this.state.item} />
          <Link to="/" className="btn btn-default">Continue Shopping</Link>
        </div>
      </div>
    );
  }
});