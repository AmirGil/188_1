// import and set up
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cookieParser = require('cookie-parser');
const crud = require('./db/CRUD');
//const SQL = require('./DB/DB');
const port = 4000;
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

var t;
     


//routing

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/login.html"));
});

/*
app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/index.html"));
});*/

app.get('/signup', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/signup.html"));
});

app.post('/formSignUp', crud.createNewUser);


app.post('/formLogin', crud.loginCheck);


//courses 
app.post('/formHedva',crud.insertGrades);



app.post('/formmeamlemdina', crud.insertGrades2);


//// here you create the DB
app.get('/createTable', crud.createTable);
app.post('/createNewUser', crud.createNewUser);
app.get('/searchUser', crud.searchUser);
app.get('/selectAllUsers', crud.selectAllUsers);
app.post('/formLogin', crud.loginCheck);
app.post('/insertGrade',crud.insertGrades);
app.get('/dropTable', crud.dropTable);
app.get('/home', crud.getGrades);
app.post('/formfizica', crud.insertGrades1)

//set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});