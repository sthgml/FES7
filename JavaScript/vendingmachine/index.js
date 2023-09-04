import ColaGenerator from "./js/colaGenerator.js";

let colaGenerator = new ColaGenerator();
colaGenerator.setup()
(async () => {await colaGenerator.loadData()}) //최상위에서 못쓰면 이렇게 해


