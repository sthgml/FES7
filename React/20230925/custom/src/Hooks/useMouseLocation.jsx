import { useState, useEffect } from "react"

function useMouseLocation (initVal) {
    const [mouseLocation, setMouseLocation ] = useState(initVal || {x: null, y: null});
    //초기값을 사용자가 전달하지 않는경우를 배제하기 위해서 초기값을 훅에서 초기화 해줍시다.
    // 앞의 initVal 변수가 undefined라면 첫번째 truthy or 마지막 falsy 값을 반환
    // function onMouseMove(e){
    //     // console.log(e.clientX)
    //     setMouseLocation({x: e.clientX, y: e.clientY})
    // }

    useEffect(()=>{
        window.addEventListener("mousemove", (e) => {
            setMouseLocation({x: e.x, y: e.y})
        })
    })
    

    return mouseLocation;
}
export default useMouseLocation