import WannaBe from "./components/WannaBe";
import GonnaDo from "./components/GonnaDo";
import Loading from "./components/Loading";
import FightingModal from "./components/FightingModal";
import { useState } from "react";
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
        format('woff');
    font-weight: 400;
    font-style: normal;
  } 

  body {
    background-color: pink;
    font-family: "Pretendard";
  }

  button {
        background-color: salmon;
        border: 0;
        box-shadow: inset -2px -2px 0 red;
        padding: 8px 64px;
        border-radius: 32px;
        font: inherit;
        font-weight: 500;
        color: white;
    }

  button:active{
      background-color: red;
      box-shadow: 0;
  }

  img {
    max-width: 60%;
  }
`

function App() {
  // 시간 계산
  const [major, setMajor] = useState('');
  const [hours, setHours] = useState(0);

  // 모달 여닫기
  const [modalOpen, setModalOpen] = useState(false);

  // 로딩 여닫기
  const [loading, setLoading] = useState(false);

  return (
    <>
      <GlobalStyle />
      <WannaBe setMajor={setMajor} setHours={setHours} setLoading={setLoading}/>

      { loading ? (<Loading setLoading={setLoading} />) : null }

      { hours && !loading ? (<GonnaDo major={major} hours={hours} modalOpen={modalOpen} setModalOpen={setModalOpen}/>) : null }

      { modalOpen ? (<FightingModal setModalOpen={setModalOpen}/>) : null }
    </>
  );
}

export default App;
