import { BrowserRouter, Routes, Route, useParams, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/> 
            <Route path="/cart" element={<Cart/>}/> 
            {/* //users */}
            <Route path="/users/*" element={<Outlet/>}> {/* 엘멘 프롭스는 일단은 유저스를.. =>>> 넣었다가, 아웃렛으로 바꿯는데 이것은 자식으로 있는 컴포들을 꺼내서 보여주는 컴포넌트임!!!!*/}
                <Route path="" element={<Users/>}/> 
                <Route path="coupon" element={<CouponPage/>}/> 
                <Route path="quetion" element={<QuestionPage/>}/> 
                <Route path="notice" element={<NoticePage/>}/> 
            </Route> 
            
            {/* //products */}
            <Route path="/products/:id" element={<ProductDetailPage/>}/> 
            <Route path="/products/:id/notice" element={<ProductDetailNoticePage/>}/> 
        </Routes>
    </BrowserRouter>
  );
}
function ProductDetailNoticePage () {
    const {id} = useParams();
    return <h1>{id}번 상품 NoticePage 환영합니다.</h1>
}
function NoticePage () {
    return <h1>NoticePage 환영합니다.</h1>
}
function QuestionPage () {
    return <h1>QuestionPage 환영합니다.</h1>
}
function CouponPage () {
    return <h1>CouponPage 환영합니다.</h1>
}

function ProductDetailPage (){
    const {id} = useParams();
    return <h1>{id}번상품입니다.</h1>
}

function Cart () {
    return <h1>Cart 환영합니다.</h1>
}

function Users () {
    return <h1>Users 환영합니다.</h1>
}

function HomePage () {
    return <h1>홈페이지 환영합니다.</h1>
}

export default App;