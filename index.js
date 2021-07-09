// require 3 class constructors
// need Inquirer, Path, fs
// require index.js in src folder
const Inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

const employees = [];

// 5 functions (createManager, createEngineer, createIntern, call as last thing in prev. functions: askNext: asks What do you want to do next--recursion, See results when ready to quit: new function calls fs function...within functions add details)
function initIndex() {
    startHtml();
    addEmployee();
}

function addEmployee() {
    inquirer.prompt([{
        message: "Enter employee's name",
        name: "name"
    },
    {
        type: "list",
        message: "What is their role?",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "role"
    },
    {
        message: "What is their ID?",
        name: "id"
    },
    {
        message: "What is their email?",
        name: "email"
    },
])
.then(function({name, role, id, email}) {
    let roleDetail = "";
    if (role === "Intern") {
        roleDetail = "school name";
    } else if (role === "Engineer") {
        roleDetail = "Github name";
    } else {
        roleDetail = "work number";
    }
    inquirer.prompt([{
        message: `Enter employee's ${roleDetail}`,
        name: "roleDetail"
    },
    {
        type: "list",
        message: "Would you like to continue adding employees?",
        choices: [
            "yes",
            "no"
        ],
        name: "addMoreEmployees"
    }
])
.then(function({roleDetail, addMoreEmployees}) {
    let newEmployee;
    if (role === "Engineer") {
        newEmployee = new Engineer(name, id, email, roleDetail);
    } else if (role === "Intern") {
        newEmployee = new Intern(name, id, email, roleDetail);
    } else {
        newEmployee = new Manager(name, id, email, roleDetail);
    }
    employees.push(newEmployee);
    addHtml(newEmployee)
    .then(function() {
        if (addMoreEmployees === "yes") {
            addMoreEmployees();
        } else {
            finishHtml();
        }
    });
});
});
}