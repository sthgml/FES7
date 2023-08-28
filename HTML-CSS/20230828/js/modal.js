const modal = document.querySelector(".modal")
const openBtn = document.querySelector(".btn-open")
const closeBtn = document.querySelector(".btn-close")
const dim = document.querySelector('.dim')


const focusableEl = modal.querySelectorAll("a, button");
const firstEl = focusableEl[0], lastEl =focusableEl[focusableEl.length-1]

function openModal(){
    // console.log('모달 열림')
    modal.classList.add('active')
    document.documentElement.style.overflow="hidden"
}

function closeModal(){
    // console.log('모달 닫힘')
    // console.log(this.classList)
    modal.classList.remove('active')
    document.documentElement.style.overflow="auto"
}

function handleTab(e) {
    // console.log(e.key)
    // console.log(e.shiftKey)
    const activeEl = document.activeElement;

    if (e.key == 'Tab') {
        if(e.shiftKey){
            //tab + shift
            if(activeEl === firstEl){
                e.preventDefault();
                lastEl.focus();
            }
        }else{
            //tab 
            if(activeEl === lastEl){
                e.preventDefault();
                firstEl.focus();
            }
        }
    }
}

openBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
dim.addEventListener('click', closeModal)

firstEl.addEventListener('keydown', handleTab)
lastEl.addEventListener('keydown', handleTab)

window.addEventListener("keydown", (e) => {
    // console.log(modal.classList)
    if(modal.classList.contains("active") && e.key === "Escape"){
        modal.classList.remove("active")
    }
})