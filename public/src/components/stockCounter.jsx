// 상품이 다 선택이 되어서 품절인지 아닌지~~
// 사실 case 추가해도 되는데
// reducer 함수 분리하는 법을 알려주기 위해서!

export const sale = () => {
    return { type : "SALĘ"}
}

export const soldout = () => {
    return { type: "SOLD_OUT"}
}

const initState = {
    message : "on Sale!"
}

const stockReducer = (state=initState, action) => {
    switch (action.type){
        case "SALE" :
            return {
                ...state,
                message: "on Sale!"
            }
        case "SOLD_OUT" :
            return {
                ...state,
                message: "THANK YOU! it's sold out!!"
            }
    }

}

export default stockReducer;