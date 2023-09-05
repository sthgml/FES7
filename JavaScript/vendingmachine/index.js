import ColaGenerator from "./js/colaGenerator.js";
import VendingMachineFunc from "./js/components/vendingMachineFunc.js";


let colaGenerator = new ColaGenerator();
await colaGenerator.setup() 

let vendingMachineFunc = new VendingMachineFunc();
await vendingMachineFunc.setup();

// 비동기로 작동하기 때문에 colatGenerator.setup이 완료될때까지 vendingMachineFunc.setup()이 기다려주지 않아.
// 최상위 노드니까 await 써도 돼
// (async () => {await colaGenerator.loadData()})() //최상위에서 못쓰면 이렇게 해