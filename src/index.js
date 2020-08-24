import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const ADD = 'ADD';
const MINUS = 'MINUS';

// 상태 초기값 및 액션 타입에 따른 할 일 설정(reducer)
const countModifier = (count = 0, action) => {
  switch(action.type) {
    case ADD:
      return count + 1;
    
    case MINUS:
      return count - 1;
    
    default:
      return count;
  }
};

// 데이터 저장소 만들고, 액션 받을 함수 지정
const countStore = createStore(countModifier);

// 상태값 변경 시 해야할 일 지정
const onChange = () => {
  number.innerText = countStore.getState();
}

// modify 액션이 일어나는 dom 설정(type 프로퍼티로 이루어진 객체여야 함)
add.addEventListener("click", () => {countStore.dispatch({type: ADD})});
minus.addEventListener("click", () => {countStore.dispatch({type: MINUS})});

// store의 변화 감지 함수 부착
countStore.subscribe(onChange);