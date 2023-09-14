// // import React from "react";
// // import styled from "styled-components"; //import styled componenets

// // const ContentDiv = styled.div`
// //   margin: 40px;
// // `;

// // const ContentH2 = styled.h2`
// //   width: 200px;
// //   margin: 0 auto;
// //   text-align: center;
// // `;


// // const App = () => {
// //     return (
// //         <ContentDiv>
// //             <ContentH2>Q&A</ContentH2>
// //             <p>
// //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
// //                 corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
// //                 aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
// //                 Nemo, ullam.
// //             </p>
// //         </ContentDiv>
// //     );
// // };

// // export default App;

// import React from "react";
// import styled from "styled-components";

// const ContentDiv = styled.div`
//   margin: 40px;
// `;

// //함수를 실행해서 스타일을 만들게됨!
// const ContentH2 = styled.h2`
//   width: 200px;
//   margin: 0 auto;
//   text-align: center;
//   color: red;
// `;

// const App = () => {
//     return (
//         <ContentDiv>
//             <ContentH2>Q&A</ContentH2>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
//                 corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
//                 aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
//                 Nemo, ullam.
//             </p>
//             <Hello/>
//         </ContentDiv>
//     );
// };

// function Hello(){
//   return <h2>hello world</h2>
// }

// export default App;

import React from "react";
import styled from "styled-components";

const ContentOne = styled.div`
    margin: 40px;
`;

const ContentTwo = styled.div`
    color:red;
`;

const ContentThree = styled(ContentTwo)`
    border: 1px solid black;
`

function App4() {
    return (
        <div>
            <ContentOne>hello world</ContentOne>
            <ContentTwo>hello world</ContentTwo>
            <ContentThree>hello world</ContentThree>
        </div>
    );
}

export default App4;