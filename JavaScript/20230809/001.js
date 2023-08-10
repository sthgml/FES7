// if 조건문
// if (조건식) {실행코드}
// 조건식 : truthy falsy 
// boolean true false 뿐만 아니라 true 혹은 false 로 여겨지는 모든 값을 통칭합니다 
// truthy .ex) '-', 1, true, 190 anything..
// falsy .ex) '', 0, false, undefined, null...

let x = 3;
let y = 7;

if ( x == y ) {
    document.write("if 문으로 실행되었습니다!")
}else {
    document.write("else 문으로 실행되었습니다!")
}

if ( 0 ) {
    document.write("0 if 문으로 실행되었습니다!")
}else {
    document.write("0 else 문으로 실행되었습니다!")
}

if ( 1 ) {
    document.write("1 if 문으로 실행되었습니다!")
}else {
    document.write("1 else 문으로 실행되었습니다!")
}


let score = 69;
let money = 1000;

if (score > 90){
  document.write('참 잘했습니다!<br>');
  money += 100000
} else if (score > 80){
  document.write('잘했습니다!<br>');
  money += 10000
} else if (score > 70){
  document.write('했습니다!<br>');
  money += 1000
} else {
  money = 0
}

//else if 가 아닌 개별의 if문을 써주면 앞의 if문을 만족하더라도 뒤의 if문을 또 비교함
document.write(money);

// let userAge = prompt("`귀하의 나이를 입력해주십시오. 단, 숫자만 입력가능 ex) 18, 10, 5");
// if (userAge >= 18) {
//     document.write("안녕하세요!")
// }else if(userAge >= 10) {
//     document.write("안녕! 반가워 꼬마친구!")
// }else{
//     document.write("부럽다....")
// }

// template literal = `${this}`
// 삼항식 > 이 식 자체가 반환하느 값이 있어서 변수에 할당할 수도 있고, 문자열 안에 넣을 수도 있음..

let userScore = parseInt(prompt('성적을 입력해주세요! 단, 숫자만 입력가능 ex) 18, 10, 5'));
//  ---- if-else 조건문 ---- 
// if(userScore >= 90){
//     document.write("<br>"+"Your Grade : A")
// }else if(userScore >= 80){
//     document.write("<br>"+"Your Grade : B")
// }else if(userScore >= 70){
//     document.write("<br>"+"Your Grade : C")
// }else if(userScore >= 60){
//     document.write("<br>"+"Your Grade : D")
// }else {
//     document.write("<br>"+"강해져서 돌아와라!")
// }

// ---- 삼항 연산식 -----
// userScore >= 90 ? document.write("<br>"+"Your Grade : A") :
// userScore >= 80 ? document.write("<br>"+"Your Grade : B") :
// userScore >= 70 ? document.write("<br>"+"Your Grade : C") :
// userScore >= 60 ? document.write("<br>"+"Your Grade : D") : document.write("<br>"+"<h1>강해져서 돌아와라!</h1>")

// ---- switch ---- 
switch (true) {
    case (userScore>=90):
        document.write("<br>"+"<h1>your grade: A</h1>");
        break;
    case userScore>=80:
        document.write("<br>"+"Your Grade : B");
        break;
    case userScore>=70:
        document.write("<br>"+"Your Grade : C");
        break;
    case userScore>=60:
        document.write("<br>"+"Your Grade : D");
        break;
    default :
        document.write("<br>"+"<h1>강해져서 돌아와라!</h1>");
        break;
}

