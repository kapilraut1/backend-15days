const express = require('express');
const path = require('path');
const userRouter = express.Router();

userRouter.get('/', (req, res, next)=>{
    console.log("Hello", req.method, req.url);
    res.sendFile(path.join(__dirname, '../', 'views', 'Channel.html'));
})
module.exports= userRouter;