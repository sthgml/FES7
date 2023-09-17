function GonnaDo ({major, hours, modalOpen, setModalOpen}) {
    // console.log(`major: ${major}, hours: ${hours}`)

    function copyText(){ 
        //inputTag라는 변수에 담긴 input 태그의 value(텍스트)를 클립보드에 쓰기
        navigator.clipboard.writeText(`아직 url 없는데용. 로또나 뽑으시길.. : ${parseInt(Math.random()*45)} 로또 번호입니다.`).then(res=>{
            alert("텍스트가 복사되었습니다!");
        })
    }

    hours = parseInt(10000/hours)
    return (
        <div>
            <p>
                당신은
                {major}
                전문가가 되기 위해서
                대략
                {hours}
                일 이상 훈련하셔야 합니다! :)
            </p>
            <button 
                type="button" 
                onClick={()=>{
                    setModalOpen(!modalOpen)
                }}>
                훈련하러 가기!
                </button>
            <button 
                type="button" 
                onClick={copyText}>
                공유하기
                </button>
        </div>
    )
}
export default GonnaDo