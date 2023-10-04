import {useSelector} from 'react-redux';

function ExpenseTotal () {

    const {expenseList, income} = useSelector((store)=>{
        // console.log(store.expense.expenseList)
        // console.log(store.expense.income)
        return store.expense
    })

    const expenseTotal = expenseList.reduce((a,c)=> {
        // console.log('a가 뭘까', a)    
        // console.log('c가 뭘까', c.price)    
        return a + c.price 
    }, 0)
    const balance = income - expenseTotal;
    return (
        <>
            <h3>지출 총합</h3>
            <div>
                <span>총 지출:</span>
                <span>{ expenseTotal } 원</span>
            </div>
            <div>
                <span>잔액: </span>
                <span>{ balance }원</span>
            </div>
        </>
    )
}
export default ExpenseTotal
    