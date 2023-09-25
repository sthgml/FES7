import loading from '../img/Loading_icon.gif';

function Loading () {
    return (
        <>
            <img src={loading} alt="" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            <div style={{width:"100vw", height:'100vh', backgroundColor:'black', opacity:0.5, position:'fixed', top:0, left:0}}></div>
        </>
       
    )
}
export default Loading