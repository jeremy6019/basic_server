//기존의 자바스크립트와는 노드js는 목적이 다르다
//자바스크립트를 이용한 응용프로그래밍에 중심을 두며
//특히 내외부 모듈울 이용하면 간단하게 웹서버도 제작 가능함 
var http = require("http"); //require()로 모듈 호출 
//모듈이란? Node.js네서 함수와 변수가 모아진 라이브러리 

//서버 객체 얻기 
//server객체를 이용하면 웹서버를 구축할 수 있다 
var server = http.createServer(function(request, response){
    //404, 500: HTTP 응답 코드    
    response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    response.end("dkdkdk");
    
});

//서버가동 
server.listen(9999, function(){
    console.log("the server is running at port 9999..");
});