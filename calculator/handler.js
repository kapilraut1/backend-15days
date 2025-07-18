const {sumRequestHandler}= require('./sum');

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
} else if(req.url.toLowerCase()==='/calculator'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
        <head><title>Calculator</title></head>
        <body><h1>Welcome to the Calculator</h1>
        <form action="/calculate-result" method="POST">
            <input type="number" name="num1" placeholder="Enter first number" required>
            <input type="number" name="num2" placeholder="Enter second number" required>
            <button type="submit">Calculate</button>
        </form>
        </body>
        </html>`);
        return res.end();
}
else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
    return sumRequestHandler(req, res);

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