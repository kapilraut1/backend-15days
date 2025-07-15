const { Console } = require('console');
const http = require('http');

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<title><h1>Hello</h1></title>');
 res.write('<body><h>2Hello</h2></body>');
res.write('</html>');
res.end();
})




const PORT= 3000;
server.listen(PORT,()=>{
    console.log(`server listening at port http://localhost:${PORT}`)
} );