// filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => v % 2 === 0);

// filter는 return 값이 true인 것만 모아서 새로운 배열을 만듭니다.
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resul2 = arr2.filter(v => {
    return true
})
result2

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result3 = arr3.filter(v => {
    return false
})
result3

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result4 = arr4.filter(v => {
    return v % 3 == 0;
})
result4

// filter는 메서드 체이닝으로 많이 사용됩니다.


//reduce
[10, 20, 30, 40, 50].reduce((a,c)=>a + c)
[10, 20, 30, 40, 50].reduce((accum,currentValue)=>{
    console.log('accum : ', accum, 'currentValue : ', currentValue);
    return accum + currentValue
})

//includes

//join
let arr5 = ['hello', 'world', 'hojun']
arr5.join('!')

let arr6 = ['hello', 'world', 'hojun']
arr6.join(' ')

let arr7 = ['010', '5044', '2903']
arr7.join('-')

// arr.join('/n')
// arr.join('<br>')
let arr8 = ['안녕하세요.', '제 이름은 이호준입니다.', '저는 제주에 살아요.']
arr8.join('\n')
console.log(arr8.join('\n'))

let arr9 = ['안녕하세요.', '제 이름은 이호준입니다.', '저는 제주에 살아요.']
arr9.join('<br>')
console.log(arr9.join('<br>')) // innerHTML로 하면 <br>이 개행됩니다.
document.write(arr9.join('<br>'))

//reverse
