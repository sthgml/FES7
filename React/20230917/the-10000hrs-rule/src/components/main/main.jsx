import { useState } from 'react'
import './main.css'
import Loading from '../Loading';

function Main ({setModalShow}) {
    const [field, setField] = useState('');
    const [time, setTime] = useState(0);
    const [day, setDay] = useState('');
    console.log(field, time);
    const [loading, setLoading] = useState(false);
    
    function submitHandle (e) {
        e.preventDefault();
        if(time > 24 || time <= 0){
            alert('0이상 24 이하의 시간을 입력해주세요.')
        }else if(field.length === 0){
            alert("전문가가 되고픈 분야를 입력해주세요.")
        }else{
            setDay(Math.ceil(10000/ parseInt(time)));
            setLoading(true);
            setTimeout(setLoading, 1000, false);
        }
    }

    return (
        <main>
            <form action="action" className="cont-input" onSubmit={submitHandle}>
                <p className="txt-wannabe"> 
                    나는 
                    <input type="text" placeholder="예)프로그래밍" onChange={(e)=>{setField(e.target.value)}}/>
                    전문가가 될 것이다. 
                </p>
                <p className="txt-time"> 
                    그래서 앞으로 하루에 
                    <input type="text"  placeholder="예)8" onChange={(e)=>{setTime(e.target.value)}} /> 
                    시간씩 훈련할 것이다. 
                </p>
                <button type="submit" className="btn-exc">
                    나는 며칠 동안 훈련을 해야 1만 시간이 될까?
                </button>
            </form>

            { loading ? (<Loading setLoading={setLoading} />) : null }

            {day && !loading && <section className="cont-result">
                <h2 className="a11y-hidden">결과확인</h2>
                <p className="txt-wannabe">당신은 <strong> {field} </strong> 전문가가 되기 위해서 <br />대략 <strong> {day} </strong>일 이상 훈련하셔야 됩니다.</p>
                <button type="button" className="btn-go" onClick={()=>setModalShow(true)}>훈련하러가기 GO! GO!</button>
                <button type="button" className="btn-share">공유하기!</button>
            </section>}
        </main>
    )
}
export default Main