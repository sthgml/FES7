import styled from "styled-components";

const Input = styled.input`
    display: block;
    font: inherit;
    padding: 12px 32px;
    border: 0;
    border-radius: 32px;
`

function WannaBe ({setMajor, setHours, setLoading}) {
    let majorInput = '',
    hoursInput = 0;

    function submitHandle(e){
        e.preventDefault();
        if(hoursInput > 24 || hoursInput <= 0){
            alert('0이상 24 이하의 시간을 입력해주세요.')
        }else if(majorInput.length === 0){
            alert("전문가가 되고픈 분야를 입력해주세요.")
        }else{
            setMajor(majorInput);
            setHours(hoursInput);
            setLoading(true);
            setTimeout(setLoading, 1000, false);
        }
    }

    return (
        <form onSubmit={submitHandle}>
            <Input 
                type="text" 
                placeholder="예)프로그래밍" 
                className="majorInput" 
                onChange={(e)=>{
                    majorInput = e.target.value
                    // console.log(e.target.value)
                    }}
            />

            <Input 
                type="number" 
                placeholder="예)8" 
                className="hoursInput" 
                onChange={(e)=>{
                    hoursInput = e.target.value
                    // console.log(e.target.value)
                    }}
            />

            <button type="submit">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
        </form>
    )
}
export default WannaBe