import { useEffect, useMemo } from "react";
import { useRef } from "react";
import { useState } from "react"

function Counter () {
    const [count, setCount] = useState(0);
    const count3 = useRef(0);
    let count4 = 0;

    let result = useMemo(()=>{
        return 부하()
    },[count]);

    function 부하 () {
        let s = 0;
        for(let i = 0; i < 100000; i++){
            s += i;
        }
        return s;
    }

    const handleCount = ()=>{
        setCount(count+1)
        console.log(count)
    }
    const handleCount3 = ()=>{
        count3.current = count3.current + 1;
        console.log(count3)
    }
    const handleCount4 = ()=>{
        count4++;
        console.log(count4)
    }


    //useEffect!!!
    useEffect(()=>{
        console.log('count 감시되고 있습니다.', {count});
    }, [count])

    return (
        <>
            <h1> 계산결과 : {result} </h1>
            <div>{count}</div>
            <button type="button" onClick={handleCount}>count</button>

            <div>{count3.current}</div>
            <button type="button" onClick={handleCount3}>count3</button>

            <div>{count4}</div>
            <button type="button" onClick={handleCount4}>count4</button>
        </>
    )
}
export default Counter  