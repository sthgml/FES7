const containerInput = document.querySelector(".container-input")
const hrInput = containerInput.querySelector("#hrInput");
const minInput = containerInput.querySelector("#minInput");
const secInput = containerInput.querySelector("#secInput");

const btnStart = document.querySelector(".btn-start");
const btnReset = document.querySelector(".btn-reset");


containerInput.addEventListener("change", (e)=>{
    // console.log(e.target.value);
    if(e.target.value > 0){
        btnStart.disabled = false;
        btnReset.disabled = false;
    }
})

btnStart.addEventListener('click', (e)=>{
    //입력값을 수정 불가하게
    hrInput.disabled = true;
    minInput.disabled = true;
    secInput.disabled = true;

    e.target.classList.toggle("started")
    if(e.target.classList.contains("started")){

        //일시정지 버튼으로 바꾸기
        e.target.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <rect x="2" y="0.99995" width="4" height="15" rx="1" fill="white"/>
            <rect x="10" y="0.99995" width="4" height="15" rx="1" fill="white"/>
            </svg>
            pause
        `

        //시간 초 줄어들도록 하기
        let sec = secInput.value;
        setInterval(()=>{
            secInput.value = sec--;
        }, 1000)

    }else{

        //플레이 버튼으로 바꾸기
        e.target.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 17" fill="none" class="icon-play">
                    <path d="M4 14.9635V2.03645C4 1.20576 4.95414 0.737243 5.61145 1.24516L13.976 7.70867C14.4941 8.109 14.4941 8.89091 13.976 9.29124L5.61145 15.7547C4.95414 16.2627 4 15.7941 4 14.9635Z" fill="#617199"/>
                    </svg>
                    start
        `

        
    }

});
