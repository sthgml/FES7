function MoodMenu (props) {
    
    return (
        <>
            <button 
                className="btn-mood" 
                onClick={props.onClick}>
                {props.data}
            </button>
        </>
    )
}

export default MoodMenu