import React from "react";

let guest = 0;

function Cup () {
    guest +=1;
    console.log()
    return (
        <>
            <p>
                {guest}번 손님을 위한 컵입니다.
            </p>
        </>
    )
    }

function App3 (){
    return (
        <>
        <Cup />
        <Cup />
        <Cup />
        <Cup />
        <Cup />
        <Cup />
        <Cup />
        <Cup />
        </>
    )
}

export default App3