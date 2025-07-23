const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use('/', (req, res, next) => {
  console.log("1st middleware", req.method, req.url);
  next();
})
app.use('/', (req, res, next) => {
  console.log("2nd middleware", req.method, req.url);
  next();
})

// app.use('/', (req, res, next) => {
//   console.log("2nd middleware", req.method, req.url);
//   res.send('<h1>Hello World!</h1>');
// })

app.get('/', (req, res)=>{
  res.send(`Welcome to the homepage!
    <h2><a href="/contact">Contact us</a></h2>`);
})

app.get('/contact', (req, res, next) =>{
  console.log("Contact page accessed");
  res.send(`<h1>Welcome to the contact page!</h1>
    <form action="/contact" method="POST">
    Name: <input type="text" name="name" placeholder="Enter your name">
    Email: <input type="email" name="email" placeholder="Enter your email">
    <button type="submit">Submit</button>`);
})
app.use(bodyParser.urlencoded());

app.post('/contact', (req, res)=>{
  console.log("Form is received", req.body);
  res.send(`<h1> Thank you we will reach out to you soon!</h1>`);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
