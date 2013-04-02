var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type' 'textplain'});
  res.end('Hello Worldn');
}).listen(8080);