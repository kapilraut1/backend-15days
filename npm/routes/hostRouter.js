const express = require('express');


const hostRouter = express.Router();

hostRouter.get('/host/home', (req, res)=>{
    res.send(`
        <h1> Welcome to the home page</h1>
        <h2> Register your home</h2>
        <form action='/host/home' method='POST'>
        Address: <input type="text" name="name" placeholder="Enter your name">
        <button type="submit">Submit</button>
        </form>`)
})

hostRouter.post('/host/home', (req, res) =>{
    console.log("form is received", req.body);
    res.send(`<h1>Successfully registered your home!'</h1>
        
        <h2><a href="/">Return back</a></h2>`)
})


module.exports= hostRouter;