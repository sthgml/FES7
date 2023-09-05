//버튼 뉴
const btnNew = document.querySelector(".btn-new");
const today = document.querySelector(".today");
const dim = document.querySelector(".dim");

btnNew.addEventListener("click", open)

function open () {
    today.classList.remove("hidden");
    dim.classList.remove("hidden");
}

function close () {
    today.classList.add("hidden");
    dim.classList.add("hidden");
}

const form = document.querySelector(".form.new");
const btnSave = document.querySelector(".btn-save");

btnSave.addEventListener("click", close);
dim.addEventListener("click", close);

form.addEventListener("submit", e=>{
    e.preventDefault();
})
