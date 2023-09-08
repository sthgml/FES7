import './App.css'

function App() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  console.log(year, month, date, hour, min, sec)
  return ( // 이 밑에서부터는 JSX문법을 사용해야 함. 주석도 //로 안됨 
  //시작은 html 태그가 가장 바깥에 있어야ㅎ함
    <div className="App">
      {/*이렇게 해야됨; */} 
      <p>hello!</p>
      <h1 className='newClass'>hi Licat</h1>
      <input type="text" disabled/>
      {/* style속성에 전달되는 값이 자바스크립트의 객체. 라서 객체를 표시하는 중괄호와 자바스크립트를 표시하는 중괄호가 이중으로 들가야함 */}
      <div style={{"background-color":"red"}}>
        hello 
      </div>
      {/* jsx안에서는 bg-c 의 -를 사용할 수 없어요 왤까요
      class 도 className으로 쓰는 이유는 js class랑 헷갈릴까봐 
      js의 변수로 선언할 수 없었던 규칙 - 특수문자 $_ 만, 숫자로 시작x, 예약어 (class!!)x, */}

      <textarea readOnly maxLength={"3"} style={{"backgroundColor" : "blue;"}}/>
      {/* textarea 원래 닫는태그 있는데 여기선 없어도됨.. */}

      div<div>
        <p>년 : {year}</p>
        <p>월/일 : {month}/{date}</p>
        <p>시간 : {hour}시 {min}분 {sec}초</p>
        
      </div>
    </div>
  );
}

export default App;
