'use strict';
/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems( (items) => {
    items.forEach( (item) => store.addItem(item));
    shoppingList.render();
  });
});

store.items.push(Item.create('apples'));

//Testing code
// api.getItems(function(data) {
//   console.log(data);
// });

//console.log(api.BASE_URL);
api.createItem('pears2', (newItem) =>{
  api.getItems( (items) => {
    console.log(items);
  });
});

