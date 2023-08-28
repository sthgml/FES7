const path = document.querySelector("#path");
const pathLength = path.getTotalLength();
path.style.strokeDasharray = `${pathLength} ${pathLength}`;
// console.log('전체 path길이', pathLength);
path.style.strokeDashoffset = pathLength;
// console.log('clientHeight', document.documentElement.clientHeight)
// console.log('scrollHeight', document.documentElement.scrollHeight)

function scrollhandler(){
    //현재 스크롤의 위치
    const scrollTop = document.documentElement.scrollTop
    
    //전체 스크롤의 길이
    const scrollHeight = document.documentElement.scrollHeight;
    
    //viewport의 높이
    const clientHeight = document.documentElement.clientHeight;

    //스크롤의 위치 => %
    const scrollPercentage = scrollTop / (scrollHeight-clientHeight)
    // console.log(scrollPercentage)

    //패스를 그려봅시다.
    const drawLength = pathLength * scrollPercentage;

    //어디서부터 그릴지
    path.style.strokeDashoffset = pathLength - drawLength;

    const openBtn = document.querySelector('.btn-open');
    openBtn.style.opacity = scrollPercentage;
    if(scrollPercentage>=0.8){
        openBtn.disabled = false;
    }
    if(scrollPercentage < 0.8){
        openBtn.disabled = true;
    }
}
window.addEventListener("scroll",scrollhandler);
