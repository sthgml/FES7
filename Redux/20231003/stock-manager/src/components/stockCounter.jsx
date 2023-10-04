import { useEffect } from "react";
import { sale, soldout } from "../../../components/stockCounter";

function StockCounter () {

    const { message } = useSelector((state)=>{ // store 에 접근하는 hook
        return {
            message: state.StockCounter.message,
        }    
    })

    // 이 스톡이 0이 되었을 때 상태를 바꿔줘야돼
    const {stock} = useSelector((state)=>{
        // state = store에서 리하는 값이 드감
        return {
            stock : state.goodsReducer.stock,
        }
    })
    const dispatch = useDispatch();
    // const onSale = dispatch(sale());
    // const soldOut = dispatch(soldout());
    
    // 내가 몰랐던 것 -> 스톡 값이 변경되었는지 감시하는 hook, useEffect사용법
    useEffect(()=>{
        if(stock <= 0){
            dispatch(soldOut());
        }else{
            dispatch(onSale())
        }
    }, [stock])

    return (
        <div>
            {message}
        </div>
    )

}

export default StockCounter