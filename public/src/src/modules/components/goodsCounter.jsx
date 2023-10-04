//
import { addNumber, subNumber } from "../../../components/goodsCounter";

export default function GoodsCounter () {
    // 스토어의 상태값에 접근하도록 하는 리액트 훅
    const {stock, goods} = useSelector((state)=>{
        // state = store에서 리하는 값이 드감
        return {
            stock : state.goodsReducer.stock,
            goods : state.goodsReducer.goods,
        }
    })

    const dispatch = useDispatch();
    const onSubNumber = () => {dispatch(subNumber())} // addNumber를 실행()하면 리턴되는 것은 action 객체
    const onAddNumber = () => {dispatch(addNumber())} //  modules폴더 바깥에 있는 goodsCounter.jsx에 선언되어있음

    return (
        <>
            <h1>Product Detail</h1>
            <h2>프론트엔드 개발자 전동 칫솔</h2>
            <span><strong>17,500</strong></span>
            <div id="counter">
                <button type="button" id="minus" onClick={onSubNumber} disabled={goods > 0 ? false: true}>minus</button>
                <span id="number">{goods}</span>
                <button type="button" id="plus" onClick={onAddNumber} disabled={stock > 0 ? false: true}>plus</button>

            </div>
            <div>총 수량 <strong id="quantity">{goods}</strong></div>
            <div><strong id="total">{goods * 17500}</strong>원</div>
            <div>
               재고 <strong>{stock}</strong>
            </div>
        </>
    )
}