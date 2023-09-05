export class VendingMachineFunc {
    constructor(){
        // 필요한 ui를 모두 가져오는 작업
        const vendingMachine = document.querySelector(".vending-machine") // instance would not know this variable exists only in this class's method or attribute can use this variable.

        // section 1 - 자판기 ui
        this.change = document.querySelector(".change p");
        this.itemList = vendingMachine.querySelector(".list-cola");
        this.inputCost = vendingMachine.querySelector(".input-money");

        this.btnReturn = vendingMachine.querySelector(".btn-return");
        this.btnPut = vendingMachine.querySelector(".btn-input")
        this.btnGet = vendingMachine.querySelector(".btn-obtain");
        this.getList = vendingMachine.querySelector(".beverage-lists")
        

        // section 2 - 현재 소지금 
        const status = document.querySelector(".status");
        this.currentMoney = status.querySelector(".current-money-cost")


        // section 3 - 현재 획득 음료 목록
        const obtainedBeverage = document.querySelector(".obtained-beverage");
        this.txtTotal = obtainedBeverage.querySelector(".obtained-beverage>p>span")
        this.obtedBev = obtainedBeverage.querySelector(".selected-beverage.obtained")
    }

    setup () {
        this.bindEvents();
    }

    // 장바구니에 콜라를 등록하는 함수
    listUpSelectedBeverage (target) {
        const selectedBeverage = document.createElement("li");
        selectedBeverage.setAttribute("class", "beverage-list");
        selectedBeverage.dataset.name = target.dataset.item;
        selectedBeverage.dataset.img = target.dataset.img;
        selectedBeverage.dataset.price = target.dataset.price;
        selectedBeverage.dataset.count = target.dataset.count;
        selectedBeverage.innerHTML = 
        `
            <img src="images/${selectedBeverage.dataset.img}" alt="${selectedBeverage.dataset.name}">
            <p class="beverage-title">${selectedBeverage.dataset.name}</p> 
            <p class="beverage-count">1</p>
        `
        // console.log(this.getList, target.dataset.item)
        this.getList.append(selectedBeverage)
    }

    bindEvents() {
        /** 1. 입금 기능
         * - input-money에 1000을 입력 / 입금칸에 숫자 입력
         * - btn-input 클릭 / 입금 버튼 클릭
         *  if(input-money > current-money){ / 입금 금액과 현재 소지금 비교
         *      alert("소지금이 부족합니다!")
         *  }else {
         * - current-money -= 1000 / 소지금에서 입금칸 만큼 감액
         * - change += 1000 / 현재 잔액에 입금칸 숫자 만큼 증액
         * - input-money 입력칸 clear 초기화 / 입금칸 깨끗하게
         * }
         */
        this.btnPut.addEventListener('click', ()=>{
            const inputCostVal = parseInt(this.inputCost.value);
            // console.log(inputCostVal)
            const currentMoneyVal = parseInt(this.currentMoney.textContent.replaceAll(',',''));
            const changeVal = parseInt(this.change.textContent.replaceAll(',',''));
            // console.log(currentMoneyVal, inputCostVal)
            if(inputCostVal <= currentMoneyVal && inputCostVal > 0){ // inputCostVal is not a null
                this.currentMoney.textContent = new Intl.NumberFormat().format(currentMoneyVal - inputCostVal ) + '원'; 
                //currentMoney 가 변경되었을 경우를 대비해서 풀로 선택해줍니다. 
                // new Intl.NumberFormat().format(currentMoneyVal - inputCostVal) -> Intl 객체를 통해 사용자 국가에서 사용하는 형식으로 숫자를 표현하도록 변경합니다.
                this.change.textContent = new Intl.NumberFormat().format((changeVal ? changeVal : 0) + inputCostVal) + '원' 
                // (changeVal ? changeVal : 0) - 초기값이 0이 되도록, 값이 없으면 = NaN이 뜨기 때문
                this.inputCost.value = null;
            }else{
                alert("입력값을 확인해주세요.")
            }
        })

        /** 2. 거스름돈 반환 기능
         * - if(잔액 > 0){ 
         * - btn-return 클릭;
         * - 잔액 = 0
         * - 소지금 += 잔액
         * - }
         */
        this.btnReturn.addEventListener('click', ()=>{
            const currentMoneyVal = parseInt(this.currentMoney.textContent.replaceAll(',',''));
            const changeVal = parseInt(this.change.textContent.replaceAll(',',''));

            if(changeVal){
                this.change.textContent = 0 + '원';
                this.currentMoney.textContent = new Intl.NumberFormat().format(currentMoneyVal + changeVal) + '원'
            }
        })

        /** 3. 콜라 뽑기 
         * - 콜라를 클릭
         * - 콜라 버튼에 active 클래스 추가
         * - 장바구니에 목록 생성
         * - 획득 버튼 클릭
         * - if(콜라 가격 합산 < 입금 금액) {
         * - 획득한 음료에 목록 생성
         * - 소지금 -= 콜라 가격 합산
         * - 재고 카운트 -- 
         * - 재고 == 0 ? disabled 속성/ soldout 클래스 추가하기
         * - } else if (콜라 가격 합산 > 입금 금액){
         * - 금액 부족 알럿
         * - }
        */
        const btnColas = this.itemList.querySelectorAll('button');
        btnColas.forEach((btnCola)=>{
            btnCola.addEventListener('click', (e)=>{
                const changeVal = parseInt(this.change.textContent.replaceAll(',',''));
                const btnColaPrice = parseInt(btnCola.dataset.price); 
                const selectedBeverage = this.getList.querySelectorAll('li');
                let isStaged = false;

                if(changeVal >= btnColaPrice){
                    // 금액 차감
                    this.change.textContent = new Intl.NumberFormat().format( changeVal - btnColaPrice) + '원'
                    
                    // 장바구니 목록 카운트 추가
                    for( const beverage of selectedBeverage ){ // 장바구니 리스트에..
                        if(beverage.dataset.name === btnCola.dataset.item){
                            let modifiedCount = parseInt(beverage.querySelector(".beverage-count").textContent) + 1;
                            beverage.querySelector(".beverage-count").textContent = modifiedCount;
                            isStaged = true;
                            break;
                        } // 리스트에 아이템이 아무것도 없어서 순회가 되지 않음
                    }

                    // 장바구니 목록에 요소 생성
                    if(!isStaged){
                        this.listUpSelectedBeverage(btnCola)
                    }

                    // 콜라 버튼의 data 값 차감하고, 카운트가 0이 되면 품절표시하기
                    btnCola.dataset.count--;
                    if(btnCola.dataset.count == 0){
                        btnCola.disabled = true; //"disabled" 도 되고, true 도 됨~
                    }
                }else{
                    alert("잔액 부족!"); 
                }
            })
        })

        /** 3. 획득하기
         * 획득 버튼을 누르면 선택한 음료수 목록이 획득한 음료 개수로 이동합니다~
         * 획득한 음료의 금액을 모두 합하여 총 금액을 업데이트 합니다.
        */
        this.btnGet.addEventListener('click', e=>{
            // 목록 이동하기
            const selectedBeverage = this.getList.querySelectorAll('li');
            const obtedBevs = this.obtedBev.querySelectorAll("li");
            // console.log(selectedBeverage, obtedBevs)
            let isStaged = false;

            for (const el of selectedBeverage){
                isStaged = false;
                for (const beverage of obtedBevs){
                    // console.log(el.dataset, beverage.dataset)
                    if (el.dataset.name === beverage.dataset.name){
                        const selectedCount = el.querySelector('.beverage-count');
                        const beverageCount= beverage.querySelector('.beverage-count');
                        beverageCount.textContent = parseInt(selectedCount.textContent) + parseInt(beverageCount.textContent);
                        this.getList.innerHTML = null;
                        isStaged = true;
                        break;
                    }
                }

                if(!isStaged){
                    this.obtedBev.append(el);
                }
            }

            

            // 합산 표시하기
            // console.log( parseInt(this.txtTotal.textContent.replaceAll(',','')) ) 
            let txtTotalVal = 0;
            
            console.log(obtedBevs)
            this.obtedBev.querySelectorAll('li').forEach(beverage=>{
                let beverageCount = beverage.querySelector('.beverage-count');
                let beveragePrice = beverage.dataset.price;
                txtTotalVal += parseInt(beverageCount.textContent) * beveragePrice
            })

            this.txtTotal.textContent = new Intl.NumberFormat().format(txtTotalVal);
        })

    }
}
export default VendingMachineFunc;