const express = require('express');
const mysql = require("mysql");
const data_b = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.info   
  });

exports.register = (req, res) => {
    console.log(req.body);

    const {name, email, password, confirm_password} = req.body
    data_b.query('SELECT email FROM users WHERE email = ?', [email],(error, result) =>{
        if (error) {
            console.log(error);
        }
        if (result.length > 0) {
            return res.render('register`') {
                message: 'This email is already taken.....'
            }
        } else if (password !== confirm_password){
            return res.render('register', {
                message: 'Passwords do not match'
            });
        }
    });
}
