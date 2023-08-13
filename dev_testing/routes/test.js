const http = require('http');

http.createServer((request, response)=>{
    response.writeHead(200, { //200 quer dizer Ok :)
        'Content-Type' : 'text/plain'
    });
    response.write('It works :D');
    response.end();

}).listen(1337);