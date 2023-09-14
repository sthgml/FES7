import styled, { css } from "styled-components";
import React from "react"; 

const One = css`
    width: 100px;
    background-color: red;
`
const BtnStyle = styled.button` //styled 객체 뒤에 클래스명
    ${One}
    color: white;
    background-color: royalblue;
    box-sizing: border-box;
`

const BtnStyle2 = styled(BtnStyle)`
    color: black;
    border-radius: 15px;
    border: 0;
`
const BtnStyle3 = styled(BtnStyle2)`
    background-color: #cae4a3;
    color: white;
`

function App6 () {
    return (
        <>
            <BtnStyle>안뇽</BtnStyle>
            <BtnStyle2>안뇽</BtnStyle2>
            <BtnStyle3>안뇽</BtnStyle3>
        </>
    )
}
export default App6

// import React from "react";
// import styled from "styled-components"

// const Btn = styled.button`
//     background-color: blue;
//     color: white;
// `
// // Btn 스타일드컴포넌트를 확장! styled(확장하고싶은컴포넌트)
// const Btn2 = styled(Btn)`
//     color: black;
//     border-radius: 5px;
//     border: none;
// `
// const Btn3 = styled(Btn2)`
//     color: white;
//     background-color: green;

// `


// const App = () => {
//     return (
//         <>
//         <Btn>버튼1</Btn>
//         <Btn2>버튼2</Btn2>
//         <Btn3>버튼3</Btn3>
//         </>
//     );
// };
  
// export default App;