const { Console } = require('console');
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(res);
})
const PORT= 3000;
server.listen(PORT,()=>{
    console.log(`server listening at port ${PORT}`)
} );