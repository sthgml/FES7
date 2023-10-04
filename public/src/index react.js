// 
import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';

//redux 용 import
import {createStore} from 'redux';
import rootReducer from './src/modules/index react';
import stockReducer from './components/stockCounter';

// 원래 있는 거     
const container = document.getElementById('root');
const root = createRoot(container);
// root.render(<App tab="home" />);

// 상태관리 위한 리덕스코드
const store = createStore(rootReducer);
store.getState() 
// > { goodsReducer : {goods : 1, stock: 10 },
//     stockReducer: {message : "on Sale!"} }

// > 모든 컴포넌트들이 store의 state에 접근할 수 있또록, 전역공간으로써 역할
import { Provider } from 'redux';
root.render(
        <Provider store={store}>
            <App/>
        <Provider/>
)