const express = require('express');
const path = require('path');
const PORT=3000;
const app = express();
const {hostRouter}= require('./routes/hostRouter');
const userRouter= require('./routes/userRouter');
const errController= require('./controllers/error');
//body parser middleware
app.set('view engine', 'ejs');
app.set('views', 'views')
app.use(express.urlencoded({ extended: true }));

app.use(hostRouter);
app.use(userRouter);

const rootDir = require('./utils/pathUtil');
app.use(express.static(path.join(rootDir, 'public')));

app.use("/",errController.err);


app.listen(PORT, ()=>{
    console.log(`Server is runnning on address http://localhost:${PORT}`);  
})