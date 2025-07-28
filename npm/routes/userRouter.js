const express = require('express');
const path = require('path');
const userRouter = express.Router();
const rootDir = require('../utils/pathUtil');
const {RegisteredAddress} = require('./hostRouter');
userRouter.get('/', (req, res, next)=>{
    console.log("Hello", req.method, req.url);
    console.log("Registered Addresses:", RegisteredAddress);
  res.render('Channel', {registeredAddress: RegisteredAddress, title: 'Welcome to the channel'});})
module.exports= userRouter;