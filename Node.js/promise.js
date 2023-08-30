//비동기 task  코드의 흐름을 기다리지 않고 동기는 1,2,3,이 순서대로 실행되는 일련의 흐름을 따르지만
// 자스는 콜백을 실행하고 그 다음에 실행이 되도록 콜백함수를 받도록 일련의 플로우를 만들어주는 역할을 하고 있읍니다.
// 근데 이러면 너무 콜백이 너무 깊어지는 헬이 펼쳐질 수 있습니다.
// 이를 프로미스라는 문법으로 해결할 ㅜㅅ 있도록 만듦..

function sayHello() {
    return new Promise((resolve, reject) => {
        //resolve = success
        // reject == fail
        // const hello = "hello hello";
        resolve('hello');
    })
    // return new Promise((resolve, reject)=>{
    //     reject(new Error())
    // })
}

sayHello()
.then((resolvedData)=>{
    console.log(resolvedData)
})
.then((resolvedData)=>{
    console.log(resolvedData)
})
.then((resolvedData)=>{
    console.log(resolvedData)
})
.catch((error)=>{
    console.log(error)
})

//복잡해보이고 안좋음!