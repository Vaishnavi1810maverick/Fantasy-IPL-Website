const express = require('express');
const app=express();
const path = require('path');
app.use('/images', express.static('images'));
app.use(express.static(__dirname + '/public'));
app.get("/",function(req,res){

  res.sendFile(__dirname+"/index.html");
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

app.get('/signup',function(req,res){
  res.sendFile(path.join(__dirname+'/signup.html'));
});

app.listen(3000,function () {
  console.log("Server running in port 3000");
});
