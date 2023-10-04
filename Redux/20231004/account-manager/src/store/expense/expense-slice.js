// slice = store라는 단일한 공간 안에서 별도의 공간을 만들기 위함임
import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: 'expenseSlice',

    initialState: {
        // 사용자의 지출 목록을 관리합니다.
        expenseList: [
            {
                name: 'coffee', 
                price: 5000 
            }, 
            { 
                name: 'icecreem',
                price: 1500 
            }
        ],
        income : 1000000,
    },

    reducers: { /* action.type이름 : reducer함수 (currentSlice(=state))=>{} */
        addExpenseAction: (currentSlice, action) => { // 이 함수 자체가 리듀서임
            // console.log('addExpenseAction')
            currentSlice.expenseList.push(action.payload)
        },
        setIncomeAction: (currentSlice, action)=>{
            // console.log('setIncomeAction',currentSlice.income)
            currentSlice.income = action.payload;
        }
    }

});

// 등록한 액션을 디스패치가 사용할 수 있도록 외부로 내보냅니다.
export const { addExpenseAction, setIncomeAction } = expenseSlice.actions;

// slice 에서 생성한 reducer들을 외부로 내보냅니다.
export default expenseSlice.reducer