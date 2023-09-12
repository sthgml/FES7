import { useState } from "react"

function UserItem ({userInfo}) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <li onClick={() => setShowInfo(!showInfo)}>
            {userInfo.name}
            {showInfo? (<div className="detail">
                <div>{userInfo.email}</div>
                <div>{userInfo.job}</div>
            </div>) : ''}
        </li>
    )
}

function UserList ({ users }) {
    return (
        <ul>
            { users.map((el)=>{
                return <UserItem key={el.id} userInfo={el}/>
            }) }
        </ul>
    )
}

function App3 () {
    let [data, setData] = useState([
        { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
        { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
    ]);
    console.log(data);
    return (
        <UserList users={data}/>
    )
}
export default App3