const mysql = require("mysql2");
require('dotenv').config();

//initiate connection to mySQL
const sqlconnection = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env. DB_USER, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the employee_tracker_db database.`)
);

sqlconnection.connect((err) => {
  if (err) throw err;
});

module.exports = sqlconnection;
