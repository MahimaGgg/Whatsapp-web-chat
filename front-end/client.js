
// node-server ===get your own ====



http = require ('http');

http.createServer(function (req,res){

res.writeHead(200,{'Content-Type':'test/plain'});
res.end('Hello World!');
}).listen(8080);

