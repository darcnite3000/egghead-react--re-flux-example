import Reflux from 'reflux';
import faker from 'faker';

import {actions} from 'app/actions/app-actions';

var catalog = [];
for (var i = 1; i < 9; i++) {
  catalog.push({
    id: `Widget ${i}`,
    title: faker.company.bsNoun(),
    summary: faker.company.bsBuzz(),
    img: faker.image.imageUrl(150,150),
    description: faker.lorem.paragraph(),
    cost: i
  });
};

var cart = [];

export var store = Reflux.createStore({
  listenables: [actions],
  init(){
    this.data = {cart};
  },
  getInitialState(){
    return this.data;
  },
  getCatalog(){
    return catalog;
  },
  getCartTotals(){
    var qty = 0,
        total = 0;
    this.data.cart.forEach(item => {
      qty+=item.qty;
      total+=item.qty*item.cost;
    })
    return {qty,total};
  },
  onAddItem(item){
    console.log('addItem:',item);
    if(!item.inCart){
      item['qty'] = 1;
      item['inCart'] = true;
      this.data.cart.push(item);
      this.trigger(this.data);
    }else{
      this.data.cart.forEach((cartItem, i)=> {
        if(cartItem.id === item.id){
          this.onIncreaseItem(i);
        }
      })
    }
  },
  onRemoveItem(index){
    console.log('removeItem:',index);
    this.data.cart[index].inCart = false;
    this.data.cart.splice(index,1);
    this.trigger(this.data);
  },
  onDecreaseItem(index){
    console.log('descreaseItem:',index);
    if(this.data.cart[index].qty > 1){
      this.data.cart[index].qty-=1;
      this.trigger(this.data);
    }else{
      this.onRemoveItem(index);
    }
  },
  onIncreaseItem(index){
    console.log('increaseItem:',index);
    this.data.cart[index].qty+=1;
    this.trigger(this.data);
  }
});