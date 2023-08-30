const http = require("http");

http
.createServer((req, res)=>{
    if(req.url === "/"){// empty url
        res.writeHead(200); // 리스폰스 메시지 헤더필드에 상태코드를 적어주는 것 잘 응답했으면 이거 적어주면 됨 
        res.end("main url") // 
    }else if(req.url ==="/upload"){ // 분기처리
        res.writeHead(200);
        res.end("upload url");
    }else if (req.url === "/delete") {
        res.writeHead(200);
        res.end("delete url");
    }else{
        res.writeHead(404);
        res.end("Not Found!")
    }
})
.listen(3000, () => {
    console.log("3000번 포트 서버 접속 완료!")
})