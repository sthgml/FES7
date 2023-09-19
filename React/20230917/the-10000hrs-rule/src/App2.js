import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import Modal from "./components/modal/Modal";
import { useState } from "react";

function App2 () {
    const [modalShow, setModalShow] = useState(false);

    return(
        <div>
            <Header />
            <Main setModalShow={setModalShow}/>
            <Footer />
            {modalShow ?(<Modal setModalShow={setModalShow}/>) : null}
        </div>
    )
}

export default App2