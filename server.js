var http = require('http');
var server = http.createServer(function(req, res){
  res.writeHead(200);
  res.end('Hi everybody!')
  console.log(req.url)
  console.log("response returned");
});
server.listen(8080);
