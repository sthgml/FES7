export class ColaGenerator {
    constructor () {
        this.itemList = document.querySelector(".list-cola")
    }

    async setup () {
        const response = await this.loadData();
        this.colaFactory(response);
    }

    async loadData () {
        try {
            const response = await fetch("./items.json");

            if (!response.ok) { //response status !== 200
                throw new Error ("HTTP ERROR !!! :", response.status)
            }
            return await response.json(); // 비동기라서 기다린 다음 리턴해라 await 할 수 있음

        } catch (error) {
            console.error("콜라데이터를 로딩하는 중에 문제가 발생했습니다." + error)
        }
    }

    colaFactory(data) {
        const docFrag = new DocumentFragment();
        data.forEach(element => {
            const item = document.createElement("li");
            let name = element.name;
            let cost = element.cost;
            let count = element.count;
            let img = element.img; 
            const itemTemplate = `
                <button type="button" id="btn-${name}" class="active">
                    <img src="images/${img}" alt=${name}>
                    <label for="btn-${name}">${name}</label>
                    <p class="cost">${cost}원</p>
                </button>`
            item.innerHTML =itemTemplate;
            docFrag.append(item);
        });
        this.itemList.append(docFrag);
    }
}

export default ColaGenerator;
//import ColaGenerator from "./001.js"