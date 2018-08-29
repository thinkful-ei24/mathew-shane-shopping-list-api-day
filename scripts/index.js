'use strict';
/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems( (items) => {
    items.forEach( (item) => store.addItem(item));
    shoppingList.render();

    const item = store.items[0];
console.log('current name: ' + item.name);
store.findAndUpdate(item.id, { name: 'foobartest' });
console.log('new name: ' + item.name);

  });
});

store.items.push(Item.create('apples'));

//Testing code

// api.getItems((items) => {
//   const item = items[0];

//   api.updateItem(item.id, { checked: 'word' }, () => {
//     console.log('updated!');
//   });
// });

