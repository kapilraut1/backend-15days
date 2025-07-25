const express = require('express');
const path = require('path');
const userRouter = express.Router();
const rootDir = require('../utils/pathUtil');

userRouter.get('/', (req, res, next)=>{
    console.log("Hello", req.method, req.url);
    res.sendFile(path.join(rootDir, 'views', 'Channel.html'));
})
module.exports= userRouter;