//로그아웃 버튼
const logout = document.querySelector('.logout');
logout.addEventListener('click',e=>{
    if(window.confirm('정말 로그아웃 하시겠습니까?')){
        location.href='./login.html'
        location.replace('./login.html')
    }else{
        e.preventDefault();
    }
})

//탭 이동
const category24 = document.querySelector(".category-24hr");
const category1W = document.querySelector(".category-week");
const category1M = document.querySelector(".category-month");
const lis = document.querySelectorAll(".nav ul li");
const h2 = document.querySelector(".title.typing");

const nav = document.querySelector(".nav");
nav.addEventListener("click",e=>{
    
    if(e.target.className=="tap-24hr"){
        h2.classList.add("off")
        category24.classList.remove("off")
        category1W.classList.add("off")
        category1M.classList.add("off")
    }else if(e.target.className=="tap-week"){
        h2.classList.add("off")
        category24.classList.add("off")
        category1W.classList.remove("off")
        category1M.classList.add("off")
    }else if(e.target.className=="tap-month"){
        h2.classList.add("off")
        category24.classList.add("off")
        category1W.classList.add("off")
        category1M.classList.remove("off")
    }else if(e.target.className=="tap-all"){
        h2.classList.remove("off")
        category1M.classList.remove("off")
        category1W.classList.remove("off")
        category24.classList.remove("off")
    }
    lis.forEach(e=>e.classList.remove("opened"));
    e.target.classList.add("opened")
})

// 햄버거 버튼
const hamburger = document.querySelector("#hamburger");
const paperList = document.querySelector(".paper-list");
console.log(hamburger, paperList)
hamburger.addEventListener("click",e=>{
    // console.log(e.target)
    // console.log(paperList)
    paperList.classList.toggle("opened")
    hamburger.classList.toggle("opened")
})