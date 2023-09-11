import React, { useState } from 'react'
import App from "./App";

function App2 () {

    const [msg, setMsg] = useState('')
    function handleOnMouseEnter () {
        setMsg("안녕하세요~!")
    }

    function handleOnMouseLeave () {
        setMsg("안녕히가세요~~~!")
    }

    return (
        <>
        <div>
            <p onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                {msg || "마우스를 올려보세요!"}
            </p>
        </div>
        </>
    )
}
export default App2