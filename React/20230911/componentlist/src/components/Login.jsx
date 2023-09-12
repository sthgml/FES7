import { useState } from "react";


function Login (props) {
    let infoUser = props.infoUser;
    let setLogin = props.setLogin;
    let setJoin = props.setJoin;
    console.log(props)

    let [id, setId] = useState('');
    let [pw, setPW] = useState("");

    function handleSubmit (e) {
        e.preventDefault();

        if (id === '') {
            alert("아이디를 입력하지 않았습니다.");
        }

        if (pw === '') {
            alert("패스워드를 입력하지 않았습니다.");
        }

        if (id === infoUser.idUser && pw === infoUser.pwUser.toString()){
            console.log('login 성공')
            setLogin(true)
        }

        console.log(`id : ${id}, pw : ${pw}`);
    }
    function handleIDInput (e) {
        // console.log(e.target.value);
        setId(e.target.value);
    }
    function handlePWInput (e) {
        // console.log(e.target.value);
        setPW(e.target.value);
    }
    function handleJoin () {
        setJoin(true)
    }
    return (
        <form>
            <label htmlFor="id">아이디</label>
            <input type="text" onChange={handleIDInput} id="id"/>
            <label htmlFor="id">비밀번호</label>
            <input type="text" onChange={handlePWInput} id="pw"/>

            <button type="submit" onClick={handleSubmit} >로그인</button>
            <button type="button" onClick={handleJoin} >회원가입</button>
        </form>
    )

}

export default Login