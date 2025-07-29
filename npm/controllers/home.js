const home =  (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'Welcome.html'));
}

let RegisteredAddress=[];

const postHome=  (req, res) =>{
    console.log("form is received", req.body, req.body.name);
    RegisteredAddress.push(req.body.name);
    console.log("Registered Addresses:", RegisteredAddress);
    res.sendFile(path.join(rootDir, 'views', 'Received.html'));
}

const get=(req, res, next)=>{
    console.log("Hello", req.method, req.url);
    console.log("Registered Addresses:", RegisteredAddress);
  res.render('Channel', {registeredAddress: RegisteredAddress, title: 'Welcome to the channel'});}

exports.get=get;
exports.home=home;
exports.postHome=postHome;
exports.RegisteredAddress = RegisteredAddress;