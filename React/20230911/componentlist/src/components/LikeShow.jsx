import { useState } from 'react'
//default로 export되는 함수가 아니라 function 앞에 export써서 export된 함수들은 이렇게 괄호를 쳐서 import함

// 실습 : Like 없애기
function LikeShow () {

    let [like, setLike] = useState("Like");

    function hide () {
        if(like == ''){
            setLike("Like");
        }else{
            setLike("")
        }
    }

    return (
        <>
            <button onClick={hide}>
                Like
            </button>
            {like}
        </>
    )
}

export default LikeShow