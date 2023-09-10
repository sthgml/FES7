import './dateDisplay.css'
import React from "react";

const items = [
    {
        "name": "Original Cola",
        "cost": 1000,
        "img": "cola-original.png",
        "count": 5
    },
    {
        "name": "Violet Cola",
        "cost": 1000,
        "img": "cola-violet.png",
        "count": 5
    },
    {
        "name": "Yellow Cola",
        "cost": 1000,
        "img": "cola-yellow.png",
        "count": 5
    },
    {
        "name": "Cool Cola",
        "cost": 1000,
        "img": "cola-cool.png",
        "count": 5
    },
    {
        "name": "Green Cola",
        "cost": 1000,
        "img": "cola-green.png",
        "count": 5
    },
    {
        "name": "Orange Cola",
        "cost": 1000,
        "img": "cola-orange.png",
        "count": 5
    }
]

function ItemList ({data}) {
    // console.log(data)
    let name = data.name;
    let cost = data.cost;
    let img = data.img;
    let count = data.count;

    return (
        <div style={{"display":"flex", "justifyContent":"space-between", "alignItems":"center", "marginTop":"16px"}}>
            <h3>Product : {name}</h3>
            <div style={{"display":"flex", "gap":"8px"}}>
                <h4>Price : {cost}</h4>
                <h5>Count : {count}</h5>
            </div>
        </div>
    )
}

function DateDiv () {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();

    /*const itemRenderList = items.map(el=>{
        let name = el.name;
        let cost = el.cost;
        let img = el.img;
        let count = el.count;

        return (
            <div style={{"display":"flex", "justifyContent":"space-between", "alignItems":"center", "marginTop":"16px"}}>
                <h3>Product : {name}</h3>
                <div style={{"display":"flex", "gap":"8px"}}>
                    <h4>Price : {cost}</h4>
                    <h5>Count : {count}</h5>
                </div>
            </div>
        )
    })*/

    return (
        <div className='date-display'>
            {year}년 {month}월 {date}일
            {hour}시 {min}분 {sec}초
            에 작성한 노트입니다.
            {/* list 만들기 1번째 방법 */}
            {/* {itemRenderList} */}

            {/* list  만들기 두번째 방법 */}
            <ItemList data={items[0]}/>
            <ItemList data={items[1]}/>
            <ItemList data={items[2]}/>
            <ItemList data={items[3]}/>
            <ItemList data={items[4]}/>
            <ItemList data={items[5]}/>
        </div>
    )
}

function DateDisplay () {
    let toggle = () => {
        const dateDisplay = document.querySelector(".date-display");
        dateDisplay.classList.toggle("show");
    }

    return (
        <div className='date-display-div'>
            <button className='btn-date-display' onClick={toggle}>
                이 페이지가 생성된 시각은?
            </button>
            <DateDiv />
            
        </div>
    )
}

export default DateDisplay