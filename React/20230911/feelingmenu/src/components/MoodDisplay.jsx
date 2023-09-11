function MoodDisplay (props2) {
    
    return (
        <div className="mood-display">
            <img src={"img/"+(props2.data || "default")+".jpg"} alt={props2.data} />
            <div className="text-container">
                <p>{"I am feeling"} </p>
                <h2>{props2.data || "...?"} !!</h2>
            </div>
        </div>
    )
}
export default MoodDisplay