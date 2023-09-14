import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
      </Routes>
      {/* 브라우저라우터 : 실제로는 페이지가 하나지만 검색엔진이 검색해서 볼때는 페이지가 여러개인 것처럼 인식을 하게 됩니다. 문이 두개임! 모건님집! */}
    </BrowserRouter>
    
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One(){
  return <h1>hello world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

export default App;