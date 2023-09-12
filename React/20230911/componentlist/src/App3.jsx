import { useState } from "react";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Modal from "./components/Modal";

function App3 () {
        
    const user = {
        idUser: 'jaehyun@weniv.com',
        pwUser: 1234
    }

    const [login, setLogin] = useState(false);
    const [join, setJoin] = useState(false);

    return (
        <>
            {login ? <Homepage setLogin={setLogin}/> : <Login infoUser={user} setLogin={setLogin} setJoin={setJoin}/>}
            {join ? <Modal setJoin={setJoin}/> : null}
        </>
    )
}
export default App3;