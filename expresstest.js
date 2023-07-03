const http = require('http');
const porta = process.env.PORT

const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Unicredit')

})

server.listen(porta || 3000,()=> {console.log('funcionando :D')})