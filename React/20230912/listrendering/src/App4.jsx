import { useState } from "react";

function Item ({key, data, setData}) {//객체형태로 전달되기 때문에 이렇게 받으면 구조분해할당 되어 바로 사용가능
    function handleDel () {
        //데이터를 수정해줘요
        setData(data.filter(v=>{}))
    }
    return (
        <li>
            {/* //전달받은 데이터를 가지고 여기서 쓰면 됨 */}
            <p>안녕 라이캣 {data}호!</p>
            <button type="button" onClick={()=>handleDel()}>삭제</button>
        </li>
    )
}

function ItemList ({data, setData}) { //객체형태로 전달되기 때문에 이렇게 받으면 구조분해할당 되어 바로 사용가능
    console.log(data, setData)
    return (
        <ul>
            {/* 여기서 매개체 역할을 해서 list를 반복 생성하면서 배열 내 각각의 요소를 데이터로 전달해줌*/}
            {data.map((v,i)=>(<Item key={i} data={v} setData={setData}/>))}
        </ul>
    )
}

function App4 () {
    const [data,setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    return (
        <ItemList data={data} setData={setData}/>
    )
}
export default App4