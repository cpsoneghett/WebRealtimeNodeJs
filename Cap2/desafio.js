var http = require('http');
var fs = require('fs');
var url = require('url');

var diretorio = function (arquivo) {
    return __dirname +'/'+arquivo;
};

var rotear = function (pathname) {
    if(pathname && pathname != '/') {
        var arquivo = diretorio(pathname + '.html');
        var existe = fs.existsSync(arquivo);
        if(existe) {
            return arquivo;
        }
        return diretorio("erro.html");
    }
    return diretorio("artigos.html");
};

var server = http.createServer(function (req, res) {
   var pathname = url.parse(req.url).pathname;
   var pagina = rotear(pathname);

   fs.readFile(pagina, function (err, html) {
      res.writeHeader(200, {'Content-Type' : 'text/html'});
      res.end(html);
   });
});

server.listen(3000, function () {
  console.log('Executando desafio.');
});