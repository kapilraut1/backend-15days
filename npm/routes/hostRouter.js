const express = require('express');
const path = require('path');

const hostRouter = express.Router();
const rootDir = require('../utils/pathUtil');

hostRouter.get('/host/home', (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'Welcome.html'));
})

hostRouter.post('/host/home', (req, res) =>{
    console.log("form is received", req.body);
    res.sendFile(path.join(rootDir, 'views', 'Received.html'));
})


module.exports= hostRouter;