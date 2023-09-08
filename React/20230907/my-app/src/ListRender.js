import './listRender.css'

let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
];

function ListItem ({ data }) {
    return (<li className = { data.visited ? "visited" : "" }>{ data.area }</li>)
}

function ListRender(){

    const areas = list.map((item, index)=>{
        return <li key={item.no} className={item.visited ? "visited" : ''}>{item.area}</li>
    })

    return (

        <ul>
            ListRender
            <ListItem data={list[0]}/>
            <ListItem data={list[1]}/>
            <ListItem data={list[2]}/>
            <ListItem data={list[3]}/>
            {/* <div className="border">{list[0].area}</div>
            <div className="border" style={{"background-color":"skyblue"}}>{list[1].area}</div>
            <div className="border">{list[2].area}</div>
            <div className="border">{list[3].area}</div> */}
        </ul>
    )
}

export default ListRender 