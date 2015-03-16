import Reflux from 'reflux';

export var actions = Reflux.createActions(
  [
    'addItem',
    'removeItem',
    'increaseItem',
    'decreaseItem'
  ]
);