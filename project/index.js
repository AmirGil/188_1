// import and set up
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
//const SQL = require('./DB/DB');
const port = 2023;
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//routing

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/login.html"));
});

app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get('/signup', (req,res)=>{
    res.sendFile(path.join(__dirname, "views/signup.html"));
});

app.post('/formSignUp', (req,res)=>{
    res.redirect('/');
});

app.post('/formLogin', (req,res)=>{
    res.redirect('/home');
});

//set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});