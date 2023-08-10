const person = {
    name: '재현',
    age: 20,
    gender: 'male'
};

for(let i in person){
    console.log(`${i} : ${person[i]}`);
}

let keysArr = Object.keys(person)

for(let i = 0; i < keysArr.length; i++) {
    console.log(`${keysArr[i]} : ${person[keysArr[i]]}`)
}


// 사용자가 입력한 메뉴 번호에 따라 해당하는 메뉴 이름과 가격을 출력합니다. 만약 종료 번호를 누르면 ‘종료합니다’ 를 콘솔에 출력합니다.

const menu = [
    { name: "아메리카노", price: 2000 },
    { name: "카페라떼", price: 2500 },
    { name: "카페모카", price: 2800 },
    { name: "핫초코", price: 3000 },
    { name: "과일주스", price: 3500 },
];

menu.forEach((v,index)=>v.num = index+1 )

let userOrder = parseInt(prompt("주문 도와드릴까요? ^^ 1 아메리카노, 2 카페라떼, 3 카페모카, 4 핫초코, 5 과일주스 있습니다~ ------ 종료하시려면 -1 을 눌러주세요!-------"));

let ordered;
for(let i = 0; i<menu.length; i++) {
    console.log(menu[i]['num']);
    if(userOrder == -1 ){
        document.write('‘종료합니다’')
        break;
    }else if(menu[i]['num'] == userOrder){
        console.log()
        ordered = menu[i];
    }
}

document.write(ordered['name']," : ", ordered['price']);

