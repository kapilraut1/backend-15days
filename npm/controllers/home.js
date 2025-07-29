const path = require('path');
const rootDir = require('../utils/pathUtil');
const Home = require('../models/homes')
const home =  (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'Welcome.html'));
}


const postHome=  (req, res) =>{
    console.log("form is received", req.body, req.body.name);
    const home = new Home(req.body.name);
    home.save();
    res.sendFile(path.join(rootDir, 'views', 'Received.html'));
}

const get=(req, res, next)=>{
    console.log("Hello", req.method, req.url);
    RegisteredAddress = Home.fetchAll();
  res.render('Channel', {registeredAddress: RegisteredAddress, title: 'Welcome to the channel'});}

exports.get=get;
exports.home=home;
exports.postHome=postHome;
