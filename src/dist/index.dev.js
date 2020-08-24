"use strict";

var _redux = require("redux");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var form = document.querySelector('form');
var input = document.querySelector('input');
var ul = document.querySelector('ul');
var ADD_TODO = "ADD_TODO";
var DELETE_TODO = "DELETE_TODO";

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_TODO:
      // NEVER MUTATE STATE
      return [].concat(_toConsumableArray(state), [{
        text: action.text,
        id: Date.now()
      }]);

    case DELETE_TODO:
      return [];

    default:
      return state;
  }
};

var store = (0, _redux.createStore)(reducer);
store.subscribe(function () {
  console.log(store.getState());
});

var onSubmit = function onSubmit(e) {
  e.preventDefault();
  var toDo = input.value;
  input.value = "";
  store.dispatch({
    type: ADD_TODO,
    text: toDo
  });
};

form.addEventListener('submit', onSubmit);