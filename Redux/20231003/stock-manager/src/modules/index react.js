// 리액트에서 진행하기
// npm i react-redux
// package.json 가서 확인해보기
// src/modules 안의 index.js 임
import goodsReducer from "../store/goodsCounter";
import stockReducer from "../store/stockCounter";
import {combineReducer} from "redux";;

const rootReducer = combineReducers({
    goodsReducer,
    stockReducer
})

export default rootReducer;