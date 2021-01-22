const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
//route
const mysql = require("mysql");
let config = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"01224659503"
});
config.connect(function(err){
    if(err)
    console.log(err)
    else console.log("database connected");
})
config.query("USE nodejs");
// config.query("CREATE TABLE USER(name nvarchar(255))",function(err){
//     if(err)
//     console.log(err)
//     else console.log("table created");
// })
// config.query("INSERT INTO USER(name) VALUES('AAAA')",function(err){
//     if(err)
//     console.log(err)
//     else console.log("insert success");
// })
//middleware
config.query("SELECT * FROM USER",function(err,result){
    if(err)
    console.log(err)
    app.get("/data",function(req,res,next){
       res.send(result);
   })
})


// config.query("CREATE DATABASE nodejs",function(err,result){
//     if(err)
//     console.log(err)
//     else console.log("database created");
// })

const homeRouter = require("./Route/Home");
app.use("/homepage",homeRouter);
console.log(1123123);
app.get("/",function(req,res,next){
    res.send("hello");
});
app.get("/test",function(req,res,next){
    res.send("test nodejs");
})
app.post("/post",function(req,res,next){
    console.log(req.body);
    res.send("post");
})
//delete
//put
//restfulAPI

const port = 3000;
server.listen(3000,function(err){
    if(err)
    console.log(err);
    else console.log("your app is on 3000");
});
module.exports = app