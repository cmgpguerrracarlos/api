const express = require('express');
const app = express();
const mysql = require('mysql');
const data = [];
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"api"
});

app.use('/api',(req,res)=>{
    const con = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"api"
    });
    con.connect();
    con.query('SELECT * FROM todo',(error,result)=>{
        if(!error){
            
            res.send(result);
        }else{
            console.log(error);
            res.send("No result");
        }
    });
    con.end();
});

app.use('/',(req,res)=>{
    res.send("Welcome");
});
app.listen(9000,()=>{
    console.log("Runnin on port 9000");
});