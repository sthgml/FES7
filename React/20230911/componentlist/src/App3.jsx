import { useState } from "react";
import Login from "./components/Login";
import Homepage from "./components/Homepage";

function App3 () {
        
    const user = {
        idUser: 'jaehyun@weniv.com',
        pwUser: 1234
    }

    const [login, setLogin] = useState(false);

    return (
        <>
            {login ? <Homepage/> : <Login infoUser={user} setLogin={setLogin}/>}
        </>
    )
}
export default App3;