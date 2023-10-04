import styled, { createGlobalStyle } from "styled-components"

function Loading ({setLoading}) {

    const GlobalStyle = createGlobalStyle`
        @keyframes rotation {
            from {
                transform: rotate(0deg);
            } to {
                transform: rotate(720deg);
            }
        }
    `

    const Clock = styled.img`
    margin: 147px auto;
    animation: rotation 3s linear infinite forwards;
    `
    
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <Clock src="./img/clock.png" alt="" className="loading-clock"/>
        </>
    )
}
export default Loading