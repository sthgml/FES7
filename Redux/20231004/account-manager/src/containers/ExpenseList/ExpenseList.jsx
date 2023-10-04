import {useSelector} from 'react-redux'
import List from '../../components/List/List'

function ExpenseList () {

    const expenseList = useSelector((store)=>{
        // console.log(store.expense.expenseList)
        return store.expense.expenseList
    })

    return (
        <>
            <h3 className='a11y-hidden'>지출 목록</h3>
            <ul className="expense-list flex-col">
                <List item={expenseList}/>
            </ul>
        </>
    )
}
export default ExpenseList