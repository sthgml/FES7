function Privacy (props) {
    return (
        <>  
            <h1>{props.name} 자기소개서</h1>
            <h2>{props.hello}</h2>
            <ul>
                <li>
                    <h3>취미</h3>
                    <p>{props.hobby}</p>
                </li>
                <li>
                    <h3>좋아하는 음식</h3>
                    <p>{props.food}</p>
                </li>
                <li>
                    <h3>좋아하는 색깔</h3>
                    <p style={{"color": props.color}}>{props.color}</p>
                </li>
            </ul>
        </>
    )
}

export default Privacy