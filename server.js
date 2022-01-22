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
  initialPrompts();
}
init();
// function for starting initial prompts
function initialPrompts() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: [
          "View all employees",
          "Add an employee",
          "Update an Employee Role",
          "View all roles",
          "Add a role",
          "View all departments",
          "Add a department",
          "I'm finished managing this database",
        ],
      },
    ])
    .then((res) => {
      console.log(res);
    });
}

// function for view employees
  
db.query('SELECT * FROM employee_tracker_db.employee', function (err, results) {
  if(err)console.log(err)
  console.table(results);
});

// function for add employees

addEmployeePrompt = inquirer.prompt([
{
  type: "input",
  name: "first_name",
  message: "What is the employee's first name?",
  
},
{
  type: "input",
  name: "last_name",
  message: "What is the employee's last name?",
  
},
{
  type: "input",
  name: "role_id",
  message: "What is the employee's role ID?",
  
},
{
  type: "input",
  name: "manager_id",
  message: "What is the employee's manager ID?",
  
},

])
.then((answers) => {
  // Use answers for updating employee table
})
.catch((error) => {
  if (error) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});
initialPrompts();


// function for view roles

db.query('SELECT * FROM employee_tracker_db.role', function (err, results) {
  if(err)console.log(err)
  console.table(results);
});
initialPrompts();


// function for add roles

addRolePrompt = inquirer.prompt([
  {
    type: "input",
    name: "new role",
    message: "What is the name of the new role?",
    
  },
  {
    type: "input",
    name: "salary",
    message: "What is the salary of the new role?",
    
  },
  {
    type: "input",
    name: "department_id",
    message: "What is the department ID for the new role?",
    
  },
  
  ])
  .then((answers) => {
    // Use answers for updating role table
  })
  .catch((error) => {
    if (error) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  initialPrompts();

// function for updating employee role

// function for view departments

db.query('SELECT * FROM employee_tracker_db.department', function (err, results) {
  if(err)console.log(err)
  console.table(results);
});

// function for add department

addDepartmentPrompt = inquirer.prompt([
  {
    type: "input",
    name: "new department",
    message: "What is the name of the new department?",
    
  },
  ])
  .then((answers) => {
    // Use answers for updating role table
  })
  .catch((error) => {
    if (error) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  initialPrompts();

