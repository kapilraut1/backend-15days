const express = require('express');
const path = require('path');
let RegisteredAddress=[];

const hostRouter = express.Router();
const rootDir = require('../utils/pathUtil');

hostRouter.get('/host/home', (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'Welcome.html'));
})
hostRouter.post('/host/home', (req, res) =>{
    console.log("form is received", req.body, req.body.name);
    RegisteredAddress.push(req.body.name);
    console.log("Registered Addresses:", RegisteredAddress);
    res.sendFile(path.join(rootDir, 'views', 'Received.html'));
})


exports.hostRouter = hostRouter;
exports.RegisteredAddress = RegisteredAddress;