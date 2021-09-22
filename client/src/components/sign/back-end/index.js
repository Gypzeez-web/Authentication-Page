const express = require("express");
const mysql=require('mysql');
const cors =require('cors');

const bcrypt=require('bcrypt');
const saltRounds=10;

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Esiva@98",
  database: "CRUD_db_connect",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const number = req.body.number;
  const password = req.body.password;

  bcrypt.hash(password,saltRounds,(err,hash)=>{
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO Register (username,email,number,password) VALUES (?,?,?,?)",
      [username, email, number, password],
      (err, result) => {
        console.log(err);
      }
    );

  })
  
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "SELECT * FROM Register WHERE username = ? ;",
    username,
    (err, result) => {
      if (err) {
        console.log({ err: err });
      }
      if (result.length>0) {
        bcrypt.compare(password,result[0].password,(error,response)=>{
          if(response){
            res.send(result);
          }
          else{
            res.send({message:'Wrong Username or Password'});
          }
        })
      } else {
        res.send({ message: "User doesn't Exist" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});
