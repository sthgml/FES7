// 리액트에서 진행하기
// npm i react-redux
// package.json 가서 확인해보기
// src/modules 안의 index.js 임
import goodsReducer from "../../components/goodsCounter";
import stockReducer from "../../components/stockCounter";
import {combineReducer} from "redux";;

const rootReducer = combineReducers({
    goodsReducer,
    stockReducer
})

export default rootReducer;