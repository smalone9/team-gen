// require 3 class constructors
// need Inquirer, Path, fs
// require index.js in src folder
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const genHTML = require("./src/page-template");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

// 5 functions (createManager, createEngineer, createIntern, call as last thing in prev. functions: askNext: asks What do you want to do next--recursion, See results when ready to quit: new function calls fs function...within functions add details)
function addEmployee() {
  inquirer
    .prompt([
      {
        message: "Enter employee's name",
        name: "name",
        validate: (addInput) => {
          if (addInput) {
          return true;
        } else {
          console.log("Invalid");
          return false;
        }
      },
    },
      {
        type: "list",
        message: "What is their role?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role",
        validate: (addInput) => {
          if (addInput) {
          return true;
        } else {
          console.log("Invalid");
          return false;
        }
      },
      },
      {
        message: "What is their ID?",
        name: "id",
        validate: (addInput) => {
          if (addInput) {
          return true;
        } else {
          console.log("Invalid");
          return false;
        }
      },
      },
      {
        message: "What is their email?",
        name: "email",
        validate: (addInput) => {
          if (addInput) {
          return true;
        } else {
          console.log("Invalid");
          return false;
        }
      },
      },
    ])
    .then(function ({ name, role, id, email }) {
      let roleDetail = "";
      if (role === "Intern") {
        roleDetail = "school name";
      } else if (role === "Engineer") {
        roleDetail = "Github name";
      } else {
        roleDetail = "work number";
      }
      inquirer
        .prompt([
          {
            type: "input",
            message: `Enter employee's ${roleDetail}`,
            name: "roleDetail",
          },
          {
            type: "list",
            message: "Would you like to continue adding employees?",
            choices: ["yes", "no"],
            name: "addMoreEmployees",
          },
        ])
        .then(function ({ roleDetail, addMoreEmployees }) {
          let newEmployee;
          if (role === "Engineer") {
            newEmployee = new Engineer(name, id, email, roleDetail);
          } else if (role === "Intern") {
            newEmployee = new Intern(name, id, email, roleDetail);
          } else {
            newEmployee = new Manager(name, id, email, roleDetail);
          }
          employees.push(newEmployee);
          addHtml(newEmployee).then(function () {
            if (addMoreEmployees === "yes") {
              addMoreEmployees();
            } else {
              finishHtml();
            }
          });
        });
    });
}

function addHtml(arr) {
  let html = ""
  arr.forEach((employee) => {
    const name = employee.getName();
    const role = employee.getRole();
    const id = employee.getId();
    const email = employee.getEmail();
    if (role === "Engineer") {
      const gitHub = employee.getGitHub();
      html += `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
    } else if (role === "Intern") {
      const school = employee.getSchool();
      html += `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
            </div>`;
    } else {
      const workNumber = employee.getWorkNumber();
      html += `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">Office Phone: ${workNumber}</li>
            </ul>
            </div>
            </div>`;
    }
  })
  console.log("adding employees");
  html += 
// function to create HTML file
function writeToFile(fileName, arr) {
  return fs.writeFileSync(path.join("./dist/roster.html", html), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("You successfully wrote to the file!");
    }
  });
}
}
// initialize app 
function init() {
  prompt(addEmployee)
  .then(answers => {
    writeToFile('roster.html', genHTML(answers))
  })
}
addEmployee();
genHTML();

module.exports = [employees];