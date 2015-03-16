import React from 'react';

import Reflux from 'reflux';
import {store} from 'app/stores/app-store';
import {StoreListenMixin} from 'app/mixins/StoreListenMixin';

import {CatalogItem} from './app-catalogitem';

function getItems() {
  return {
    items: store.getCatalog()
  }
}

export var Catalog = React.createClass({
  mixins: [StoreListenMixin(getItems)],
  render(){
    var items = this.state.items.map((item,i)=> {
      return <CatalogItem key={i} item={item} />
    });
    return (
      <div className="row">
      {items}
      </div>
    );
  }
});