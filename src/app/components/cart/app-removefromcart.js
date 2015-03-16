import React from 'react';
import {actions} from 'app/actions/app-actions';

export var RemoveFromCart = React.createClass({
  handleClick(){
    actions.removeItem(this.props.index);
  },
  render(){
    return <button onClick={this.handleClick}>x</button>
  }
});