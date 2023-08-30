const http = require("http");

http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/html"}) //정상적으로 응답이 수신되었을 때 text/html을 반환하겠다.
    res.end("<p>Hello World~!!</p>");
})
.listen(3000, () => {
    console.log("3000번 포트 서버 접속 완료!")
})