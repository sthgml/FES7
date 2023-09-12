import { useState } from "react";

function Counter () {
    const [count,setCount]= useState(0);

    function increment () {
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
    }

    function decrement () {
        setCount(count-1)
    }

    return (
        <>
        <button onClick={increment}>+1</button>
        <h2>{count}</h2>
        <button onClick={decrement}>-1</button>
        </>
    )
}
export default Counter