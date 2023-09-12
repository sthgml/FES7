import React, { useState } from "react"
import Detail from "./components/Detail"
import Review from "./components/Review"
import Question from "./components/Question"

const ContentsContainer = ({listName}) => {
    if (listName == "detail") {
        return <Detail />
    }else if (listName == "question"){
        return <Question />
    }else if (listName == "review"){
        return <Review />
    }
}

const NavBar = () => {
    const[listName, setListname] = useState('')
    
    function checkID (event) {
        setListname(event.target.id)
    }

    return (
        <>
            <nav>
                <ul>
                    <li id='detail' style={listName==="detail"?{color:'red'} : {color: "black"}} onClick={checkID}>상세정보</li>
    
                    <li id='question' style={listName==="question"?{color:'red'} : {color: "black"}} onClick={checkID}>Q&A</li>
    
                    <li id='review' style={listName==="review"?{color:'red'} : {color: "black"}} onClick={checkID}>Review</li>
                </ul>
            </nav>
            <ContentsContainer listName={listName}/>
        </>
    )
}
export default NavBar