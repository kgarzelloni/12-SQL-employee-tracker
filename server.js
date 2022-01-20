const inquirer = require("inquirer");
const mysql = require('mysql2');
const db = require("./db/sqlconnection");

// required for logo rendering
const logo = require("asciiart-logo");
const config = require("./package.json");
const { listenerCount } = require("process");

// initial function that runs everything to start the app

function init() {
  console.log("the application is running");
  console.log(logo(config).render());
  inquirerPrompts ();
}
init();
// function for prompts
function inquirerPrompts() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "first_list",
        message: "What do you want to do?",
        choices: [{ name: "View all employees", value: "" },{ name: "Add an employee", value: "" },{ name: "Update an Employee Role", value: "" },
        { name: "View all roles", value: "" },{ name: "Add a role", value: "" },{ name: "View all departments", value: "" },{ name: "Add a department", value: "" }],
      },
    ])
    .then((res) => {
      console.log(res);
    });
}

// function for view employees


// function for add employees


// function for view roles


// function for add roles


// function for view departments


// function for add departments


