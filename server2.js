//웹서버의 응답처리시 response.end()메서드 인수에 컨텐츠를 쌍따옴표
//로 일일이 처리한다는 것은 효율성이 ?떨어짐 예전의 서블릿코드가 이런방식으로 작동했었다
//jsp개선함 
var http = require("http");//http내장모듈 가져오기 
var fs = require("fs"); //내장 filesystem모듈 가져오기 
var url = require("url"); //요청 url분석이나 parsing에 사용 

var server = http.createServer(function(request, response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //클라이언트의 요청 URL을 구분하여 즉 요청을 구분하여 
    //알맞는 페이지 보여주기 
    console.log("클라이언트의 요청 url", request.url);
    var page="";
    if(request.url=="/red"){//red라는 요청이 들어오면 
        page="main.html";
    }else if(request.url=="/yellow"){
        page="main2.html";
    }

    //일일이 데이터를 하드코딩하지말고 파일시스템으로 불러와서 클라이언트애게 보내자 
    fs.readFile(page,"utf8",function(err, data){
        response.end(data);
    });
   
}); //서버 객체 얻기 

server.listen(7777, function(){
    console.log("The server is running at port 7777...");
});

