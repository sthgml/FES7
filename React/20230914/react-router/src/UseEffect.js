import {useState, useEffect} from 'react'

function Counter (){
  const [count, setCount] = useState(0)
  const handleCountUp = (e) => {
    setCount(count + 1)
  }
  useEffect(()=>{
    if(count%2 ===0){
        alert('짝수입니다')
    }else{
        alert("홀수입니다")
    }
  },[])
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;