
// 1. forEach(콜백함수)
let arr = [10, 20, 30, 40, 50]
arr.forEach((value, index, array) => {
    console.log(value, index, array)
})

// ---- 문제1. forEach를 사용해서 배열의 모든 요소를 더하는 코드를 작성하세요.
let sum = 0;
arr.forEach(v => {
    sum += v;
})
console.log(sum);

// ---- 문제2. 
let arr2 = [10, '20', 30, '40', 50];
let sum2 = 0;
arr2.forEach(v => {
    sum2 += parseInt(v);
})
console.log(sum2);

// ---- 문제3. 
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum3 = 0;

arr3.forEach((v,i)=>{
    if(i%2===0){
        sum3 += v
    }
})
console.log(sum3);

arr3.forEach((v,i)=>{
    i%2 ===0? sum3+=v:null;
})
console.log(sum3);

// ---- 문제4. 숫자 100개 만들기
let sum4 = 0;

Array(100).fill(0).forEach((v,i) => {
    sum4 += i+1;
})
// ? ^^ 이코드는 좋은 코드가 아닙니다 ^^
// 백 번이나 순회를 돌잖아요?
// n * (n+1) / 2
// 수학 수식으로 계산되는 코드는 이렇게 순회를 돌면서 풀지 않도록 합니다

// ---- 문제6. 아래와 같이 출력되게 해주세요.
// input = ['hojun', 'dongjun', 'dongwook', 'donggeun']
// output = ['hojun is good', 'dongjun is good', 'dongwook is good', 'donggeun is good']
let arr6 = ['hojun', 'dongjun', 'dongwook', 'donggeun'];
let answer6 =[];

arr6.forEach(item => answer6.push(item+' is good'));
console.log(answer6)

// ---- 문제7. 뒤의 2자리 바꾸기.
let answer7 =[]
'010-6665-8775'.split('-').forEach((v, i)=>{
    console.log(v.slice(0,-2)+'xx');
    answer7.push(v.slice(0,-2)+'xx')
})
console.log(answer7.join('-'));

'010-6665-8775'.split('-').forEach((v, i)=>{
    answer7.push(v.replace(v.slice(-2),'xx'))
})
console.log(answer7.join('-'));

// ---- nodelist.forEach는 explorer를 지원하지 않습니다.
// nodelist 란 dom에서 div와 같은 노드를 뽑아낼때 querySelectorAll('div') 처럼 사용하는 것으로 이것의 반환값이 배열처럼 보여서 이제 주니어들이 forEach사용하려고 하는데 익스플로러에는 작동하지 않음

// nodelist와 array는 다릅니다!
let div = document.querySelectorAll('div')
// 아래 코드는 익스플로러에서 작동하지 않습니다.
div.forEach(v=>console.log(v))
div.forEach(v=>v.innerText = 'hi')
// 대안: 아래처럼 배열로 바꿔 사용할 수 있습니다!
div = [...div]

//
// forEach/map 로 원본 배열이 변경되는 예시

let arr8 = [10, 20, 30, 40, 50]

arr8.forEach((v,i,arr)=>arr[i]=v**2)
arr8.map((v,i,arr)=>arr[i]=v**2)
// (5) [100, 400, 900, 1600, 2500]
arr8
// (5) [100, 400, 900, 1600, 2500]

// 안바뀌게 하려면
arr8.map((v,i,arr)=>v**2)
// (5) [100, 400, 900, 1600, 2500]
arr8
// (5) [10, 20, 30, 40, 50]
