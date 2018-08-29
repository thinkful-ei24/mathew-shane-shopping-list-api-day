'use strict';

const api = (function api() {
  console.log('api run');

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/mathew-shane';
  const BASE_URL_ITEMS = BASE_URL + '/items';

  const getItems = function( callback ) {
    $.getJSON(BASE_URL_ITEMS, callback);
  }

  const createItem = function( name, callback, errorCallback) {
    const newItem = JSON.stringify({name});

    $.ajax({
      url: `${BASE_URL_ITEMS}`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,
      error: errorCallback,
    })
  }

  const updateItem = function(id, updateData, callback ) {
    $.ajax({
      url: `${BASE_URL_ITEMS}/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: function() {
        callback(id, updateData);
        shoppingList.render();
      }

    })
  }

  const deleteItem = function (id, callback, errorCallback) {
    $.ajax({
      url: `${BASE_URL_ITEMS}/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      success: function() {
        callback(id);
        shoppingList.render();
      },
      error: errorCallback,
    })
  }

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
  }
})();
