//console.log("Armaan Singh");
// to run this file we usually  run -- node index.js, but to run it with package.js -- will add script command in it .

require('dotenv').config()
const express = require("express");
const app = express();
// const port = 4000; used .env instead of this.

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/instagram", (req, res) => {
  res.send("armaanaulakh2002");
});

app.get('/facebook',(req, res)=>{
    res.send("<h1>FaceBook</h1>")
})

app.get('/youtube', (req, res)=>{
    res.send('<h1>Youtube</h1>')
})
app.listen(process.env.PORT, () => {//here using the env to access the PORT  variable declared in the env file.
  console.log(`example app listening on port ${port}`);
});
// it has the main role to make app listening. (listen)
