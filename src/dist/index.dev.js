"use strict";

var _redux = require("redux");

var input = document.querySelector('input');
var btn = document.querySelector('button');
var ul = document.querySelector('ul');

var ADD_TODO = function ADD_TODO() {
  return {
    type: 'ADD_TODO'
  };
};

var DELETE_TODO = function DELETE_TODO() {
  return {
    type: 'DELETE_TODO'
  };
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [];

    case DELETE_TODO:
      return [];

    default:
      return state;
  }
};

var store = (0, _redux.createStore)(reducer);

var onChange = function onChange(e) {
  var value = e.target.value;
};

var onClick = function onClick() {
  store.dispatch(ADD_TODO);
};

input.addEventListener('change', onChange);
btn.addEventListener('click', onClick);