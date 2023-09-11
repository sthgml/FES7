function Time () {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();

    return (
        <div className='date-display'>
            {year}년 {month}월 {date}일
            {hour}시 {min}분 {sec}초
            에 작성한 노트입니다.
        </div>
    )
}

export default Time;