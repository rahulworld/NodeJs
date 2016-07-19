var http = require("http");
console.log("Starting");
var host="127.0.0.1";
var port=1337;
var server = http.createServer(function(request,response){
	console.log("Received request: "+request.url);
	response.writeHead(200,{"Content-type":"text/plain"});
	response.end("hello world");
});
server.listen(port,host,function(){
	console.log("Listening"+host+":"+port);
});