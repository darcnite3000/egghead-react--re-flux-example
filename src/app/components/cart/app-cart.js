import React from 'react';

import Reflux from 'reflux';
import {store} from 'app/stores/app-store';

import Router from 'react-router';
const Link = Router.Link;

import {RemoveFromCart} from './app-removefromcart';
import {Increase} from './app-increase';
import {Decrease} from './app-decrease';

export var Cart = React.createClass({
  mixins: [Reflux.connect(store)],
  render(){
    var total=0;
    var items = this.state.cart.map((item,i)=> {
      var subtotal = item.cost*item.qty;
      total += subtotal;
      return (
        <tr key={i}>
          <td><RemoveFromCart index={i} /></td>
          <td>{item.title}</td>
          <td>{item.qty}</td>
          <td>
            <Increase index={i} />
            <Decrease index={i} />
          </td>
          <td>${subtotal}</td>
        </tr>
      );
    });
    return (
      <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Qty</th>
            <th></th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
        {items}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-right">Total</td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
      <Link to="/">Continue Shopping</Link>
      </div>
    );
  }
});