require ('dotenv').config();
const mysql = require('mysql2');
function genDb() {
mysql.createConnection({
                host: process.env.DB_HOST ||'localhost',
                user: process.env.DB_USER_NAME ||'root' ,
                password: process.env.DB_PASSWORD ||'password;_because_if_you_can_see_this,_who_gives_a_$41%!',
                database: process.env.DB_NAME ||'emp_db'
            });
    };

module.exports = genDb