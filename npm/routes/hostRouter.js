const express = require('express');
const path = require('path');

const hostRouter = express.Router();

hostRouter.get('/host/home', (req, res)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'Welcome.html'));
})

hostRouter.post('/host/home', (req, res) =>{
    console.log("form is received", req.body);
    res.sendFile(path.join(__dirname, '../', 'views', 'Received.html'));
})


module.exports= hostRouter;