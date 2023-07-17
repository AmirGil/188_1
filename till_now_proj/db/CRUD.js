const path = require('path');
const sql = require('./DB');
const cookie = require('cookie-parser');
const mysql = require('mysql2');


  const createTable = (req, res) => {
    const createQuery = 
    'CREATE TABLE IF NOT EXISTS Users (name VARCHAR(255) NOT NULL,password VARCHAR(255) NOT NULL,email VARCHAR(255) PRIMARY KEY,hadua1 DECIMAL(5, 2) DEFAULT NULL,fizica DECIMAL(5, 2) DEFAULT NULL,meamlemdina DECIMAL(5, 2) DEFAULT NULL)';
    sql.query(createQuery, (err, result) => {
      if (err) {
        console.error('Error creating table:', err);
        res.status(500).send('Failed to create table');
        return;
      }
      res.status(200).send('Table created successfully');
    });
  };

  const dropTable = (req,res)=>{
    const Q2 = 'drop TABLE `Users`;';    
    sql.query(Q2, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        res.send("hi - table dropped");
        return;
    })};



  

  const insertGrades = (req, res) => {
    const user = req.cookies.nameUser;
    const newGrade = {
      Grade: req.body.hadua1
    };
    const updateQuery = 'UPDATE Users SET hadua1 = ? WHERE email = ?';
    sql.query(updateQuery, [newGrade.Grade, user], (updateErr, updateResult) => {
      if (updateErr) {
        console.error('Error updating grade: ', updateErr);
        res.send('Something went wrong');
        return;
      }
      res.redirect('/home');
      console.log("success");
    });
  };

  const insertGrades1 = (req, res) => {
    const user = req.cookies.nameUser;
    const newGrade = {
      Grade: req.body.fizica
    };
    const updateQuery = 'UPDATE Users SET fizica = ? WHERE email = ?';
    sql.query(updateQuery, [newGrade.Grade, user], (updateErr, updateResult) => {
      if (updateErr) {
        console.error('Error updating grade: ', updateErr);
        res.send('Something went wrong');
        return;
      }
      res.redirect('/home');
      console.log("success");
    });
  }; 

  const insertGrades2 = (req, res) => {
    const user = req.cookies.nameUser;
    const newGrade = {
      Grade: req.body.meamlemdina
    };
    const updateQuery = 'UPDATE Users SET meamlemdina = ? WHERE email = ?';
    sql.query(updateQuery, [newGrade.Grade, user], (updateErr, updateResult) => {
      if (updateErr) {
        console.error('Error updating grade: ', updateErr);
        res.send('Something went wrong');
        return;
      }
      res.redirect('/home');
      console.log("success");
    });
  }; 


  const getGrades = (req, res) => {
    const email = req.cookies.nameUser;
    const updateQuery =
      'SELECT hadua1, fizica, meamlemdina FROM Users WHERE email = ?';

    sql.query(updateQuery, [email], (updateErr, updateResult) => {
      if (updateErr) {
        console.error('Error updating grades:', updateErr);
        res.status(500).send('Failed to get grades');
        return;
      }
      res.cookie("h1", updateResult[0].hadua1);
      res.cookie("f1", updateResult[0].fizica);
      res.cookie("m1", updateResult[0].meamlemdina);
      console.log("success");
      res.sendFile(path.join("C:/Users/user/Documents/repos/shigamer", "views/index.html"))
      return;
    });
  };
  

 const createNewUser = (req, res) => {
  const newUser = {
    name: req.body.username,
    password: req.body.password,
    email: req.body.Email
  };
  const checkQuery = 'SELECT * FROM Users WHERE email = ?';
  sql.query(checkQuery, [newUser.email], (checkErr, checkResult) => {
    if (checkErr) {
      console.error('Error checking user existence: ', checkErr);
      res.send('Something went wrong');
      return;
    }

    
    if (checkResult.length > 0) {
      // Display an alert pop-up message and redirect back to /signup
      res.send("<script>alert('Email already exists'); window.location.href = '/signup';</script>");
      return;
    }

    const insertQuery = 'INSERT INTO Users (name, password, email) VALUES (?, ?, ?)';
    sql.query(insertQuery, [newUser.name, newUser.password, newUser.email], (insertErr, insertResult) => {
      if (insertErr) {
        console.error('Error creating a new user: ', insertErr);
        res.send('Something went wrong');
        return;
      }

      res.cookie('nameUser', newUser.email);
      console.log("user added, email:" + newUser.email);
      res.redirect('/');
      });
  });
};

  
const loginCheck = (req, res) => {
  const email = req.body.Email;
  const password = req.body.password;
  console.log("email"+email +"pass"+ password) 

  const checkQuery = 'SELECT * FROM Users WHERE email = ? AND password = ?';
  sql.query(checkQuery, [email, password], (err, result) => {
    if (err) {
      console.error('Error checking login credentials:', err);
      res.status(500).send('Something went wrong');
      return;
    }

    if (result.length > 0) {
      res.cookie('nameUser', email);
      res.redirect('/home'); // Redirect to /home if login is successful
    } else {
            // Display an alert pop-up message and redirect back to /login
            res.send("<script>alert('Incorrect email or password'); window.location.href = '/';</script>");
            return;
    }
  });
};


const searchUser = (req,res)=>{
    // get cookie
    const activeUser = req.cookies.name_user;
    
    // validate body exists
    if (!req.body) {
        res.status(400).send("cannot serch user - content cannot be empty");
        return;
    };
    // cretae json object for query
    const searchName = req.body.searchName;
    // sql query syntax
    const Q2 = 'SELECT * FROM SignUps where name like ?';
    // run query
    sql.query(Q2, searchName + "%", (err, mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send('cannot find user');
            return;
        }
        res.send(mysqlres);
        console.log("active user is");
        return;
    });
}; 

const selectAllUsers = (req,res)=>{
    const Q3 = 'select * from Users';
    sql.query(Q3, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send("cannot find users");
            return;
        }
        //res.send(mysqlres);
        res.send(mysqlres);
        console.log("found table");
        return;
    })
};


module.exports = {insertGrades1, insertGrades2, createTable, createNewUser, searchUser, selectAllUsers, loginCheck, insertGrades,dropTable, getGrades}