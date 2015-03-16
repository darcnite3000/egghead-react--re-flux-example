import React from 'react';
import {actions} from 'app/actions/app-actions';

export var Decrease = React.createClass({
  handleClick(){
    actions.decreaseItem(this.props.index);
  },
  render(){
    return <button onClick={this.handleClick}>-</button>
  }
});