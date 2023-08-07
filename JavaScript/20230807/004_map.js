// map
// 면접 질문에서도 많이 나옵니다.
// 교과서에서 보는 map의 용도와 실무에서의 용도가 다름
// ---- 1. 교과서 
let arr = [1, 2, 3];
let map1 = arr.map(item=>{
    return item**2;
})
console.log(map1);
// > [1, 4, 9]

[1, 2, 3, 4].map(v=> v*3)
// > [3, 6, 9, 12]

[1, 2, 3, 4].map(v => 'hello')
//> ['hello', 'hello', 'hello', 'hello']


//map을 사용해서 1부터 100까지 더하는 코드
[1, 2, 3, 4].map(v => 'hello'+v);
// > ['hello1', 'hello2', 'hello3', 'hello4']

[1, 2, 3, 4].map((v,i) => 'hello'+(i+1));

// ---- 2. 실무
// 이러한 데이터의 형태를 json이라고 합니다. json은 별도로 배웁니다.
let data = [
    {
        "_id": "a",
        "index": 0,
        "age": 40,
        "name": "hojun",
        "gender": "female"
    },
    {
        "_id": "b",
        "index": 1,
        "age": 29,
        "name": "gildong",
        "gender": "male"
    },
    {
        "_id": "c",
        "index": 2,
        "age": 29,
        "name": "Ruiz",
        "gender": "male"
    },
    {
        "_id": "d",
        "index": 3,
        "age": 31,
        "name": "Bender",
        "gender": "male"
    }
]

data[0]
data[0]['name']
data[0]['age']
    (data[0]['age'] + data[1]['age'] + data[2]['age'] + data[3]['age']) / 4
data.map(v => v['age'])
data.map(v => {
    return v['age']
})

// 이게 도대체 어떻게 돌아가는 것일까요?
// [1, 2, 3, 4].map(v => v * 2)이런 예제로는 10번 공부하셔도 이해가 힘듭니다.
// 여기서 v는 1개의 object입니다.
// 마치 아래와 같습니다.
let v = {
    "_id": "64d072367a17c0be080da71b",
    "index": 0,
    "guid": "29a059c2-a8f9-4912-af3c-8a26da9f9d8b",
    "age": 40,
    "name": "Gabriela Farrell",
    "gender": "female"
}
v['age']