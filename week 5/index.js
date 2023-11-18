const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: './info.env'});

const app = express();

const data_b = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.info   
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

data_b.connect( (error) => {
      if(error) {
        console.log(error)
      } else {
        console.log("MYSQL Connected...")
      }
})

app.get("/", (req, res) => {
  res.render("PROFILE"); 
});

app.get("/REGISTER", (req, res) => {
  res.render("REGISTER"); 
});

app.listen(5000, () => {
    console.log("Server started on Port 5000");
})  


  