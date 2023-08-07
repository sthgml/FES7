// Tip) 실무에서는 array를 const로 선언합니다

// ---- 1. push, pop, unshift, shift ----
// push- 배열의 뒤에 값을 추가한다
// ㄴ반환값: undefined
// pop - 배열의 뒤에서 값을 꺼내고 (기존 배열 변형)
// ㄴ반환값: 꺼낸 값

// unshift- 배열의 앞에 값을 추가한다
// ㄴ반환값: 배열의 길이
// shift - 배열의 앞에서 값을 꺼내고 (기존 배열 변형)
// ㄴ반환값: 꺼낸 값

// ---- 문제 ----
// push pop unshift shift를 이용하여 다음과 같은 배열을 만들어보세요
// ㄴ입력값: [10, 20, 30, 40]
// ㄴ출력값: [10, 100, 20, 30, 50]

let arr = [10, 20, 30, 40];

arr.pop()
arr.push(50)
arr.shift(10)
arr.unshift(100)
arr.unshift(10)

// ---- 2. splice ----
//arr.splice(start, deleteCount, item1, item2) 
//start번째에 deleteCount개를 지우고 100을 넣어라 (= 1인덱스 자리에 100 삽입) (기존 배열 변형)

let arr2 = [10, 20, 30];
arr2.splice(1, 0, 100) 
arr2.splice(1, 1, 100, 200);
arr2.splice(1, 1, [100, 200]);

// ---- 문제 ----
// splice를 이용하여 다음과 같은 배열을 만들어보세요
// ㄴ입력값: [10, 20, 30, 40]
// ㄴ출력값: [10, 1, 2, 3 20, 30, 50, 1, 2, 3]
let x = [1, 2, 3];
arr.splice(0, 0, ...x);
arr.push(x);
arr.flat();

// ---- 3. slice ----
// arr.slice(start, end)
let arr3 = [10, 20, 30, 40];
let slice1 = arr3.slice(1, 3);
let slice2 = arr3.slice(1, 10000);
let slice3 = arr3.slice(100,  10000);

// ---- 4. sort ----
// 사전식정렬
const avengersEng = ['Ironman', 'Spiderman', 'hulk', 'thor'];
console.log(avengers.sort());
// > ['스파이더맨', '아이언맨', '토르', '헐크']
const avengersKor = ['아이언맨', '스파이더맨', '헐크', '토르'];
console.log(avengers.sort());
// > ['스파이더맨', '아이언맨', '토르', '헐크']
// 문제발생
const nums = [1, 2, 11, 22];
console.log(nums.sort());
// > [1, 11, 2, 22]

// 해결법
console.log(nums.sort((a, b) => (a < b ? -1 : (a > b ? 1 : 0))));
// > [1, 2, 11, 22] - 오름차순
console.log(nums.sort((a, b) => (a > b ? -1 : (a < b ? 1 : 0))));
// > [22, 11, 2, 1] - 내림차순

// + 원리
//sort() 괄호 안에 들어간 화살표 함수를
(a, b) => a - b
//풀어써보면
function anonimous (a, b) {
    return a - b;
}
//근데 뒤에 있는게 a, 앞의 요소가 b로 들어감
//ex. nums = [22, 11, 2, 1]; 이면
// 1회 - a = 22, b = 11;
// ㄴ return : -11 
// 음수가 리턴(b가 더 큼)되면 a(뒤의 요소)를 낮은 인덱스(앞)로 설정합니다.
// 
