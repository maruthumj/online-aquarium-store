const express=require('express');
const app=express();

app.use((req, res,next)=>{
console.log(req);
next();
});

app.use((req, res, next)=>{
    res.send('Hello from server');
});

module.exports=app;