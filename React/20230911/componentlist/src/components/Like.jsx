import { useState } from "react"
function Like () {
    // let like = 0;

    // console.log(useState(0))
    let [like, setLike] = useState(0) // useState에 전달되는 값= 초기값
    //setLike에 할당되는 것은 like를 변경시킬 수 있는 함수


    function clickLike () {
        setLike(like+1)
        // console.log(like)
    }

    return (
        <>
        <button onClick={clickLike}>
            ❤ {like}
        </button>
        </>
    )
}

export default Like;

// 특정 변수가 변할때마다 컴포넌트를 업데이트 하도록 하고 싶어요!! 
// ex) 좋아요 수가 올라갈 때마다 버튼 옆의 숫자를 바꾸고 싶어요
// >> 이럴 때 사용하는 것이 useState()