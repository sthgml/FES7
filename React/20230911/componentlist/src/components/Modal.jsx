import './modal.css'
function Modal ({setJoin}) {
    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>회원이 되신것을 환영합니다.</h2>
                <button type='button' onClick={()=>setJoin(false)}>닫기</button>
            </div>
        </div>
    )
}
export default Modal