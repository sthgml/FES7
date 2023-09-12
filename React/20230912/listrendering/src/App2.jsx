import { useState } from "react";

function App2 () {
    
    let [data, setData] = useState([
        {
            title: "개발자 무릎 담요",
            price: 17500,
            id: 101,
        },
        {
            title: "Hack Your Life 개발자 노트북 파우치",
            price: 29000,
            id: 102,
        },
        {
            title: "우당탕탕 라이켓의 실험실 스티커북",
            price: 29000,
            id: 103,
        },
        {
            title: "버그를 Java라 버그잡는 개리씨 키링",
            price: 29000,
            id: 104,
        },
    ]); 

    //이걸 개선
    // const handleDelete = (id) => {
    //     setData(data.filter(v=>v.id!==id))
    // }

    //함수형업데이트
    //콜백함수의 인자에 이전의 상태가 들어가는 것을 리액트가 보장합니다.
    const handleDelete = (id) => {
        setData((prevData)=>prevData.filter(v=>v.id!==id))
    }
    return (
        <ul>
        {data.map((item) => {
            return (
                <li key={item.id}>
                    <h2>{item.title}</h2>
                    <strong>{item.price}</strong>
                    <button type="button" onClick={() => handleDelete(item.id)}>삭제하기</button>
                </li>
            )
        })}
    </ul>
    )
}
export default App2