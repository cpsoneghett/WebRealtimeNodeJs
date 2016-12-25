var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile(__dirname+'/index.html', function (err, html) {
        res.writeHeader(200, {'Content-Type' : 'text/html'});
        res.write(html);
        res.end();
    });
});

server.listen(3000, function () {
   console.log('Executando site pessoal');
});