import { useMemo } from "react";
import { useRef } from "react";
import { useState } from "react";

function App() {

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [userInfo, setUserInfo] = useState([])

  function getNum (list) {
    console.log('렌더링!')
    return list.length
  }
  const itemLength = useMemo(()=>{
    return getNum(userInfo);
  },[userInfo])

  const inputName = useRef(null);
  const inputId = useRef(null);

  function handleInputName (event) {
    setName(event.target.value)
    console.log('렌더링 -1')
  }

  function handleInputId (event) {
    setId(event.target.value)
    console.log('렌더링 -2')
  }

  function handleSubmit (event) {
    event.preventDefault();
    const newInfo = [...userInfo, {name, id}];
    setUserInfo(newInfo); //userInfo에 정보가 차곡차곡 쌓이는~

    inputName.current.value = '';
    inputId.current.value = ''; // 빈문자열로 초기화
    inputName.current.focus();
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="이름을 입력해주세요." onChange={handleInputName} ref={inputName}/>
        <input type="text" placeholder="아이디를 입력해주세요." onChange={handleInputId} ref={inputId}/>
        <button type="submit">제출하기</button>
      </form>
      
      <ul>
        {userInfo.map((v,i)=>{
          return (
            <li key={i}>
              <h3>이름: {v.name}</h3>
              <strong>아이디: {v.id}</strong>
            </li>
          )
        })}
      </ul>

      <span>{itemLength}</span>
    </>
  );
}

export default App;
