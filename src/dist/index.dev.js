"use strict";

var _redux = require("redux");

var add = document.getElementById('add');
var minus = document.getElementById('minus');
var number = document.querySelector('span');
var ADD = 'ADD';
var MINUS = 'MINUS'; // 상태 초기값 및 액션 타입에 따른 할 일 설정(reducer)

var countModifier = function countModifier() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD:
      return count + 1;

    case MINUS:
      return count - 1;

    default:
      return count;
  }
}; // 데이터 저장소 만들고, 액션 받을 함수 지정


var countStore = (0, _redux.createStore)(countModifier); // 상태값 변경 시 해야할 일 지정

var onChange = function onChange() {
  number.innerText = countStore.getState();
}; // modify 액션이 일어나는 dom 설정(type 프로퍼티로 이루어진 객체여야 함)


add.addEventListener("click", function () {
  countStore.dispatch({
    type: ADD
  });
});
minus.addEventListener("click", function () {
  countStore.dispatch({
    type: MINUS
  });
}); // store의 변화 감지 함수 부착

countStore.subscribe(onChange);