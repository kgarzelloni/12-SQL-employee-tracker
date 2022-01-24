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
          { name: "View all employees", value: "view_employees" },
          { name: "Add an employee", value: "add_employee" },
          { name: "Update an Employee Role", value: "update_employee" },
          { name: "View all roles", value: "view_roles" },
          { name: "Add a role", value: "add_role" },
          { name: "View all departments", value: "view_departments" },
          { name: "Add a department", value: "add_department" },
          { name: "I'm finished managing this database", value: "quit" },
        ],
      },
    ])
    .then((res) => {
      console.log(res.options);
      switch (res.options) {
        case "view_employees":
          viewEmployees();
          break;
        case "view_departments":
          viewDepartments();
          break;
        case "view_roles":
          viewRoles();
          break;
        case "add_employee":
          addEmployee();
          break;
        case "update_employee":
          updateEmployee();
          break;
        case "add_role":
          addRole();
          break;
        case "add_department":
          addDepartment();
          break;
        case "quit":
          quit();
          break;
      }
    });
}

// function for view employees
function viewEmployees() {
  db.query(
    "SELECT * FROM employee_tracker_db.employee",
    function (err, results) {
      if (err) console.log(err);
      console.log ("viewing all Emplployees")
      console.table(results);
    }
  );
  initialPrompts();
}

// function for add employees
function addEmployee() {
  inquirer
    .prompt([
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
      db.query(
        `INSERT INTO employee_tracker_db.employee (first_name, last_name, role_id, manager_id)
      VALUES (?,?,?,?)`,
        [
          answers.first_name,
          answers.last_name,
          answers.role_id,
          answers.manager_id,
        ]
      );
    })
    .then(() => initialPrompts())
    .catch((error) => {
      if (error) {
        console.log("an error occured");
      } else {
        console.log("success");
      }
    });
}

// function for view roles
function viewRoles() {
  db.query("SELECT * FROM employee_tracker_db.role", function (err, results) {
    if (err) console.log(err);
    console.log("Viewing all Roles")
    console.table(results);
  });
  initialPrompts();
}

// function for add roles
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
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
      db.query(
        `INSERT INTO employee_tracker_db.role (title, salary, department_id)
      VALUES (?,?,?)`,
        [answers.title, answers.salary, answers.department_id]
      );
    })
    .then(() => initialPrompts())
    .catch((error) => {
      if (error) {
        console.log("an error occured");
      } else {
        console.log("success");
      }
    });
}

// function for updating employee role
function updateEmployee() {
  
  inquirer
    .prompt([
      {
        type: "list",
        name: "select employee",
        message: "Which employee do you want to update?",
        choices: [
           {name: "John Doe"},
           {name: "Ashely Rodriquez"},
           {name: "Kevin Tupik"},
           {name: "Kunal Singh"},
           {name: "Malia Brown"},
           
        ],
      },
      {
        type: "input",
        name: "role_id",
        message: "What is the employee's new role id?",
      },
    ])
    .then((answers) => {
      db.query(
        `UPDATE employee_tracker_db.employee (role_id)
    VALUES (?)`,
        [answers.role_id]
      );
    })
    .then(() => initialPrompts())
    .catch((error) => {
      if (error) {
      } else {
      }
    });
}

// function for view departments

function viewDepartments() {
  db.query(
    "SELECT * FROM employee_tracker_db.department",
    function (err, results) {
      if (err) console.log(err);
      console.log("Viewing All Departments")
      console.table(results);
    }
  );
  initialPrompts();
}

// function for add department
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department_name",
        message: "What is the name of the new department?",
      },
      {
        type: "input",
        name: "department_id",
        message: "What is the id number of the new department?",
      },
    ])
    .then((answers) => {
      db.query(
        `INSERT INTO employee_tracker_db.department (department_name)
      VALUES (?, ?)`,
        [answers.department_name, answers.department_id]
      );
    })
    .then(() => initialPrompts())
    .catch((error) => {
      if (error) {
        console.log("an error occured");
      } else {
        console.log("success");
      }
    });
}

function quit() {
  process.exit();
}
