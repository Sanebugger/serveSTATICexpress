const express = require('express')
const app = express()
const port = 8000
//To serve static files such as images, CSS files, and JavaScript files,use the express.static built-in middleware function in Express.
//app.use(express.static('public')) //bss ye ek line ,to serve our public folder content // bt hame public folder ka path dena hoga
const path = require('path')
//  console.log(path.join(__dirname,'../public'))  //we used this code to get the path of public folder
const bhenc = path.join(__dirname,'../public');
app.use(express.static(bhenc));


//routing
app.get('/', (req, res) => {
  res.send('this is home ');
});

app.get("/about",(req,res)=> {
  res.send('this is about page');
});
app.get("/temp",(req,res)=> {
  res.send({id : 1 ,na : "saurav"});
  
});
app.get("/contact",(req,res)=> {
  res.send('this is contact page');
});

//listn it yar
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

