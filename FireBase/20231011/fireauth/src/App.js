import Header from "./components/Header";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Join from './pages/join/Join';
import { useAuthContext } from "./hooks/useAuthContext";
import DiaryForm from "./pages/home/DiaryForm";

function App() {

const { isAuthReady, user } = useAuthContext();

  return (
    <>
      { isAuthReady ?
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={user ? <Home /> : <Navigate replace={true} to="/login" />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate replace={true} to="/" />} />
          <Route path='/' element={!user ? <Join /> : <Navigate replace={true} to="/" />} />
        </Routes>
      </BrowserRouter> :
      "loading"}
    </>
  );
}

export default App;
