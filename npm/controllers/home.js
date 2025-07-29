export const home =  (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'Welcome.html'));
}

export const postHome=  (req, res) =>{
    console.log("form is received", req.body, req.body.name);
    RegisteredAddress.push(req.body.name);
    console.log("Registered Addresses:", RegisteredAddress);
    res.sendFile(path.join(rootDir, 'views', 'Received.html'));
}