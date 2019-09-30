const mysql = require('mysql');
const express =require('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());  
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","*");
    next();
  });
  
  
var mysqlconnection= mysql.createConnection({
    multipleStatements:true,
    host:'localhost',
    user:'root',
    password:'********',
    database:'onlineshop'
    
});

mysqlconnection.connect((err)=>{
    if(!err)
        console.log("DB connected")
    else
        console.log("db connection failed")
});

app.listen(3000,()=>console.log('server is listening at 3000'))



app.get('/customers/',(req,res)=>{
    mysqlconnection.query('SELECT * FROM customers ',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
})


app.get('/customers/:id',(req,res)=>{
    mysqlconnection.query('SELECT * FROM customers where userid = ?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
})


app.delete('/customers/:id',(req,res)=>{
    mysqlconnection.query('DELETE FROM customers where userid = ?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        res.send("Deleted Sucessful");
        else
        console.log(err);
    })
})


app.post('/customers',(req,res)=>{
    let cust=req.body;
    var sql = "SET @userid = ?;SET @name = ?;SET @phone=?;SET @address = ?;\
                CALL customersAddOrEdit(@userid,@name,@phone,@address);";
    mysqlconnection.query(sql,[cust.userid,cust.name,cust.phone,cust.address],(err,rows,fields)=>{
        if(!err)
         rows.forEach(element => {
            if(element.constructor == Array)
            res.send('Inserted customers id : '+element[0].userid);
        }); 
        else
        console.log(err);
    })
}) 



