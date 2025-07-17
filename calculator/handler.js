const requestHandler =(req, res)=>{
console.log(req.url, req.method);
if(req.url ==='/'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
        <head><title>Hello coding </title></head>
        <body><h1>Hello to the code...</h1>
        <a href="/calculator">Go to calculator</a>
        </body>
        </html>`);
        return res.end();
}
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
        <head><title>404 page not available </title></head>
        <body><h1>Hello to the code...</h1>
        <a href="/">Go to home </a>
        </body>
        </html>`);
        return res.end();

}

exports.requestHandler = requestHandler;