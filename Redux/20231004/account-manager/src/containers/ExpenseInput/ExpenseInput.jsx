//
import {useDispatch} from 'react-redux'
import { addExpenseAction } from '../../store/expense/expense-slice';
import { useState } from 'react';

function ExpenseInput () {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    function submitHandle (e) {
        e.preventDefault();
        dispatch(addExpenseAction({name, price}));
    }

    return (
        <form onSubmit={submitHandle} className='new-expense flex-row' >
            <h3 className='a11y-hidden'>새로운 지출 상품 입력하기</h3>
            <div className='flex-row'>
                
                    <div className='flex-col'>
                        <label htmlFor="nameItem">지출내용</label>
                        <input type="text" placeholder="예: 사과" onChange={(e)=>setName(e.target.value)} id='nameItem'/>
                        
                    </div>
                
                    <div className='flex-col'>
                        <label htmlFor="priceItem">금액</label>
                        <input type="text" placeholder="예: 5000" onChange={(e)=>setPrice(parseInt(e.target.value))} id='priceItem'/>
                    </div>
                
            </div>
            <button type="submit">추가</button>
        </form>
    )
}

export default ExpenseInput