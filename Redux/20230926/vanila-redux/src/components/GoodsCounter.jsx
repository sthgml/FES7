import { useDispatch, useSelector } from 'react-redux'
import { addNumber } from '../modules/goodsCounter';

export default function GoodsCounter () {

    const {stock, goods} = useSelector((state)=>{
        return {
            // stock과 goods를 여기서꺼내서 사용하려고합니다.
            stock : state.goodsReducer.stock,
            goods : state.goodsReducer.goods
        }
    })
    const dispatch =  useDispatch();
    const onSubtractNumber = () => {}
    const onAddNumber = () => {dispatch(addNumber())}

    return (
        <>
            <h1>Product Detail</h1>
            <h2>딥러닝 개발자 무릎 담요</h2>
            <span><strong>17,500</strong>원</span>
            <div id="counter-box">
                <button type="button" id="minus" onClick={onSubtractNumber}>MINUS</button>
                <span id="number">{goods}</span>
                <button type="button" id="plus" onClick={onAddNumber}>PLUS</button>
            </div>
            <div>총 수량 <strong id="quantity">{goods}</strong></div>
            <div><strong id="total">{goods*17500}</strong>원</div>
        </>
    )
}
