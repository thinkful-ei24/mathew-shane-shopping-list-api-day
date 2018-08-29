'use strict';

const api = (function api() {
  console.log('api run');

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/mathew-shane';
  const BASE_URL_ITEMS = BASE_URL + '/items';

  const getItems = function( callback ) {
    $.getJSON(BASE_URL_ITEMS, callback);
  }

  const createItem = function( name, callback ) {
    const newItem = JSON.stringify({name});

    $.ajax({
      url: `${BASE_URL_ITEMS}`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback
    })
  }

  const updateItem = function(id, updateData, callback) {
    $.ajax({
      url: `${BASE_URL_ITEMS}/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback,
    })
  }

  // const callback = function(data) {
  //   console.log(data);
  // }

  return {
    getItems,
    createItem,
    updateItem,
  }
})();
