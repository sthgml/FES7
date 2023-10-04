// 액션객체를 생성하는 함수
export const addNumber = () => {
    return {type:'ADD'}
}

export const subNumber = () =>{
    return {type: "SUBTRACT"}
}

// 초기 상태값
const initState = {
    stock: 10,
    goods: 1
}

const goodsReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                stock: state.stock - 1,
                stock: state.goods + 1
            };
        case "SUBTRACT":
            return {
                ...state,
                stock: state.stock + 1,
                stock: state.goods - 1
            };
        default:
            return;
            
    }
}

export default goodsReducer;