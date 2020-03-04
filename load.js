/* 노드js는 웹용자바스크립크와는 달리 응용프로그램제작이 가능하므로
로컬하드의 파일도 읽어들일 수 있더ㅏ
이때 사용하는 모듈이 File system모듈이다*/
var fs = require("fs");

fs.readFile("memo.txt","utf8",function(err,data){
    console.log("읽어드린 데이터는", data);
})