const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const mysql = require("mysql");
const data_b = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.info   
  });

exports.register = (req, res) => {
    console.log(req.body);

    const {name, email, password, confirm_password} = req.body;
    data_b.query('SELECT email FROM users WHERE email = ?' , [email], async (error, result) => {
        if(error){
            console.log(error);
        }
        if (result.length > 0){
            return res.render('register', {
                message: "that email is already in use"
            })
        } else if (password !== confirm_password){
            return res.render('register', {
                message: 'Passwords do not match'
            });
        }
        let  hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);
       
        data_b.query('INSERT INTO users SET ?',{name: name , email: email, password : hashedPassword}, (error,results)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(results);
                return res.render('register',{
                    message: 'User Registered'
                });
            }
    })       

    })};

    


