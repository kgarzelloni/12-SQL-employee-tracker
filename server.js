const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require("./db/sqlconnection");

// required for logo rendering
const logo = require("asciiart-logo");
const config = require("./package.json");


// initial function that runs everything to start the app

function init() {
  console.log("the application is running");
  console.log(logo(config).render());
  inquirerPrompts();
}
init();
// function for prompts
function inquirerPrompts() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "What do you want to do?",
        choices: [
          "View all employees",
          "Add an employee",
          "Update an Employee Role",
          "View all roles",
          "Add a role",
          "View all departments",
          "Add a department",
        ],
      },
    ])
    .then((res) => {
      console.log(res);
    });
}

// function for view employees
const getEmployees = `SELECT id, first_name, last_name FROM employee`;
  
db.query('SELECT id, frist_name, last_name FROM employee', function (err, results) {
  console.table(results);
});

// function for add employees

// function for view roles

// function for updating employee role

// function for add roles

// function for view departments

// function for add departments
