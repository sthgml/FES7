import { useSelector, useDispatch } from 'react-redux'
import { setIncomeAction } from '../../store/expense/expense-slice';

function IncomeInput () {
    const income = useSelector((store) => store.expense.income);
    const dispatch = useDispatch()

    function setIncome (e) {
        dispatch(setIncomeAction(parseInt(e.target.value)))
    }

    return (
        <>
            <label htmlFor="input-Income"> 수입입력 </label>
            <input type="number" placeholder="ex) 1000000" onChange={setIncome} id='input-Income'/>
        </>
    )
}
export default IncomeInput