const path = require('path');
const sql = require('./DB');
const cookie = require('cookie-parser');
const mysql = require('mysql2');


  const createTable = (req, res) => {
    const createQuery = 
    'CREATE TABLE IF NOT EXISTS Users (name VARCHAR(255) NOT NULL,password VARCHAR(255) NOT NULL,email VARCHAR(255) PRIMARY KEY,hadua1 DECIMAL(5, 2) DEFAULT NULL, fizica DECIMAL(5, 2) DEFAULT NULL, meamlemdina DECIMAL(5, 2) DEFAULT NULL, b1 DECIMAL(5, 2) DEFAULT NULL, b2 DECIMAL(5, 2) DEFAULT NULL, b3 DECIMAL(5, 2) DEFAULT NULL, r DECIMAL(5, 2) DEFAULT NULL, MISc11 DECIMAL(5, 2) DEFAULT NULL, MISc12 DECIMAL(5, 2) DEFAULT NULL, MISc13 DECIMAL(5, 2) DEFAULT NULL, MISc14 DECIMAL(5, 2) DEFAULT NULL, MISc15 DECIMAL(5, 2) DEFAULT NULL, MISc16 DECIMAL(5, 2) DEFAULT NULL, MISc17 DECIMAL(5, 2) DEFAULT NULL, MISc18 DECIMAL(5, 2) DEFAULT NULL, MISc21 DECIMAL(5, 2) DEFAULT NULL, MISc22 DECIMAL(5, 2) DEFAULT NULL, MISc23 DECIMAL(5, 2) DEFAULT NULL, MISc24 DECIMAL(5, 2) DEFAULT NULL, MISc25 DECIMAL(5, 2) DEFAULT NULL, MISc26 DECIMAL(5, 2) DEFAULT NULL, MISc27 DECIMAL(5, 2) DEFAULT NULL, MISc28 DECIMAL(5, 2) DEFAULT NULL, MISc29 DECIMAL(5, 2) DEFAULT NULL, MISc210 DECIMAL(5, 2) DEFAULT NULL, MISc211 DECIMAL(5, 2) DEFAULT NULL, MISc31 DECIMAL(5, 2) DEFAULT NULL, MISc32 DECIMAL(5, 2) DEFAULT NULL, MISc33 DECIMAL(5, 2) DEFAULT NULL, MISc34 DECIMAL(5, 2) DEFAULT NULL, MISc35 DECIMAL(5, 2) DEFAULT NULL, MISc36 DECIMAL(5, 2) DEFAULT NULL, MISc37 DECIMAL(5, 2) DEFAULT NULL, MISc38 DECIMAL(5, 2) DEFAULT NULL, MISc39 DECIMAL(5, 2) DEFAULT NULL, MISc310 DECIMAL(5, 2) DEFAULT NULL, CSc11 DECIMAL(5, 2) DEFAULT NULL, CSc12 DECIMAL(5, 2) DEFAULT NULL, CSc13 DECIMAL(5, 2) DEFAULT NULL, CSc14 DECIMAL(5, 2) DEFAULT NULL, CSc15 DECIMAL(5, 2) DEFAULT NULL, CSc16 DECIMAL(5, 2) DEFAULT NULL, CSc21 DECIMAL(5, 2) DEFAULT NULL, CSc22 DECIMAL(5, 2) DEFAULT NULL, CSc23 DECIMAL(5, 2) DEFAULT NULL, CSc24 DECIMAL(5, 2) DEFAULT NULL, CSc25 DECIMAL(5, 2) DEFAULT NULL, CSc31 DECIMAL(5, 2) DEFAULT NULL, CSc32 DECIMAL(5, 2) DEFAULT NULL, CSc33 DECIMAL(5, 2) DEFAULT NULL, CSc34 DECIMAL(5, 2) DEFAULT NULL, CSc35 DECIMAL(5, 2) DEFAULT NULL)';
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
    //const newGrade = {
    //  Grade: req.body.fizica
    //};
    console.log("aaaaa");
    const Grades = [req.body.hadua1, req.body.fizica, req.body.meamlemdina, req.body.b1, req.body.b2, req.body.b3, req.body.r, req.body.MISc11, req.body.MISc12, req.body.MISc13, req.body.MISc14, req.body.MISc15, req.body.MISc16, req.body.MISc17, req.body.MISc18, req.body.MISc21, req.body.MISc22, req.body.MISc23, req.body.MISc24, req.body.MISc25, req.body.MISc26, req.body.MISc27, req.body.MISc28, req.body.MISc29, req.body.MISc210, req.body.MISc211, req.body.MISc31, req.body.MISc32, req.body.MISc33, req.body.MISc34, req.body.MISc35, req.body.MISc36, req.body.MISc37, req.body.MISc38, req.body.MISc39, req.body.MISc310, req.body.CSc11, req.body.CSc12, req.body.CSc13, req.body.CSc14, req.body.CSc15, req.body.CSc16, req.body.CSc21, req.body.CSc22, req.body.CSc23, req.body.CSc24, req.body.CSc25, req.body.CSc31, req.body.CSc32, req.body.CSc33, req.body.CSc34, req.body.CSc35];
    const Subjects =['hadua1', 'fizica', 'meamlemdina', 'b1', 'b2', 'b3', 'r', 'MISc11', 'MISc12', 'MISc13', 'MISc14', 'MISc15', 'MISc16', 'MISc17', 'MISc18', 'MISc21', 'MISc22', 'MISc23', 'MISc24', 'MISc25', 'MISc26', 'MISc27', 'MISc28', 'MISc29', 'MISc210', 'MISc211', 'MISc31', 'MISc32', 'MISc33', 'MISc34', 'MISc35', 'MISc36', 'MISc37', 'MISc38', 'MISc39', 'MISc310', 'CSc11', 'CSc12', 'CSc13', 'CSc14', 'CSc15', 'CSc16', 'CSc21', 'CSc22', 'CSc23', 'CSc24', 'CSc25', 'CSc31', 'CSc32', 'CSc33', 'CSc34', 'CSc35'];
    let subs = '';
    let values = [];
    console.log("Hello");
    for(let i = 0; i < Subjects.length; i++)
    {
      if (Grades[i] != '0' && Grades[i] != '' && Grades[i] != null)
      {
        subs += Subjects[i] + " = ?, ";
        values.push(Grades[i]);
      }
    }
    subs = subs.slice(0, subs.length - 2);
    values.push(user);
    if (subs == "")
    {
      res.redirect('/home');
      return;
    }    
    const updateQuery = 'UPDATE Users SET ' + subs + ' WHERE email = ?';
      sql.query(updateQuery, values, (updateErr, updateResult) => {
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
      'SELECT hadua1, fizica, meamlemdina, b1, b2, b3, r, MISc11, MISc12, MISc13, MISc14, MISc15, MISc16, MISc17, MISc18, MISc21, MISc22, MISc23, MISc24, MISc25, MISc26, MISc27, MISc28, MISc29, MISc210, MISc211, MISc31, MISc32, MISc33, MISc34, MISc35, MISc36, MISc37, MISc38, MISc39, MISc310, CSc11, CSc12, CSc13, CSc14, CSc15, CSc16, CSc21, CSc22, CSc23, CSc24, CSc25, CSc31, CSc32, CSc33, CSc34, CSc35 FROM Users WHERE email = ?';
    sql.query(updateQuery, [email], (updateErr, updateResult) => {
      if (updateErr) {
        console.error('Error updating grades:', updateErr);
        res.status(500).send('Failed to get grades');
        return;
      }
      res.cookie("h1", updateResult[0].hadua1);
      res.cookie("f1", updateResult[0].fizica);
      res.cookie("m1", updateResult[0].meamlemdina);
      res.cookie("b1", updateResult[0].b1);
      res.cookie("b2", updateResult[0].b2);
      res.cookie("b3", updateResult[0].b3);
      res.cookie("r", updateResult[0].r);
      res.cookie("MISc11", updateResult[0].MISc11);
      res.cookie("MISc12", updateResult[0].MISc12);
      res.cookie("MISc13", updateResult[0].MISc13);
      res.cookie("MISc14", updateResult[0].MISc14);
      res.cookie("MISc15", updateResult[0].MISc15);
      res.cookie("MISc16", updateResult[0].MISc16);
      res.cookie("MISc17", updateResult[0].MISc17);
      res.cookie("MISc18", updateResult[0].MISc18);
      res.cookie("MISc21", updateResult[0].MISc21);
      res.cookie("MISc22", updateResult[0].MISc22);
      res.cookie("MISc23", updateResult[0].MISc23);
      res.cookie("MISc24", updateResult[0].MISc24);
      res.cookie("MISc25", updateResult[0].MISc25);
      res.cookie("MISc26", updateResult[0].MISc26);
      res.cookie("MISc27", updateResult[0].MISc27);
      res.cookie("MISc28", updateResult[0].MISc28);
      res.cookie("MISc29", updateResult[0].MISc29);
      res.cookie("MISc210", updateResult[0].MISc210);
      res.cookie("MISc211", updateResult[0].MISc211);
      res.cookie("MISc31", updateResult[0].MISc31);
      res.cookie("MISc32", updateResult[0].MISc32);
      res.cookie("MISc33", updateResult[0].MISc33);
      res.cookie("MISc34", updateResult[0].MISc34);
      res.cookie("MISc35", updateResult[0].MISc35);
      res.cookie("MISc36", updateResult[0].MISc36);
      res.cookie("MISc37", updateResult[0].MISc37);
      res.cookie("MISc38", updateResult[0].MISc38);
      res.cookie("MISc39", updateResult[0].MISc39);
      res.cookie("MISc310", updateResult[0].MISc310);
      res.cookie("CSc11", updateResult[0].CSc11);
      res.cookie("CSc12", updateResult[0].CSc12);
      res.cookie("CSc13", updateResult[0].CSc13);
      res.cookie("CSc14", updateResult[0].CSc14);
      res.cookie("CSc15", updateResult[0].CSc15);
      res.cookie("CSc16", updateResult[0].CSc16);
      res.cookie("CSc21", updateResult[0].CSc21);
      res.cookie("CSc22", updateResult[0].CSc22);
      res.cookie("CSc23", updateResult[0].CSc23);
      res.cookie("CSc24", updateResult[0].CSc24);
      res.cookie("CSc25", updateResult[0].CSc25);
      res.cookie("CSc31", updateResult[0].CSc31);
      res.cookie("CSc32", updateResult[0].CSc32);
      res.cookie("CSc33", updateResult[0].CSc33);
      res.cookie("CSc34", updateResult[0].CSc34);
      res.cookie("CSc35", updateResult[0].CSc35);
      console.log("success getting grades");
      res.sendFile(path.join("C:/Users/user/Desktop/188_1/till_now_proj", "views/index.html"))
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


module.exports = {insertGrades, createTable, createNewUser, searchUser, selectAllUsers, loginCheck, dropTable, getGrades}