const http = require('http');
const port = 3000;
const host = '127.0.0.1';

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type' : 'text/html'});
    if(req.url=='/'){
        res.write('<h1> Welcome </h1>');
    }
    else if(req.url == '/canal'){
        res.write('<h1> O jogo </h1>');
    }
    if(req.url=='/elite'){
        res.write('<h1> Pelo menos 10 em calculo </h1>');
    }
    res.end();
});

server.listen(port, host, 'Funcionando');