import React from 'react';
import Reflux from 'reflux';
import {store} from 'app/stores/app-store';

export const StoreListenMixin = function(cb) {
  return {
    mixins: [Reflux.ListenerMixin],
    getInitialState(){
      return cb(this);
    },
    _onChange(){
      this.setState(cb(this));
    },
    componentDidMount(){
      this.listenTo(store, this._onChange);
    },
  }
}