const express = require('express');
const path = require('path');
const PORT=3000;
const app = express();
const hostRouter= require('./routes/hostRouter');
const userRouter= require('./routes/userRouter');
//body parser middleware
app.use(express.urlencoded({ extended: true }));

app.use(hostRouter);
app.use(userRouter);
app.use("/", (req, res)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})


app.listen(PORT, ()=>{
    console.log(`Server is runnning on address http://localhost:${PORT}`);  
})