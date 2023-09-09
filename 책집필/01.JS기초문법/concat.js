const arr = [ 1, 2, 3];
const arr2 = [ ['수박'], '딸기', '참외'];
const arr3 = [ '사이다', '콜라', '환타'];

const mergedArr = arr.concat(arr2, arr3);

console.log(mergedArr);
// > (9) [1, 2, 3, '수박', '딸기', '참외', '사이다', '콜라', '환타']

const shallowCopy = arr2.concat();

console.log(shallowCopy);
// > (3) [1, 2, 3]

arr2[0][0] = 100;
arr2[1] = 200;
console.log(shallowCopy);
console.log(arr2);
console.log(mergedArr);
