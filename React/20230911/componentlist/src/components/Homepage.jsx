

function Homepage ({setLogin}) {
    return (
        <>
            <h1>로그인 성공!!!!!</h1>
            <h2>홈페이지~!~!</h2>
            <button type='button' onClick={()=>setLogin(false)}>로그아웃</button>
        </>
    )
}
export default Homepage