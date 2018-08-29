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



//Testing code

// api.getItems((items) => {
//   const item = items[0];

//   api.updateItem(item.id, { checked: 'word' }, () => {
//     console.log('updated!');
//   });
// });

