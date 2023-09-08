// import React from "react";

function ReactFragment () {
    const data = [
        1,2,3,4,5,6
    ]
    const myArr = data.map((item)=>{
        {/* <React.Fragment /> */}<>
            <dt>숫자</dt>
            <dd>{item}</dd></>
        {/* <React.Fragment /> */}
    })

    return (
        <div>
            {/* <React.Fragment /> */}<>
                <h1>헬로 라이캣</h1>
                <h1>안녕 하냐교ㅗ~~!</h1></>

                <dl>
                    {myArr}
                </dl>
            {/* <React.Fragment /> */}
        </div>
    );
}

export default ReactFragment