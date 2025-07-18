const sumRequestHandler= (req, res) => {
    console.log('Handling sum request', req.url);
    const body = [];
    req.on('data', chunk => {
        body.push(chunk);
    });
    req.on('end', () => {   
        const bodytr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodytr);
        const bodyObj = Object.fromEntries(params);
        console.log('Parsed body:', bodyObj);
const result = Number(bodyObj.num1) + Number(bodyObj.num2);
            console.log('Sum result:', result);
    res.write(`
        <html>
        <head><title>Data check </title></head>
        <body><h1>Your sum is ${result}</h1>
        <a href="/">Go to home </a>
        </body>
        </html>`);
        return res.end();
});

  
}
exports.sumRequestHandler = sumRequestHandler;