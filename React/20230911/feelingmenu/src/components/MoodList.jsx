import { useState  } from "react";
import MoodDisplay from "./MoodDisplay";
import MoodMenu from "./MoodMenu";

const menus = [
    "Nice",
    "Very Nice", 
    "The Best", 
    "Crazy",
    "Soso"
];

function MoodList () {

    let [feeling, setfeeling] = useState('');

    function changeDisplay (e) {
        const moodDisplay = document.querySelector(".mood-display")
        moodDisplay.classList.add("changed");
        setTimeout(()=> moodDisplay.classList.remove("changed"), 500)
        setfeeling(e.target.textContent)
    }
    
    return (
        <>
            <h1>Select What Corgi's Feeling</h1>
            <ul className="menu-list">
                <MoodMenu data={menus[4]} onClick={changeDisplay} />
                <MoodMenu data={menus[0]} onClick={changeDisplay} />
                <MoodMenu data={menus[1]} onClick={changeDisplay} />
                <MoodMenu data={menus[2]} onClick={changeDisplay} />
                <MoodMenu data={menus[3]} onClick={changeDisplay} />
            </ul>
            <MoodDisplay data={feeling}/>
        </>
    )
}

export default MoodList