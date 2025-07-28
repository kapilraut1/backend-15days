const express = require('express');
const path = require('path');
const PORT=3000;
const app = express();
const {hostRouter}= require('./routes/hostRouter');
const userRouter= require('./routes/userRouter');
//body parser middleware
app.set('view engine', 'ejs');
app.set('views', 'views')
app.use(express.urlencoded({ extended: true }));

app.use(hostRouter);
app.use(userRouter);

const rootDir = require('./utils/pathUtil');
app.use(express.static(path.join(rootDir, 'public')));

app.use("/", (req, res)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})


app.listen(PORT, ()=>{
    console.log(`Server is runnning on address http://localhost:${PORT}`);  
})