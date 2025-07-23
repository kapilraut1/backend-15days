const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res, next)=>{
    console.log("Hello", req.method, req.url);
    res.send(`
        <h1>Welcome to the channel</h1>
        <h2><a href="/host/home">Home</a></h2>`)
})
module.exports= userRouter;