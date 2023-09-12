import { useState } from "react";

function PetForm ({setData}) {
    function handleSubmit (e) {
        e.preventDefault();
        let id = 116
        setData((prev)=>{
            id++;
            return [...prev, {
                name: name,
                species: species,
                age: age,
                id: id
            }]

            // 이거 왜 안되누ㅠ
            // let newData = prev.push({
            //     name: name,
            //     species: species,
            //     age: age,
            //     id: id++
            // })
            // return newData
        })
    }

    const [name, setName] = useState();
    const [species, setSpecies] = useState();
    const [age, setAge] = useState();

    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <fieldset>
                <legend>새로운 애완동물을 추가</legend>
                <label htmlFor="name">이름</label>
                <input type="text" id='name' value={name} onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                <br />
                <label htmlFor="species">종</label>
                <input type="text" id='species' value={species} onChange={(e)=>{
                    setSpecies(e.target.value)
                }}/>
                <br />
                <label htmlFor="age">나이</label>
                <input type="text" id='age' value={age} onChange={(e)=>{
                    setAge(e.target.value)
                }}/>
    
                <button type="submit" >추가하기</button>
            </fieldset>
        </form>
    )
}

function Pet ({data}) {
    console.log(data)

    return (
        <li>
            <p>{data.name}는 {data.species}입니다. 그리고 {data.age}살 입니다.</p>
        </li>    
    )
}

function App5 () {
    const [data, setData] = useState([
        { name: "벨라", species: "고양이", age: "5", id: 111 },
        { name: "루시", species: "강아지", age: "3", id: 112 },
        { name: "데이지", species: "토끼", age: "2", id: 113 },
        { name: "몰리", species: "고양이", age: "1", id: 114 },
        { name: "매기", species: "강아지", age: "6", id: 115 }
    ]);

    return (
        <>
            < PetForm setData={setData}/>
            <ul>
                {data.map((v, i)=>{
                    return (
                        < Pet key={i} data={v}/>
                    )
                })}
            </ul>
        </>
    )
}
export default App5