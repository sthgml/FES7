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
            let name = element.name,
            cost = element.cost,
            count = element.count,
            img = element.img; 
            const itemTemplate = `
                <button type="button" id="btn-${name}" data-name="${name}" data-count="${count}" data-price="${cost}" data-img='${img}'">
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
//data-xx = dataset.xx 으로 접근이 가능한데, HTML에 추가적인 정보를 저장하여 마치 프로그램 가능한 객체처럼 사용할 수 있게 합니다. data-xx 에서 xx에 콜론이나 영문 대문자가 들어가서는 안됩니다. ui에서 선택한 속성의 값들을 가져오기 위해서 객체처럼 ㅅ