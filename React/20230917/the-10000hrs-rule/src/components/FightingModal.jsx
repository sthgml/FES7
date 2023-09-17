import styled from "styled-components"

function FightingModal ({setModalOpen}) {
    const Modal = styled.div`
        background-color: #fff;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 430px;
        height : 500px;
        position : absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `

    const Dim = styled.div`
        width: 100vw;
        height: 100vh;
        background-color: #00000070;
        position: fixed;
        top: 0;
        left: 0;
    `
    return (
        <>
            <Dim onClick={()=>{setModalOpen(false)}}></Dim>
            <Modal>
                <div>
                    <h1>화이팅!!</h1>
                    <h2>당신의 꿈을 응원합니다!</h2>
                </div>
                <img src="./img/Licat_fighting.png" />
                <div>
                    <button type="button" onClick={()=>{setModalOpen(false)}}>종료하고 진짜 훈련하러 가기!</button>
                    <p>(그냥 닫기 버튼입니다.)</p>
                </div>
            </Modal>
        </>
    )
}
export default FightingModal