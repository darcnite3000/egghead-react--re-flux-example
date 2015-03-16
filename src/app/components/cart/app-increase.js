import React from 'react';
import {actions} from 'app/actions/app-actions';

export var Increase = React.createClass({
  handleClick(){
    actions.increaseItem(this.props.index);
  },
  render(){
    return <button onClick={this.handleClick}>+</button>
  }
});