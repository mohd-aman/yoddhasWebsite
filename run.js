const express=require('express');
const path=require('path');
const app=express();
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.get('/',(req,res)=>{
    res.render('./index.ejs');
});

app.get('/blogs',(req,res)=>{
    res.render('./blogs.ejs');
});

app.listen(3000,()=>{
    console.log("Code running at 3000")
});