// 노드 환경에서 진행하기
// npm i redux 
import { createStore } from 'redux';

const plus = document.getElementById("plus"); // 추가 버튼
const minus = document.getElementById("minus"); // minus button
const number = document.getElementById("number"); // 화면에 표시되는 숫자
const quantity = document.getElementById("quantity"); 
const totalPrice = document.getElementById("total") // strong tag

const PRICE = 17500;

function cntReducer(state = 0, action){
    switch(action.type){
        case 'ADD':
            return state + 1;
        case 'SUBTRACT':
            return state - 1;
        default :
            return state;
    }
}

const store = createStore(cntReducer)

let cnt = 0;

// const updateResult = (c) => {
    // number.textContent = cnt;
    // quantity.textContent = c; // 함수로 받은 인자를 물량 태그 내 html에 넣기
    // totalPrice.textContent = c * PRICE; 
// }

const addNumber = () => {
    // cnt++;
    minus.disabled = false;
    // updateResult(cnt); 
    store.dispatch({ type: 'ADD'});
}

const subNumber = () => {
    // cnt--;
    plus.disabled = false;
    // updateResult(cnt);
    store.dispatch({ type: 'SUBTRACT' })
}

// number.textContent = cnt;
// updateResult(cnt);

const handleWrite = () => {
    // render function
    // state value bring draw the screen
    number.textContent = store.getState();
    quantity.textContent = store.getState();

    totalPrice.textContent = store.getState() * PRICE;
}
store.subscribe(handleWrite);

plus.addEventListener('click', addNumber);
minus.addEventListener('click', subNumber);

