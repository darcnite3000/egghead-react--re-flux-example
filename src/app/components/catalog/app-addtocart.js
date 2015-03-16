import React from 'react';

import {actions} from 'app/actions/app-actions';

export var AddToCart = React.createClass({
  handleClick(){
    actions.addItem(this.props.item);
  },
  render(){
    return <button className="btn btn-default" onClick={this.handleClick}>AddToCart</button>
  }
});

