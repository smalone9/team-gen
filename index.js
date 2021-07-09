// require 3 class constructors
// need Inquirer, Path, fs
// require index.js in src folder
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


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

// create Html
function openHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Team Gen</title>
</head>
<body>
    <nav class="navbar navbar-dark bg-dark mb-5">
        <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
    </nav>
    <div class="container">
        <div class="row">`;
fs.writeFile("./store/roster.html", html, function(err) {
    if (err) {
        console.log(err);
    }
});
console.log("start");
}

function addHtml(employee) {
    return new Promise(function(resolve, reject) {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = employee.getGitHub();
            data = `<div class="col-6">
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
            const school = member.getSchool();
            data = `<div class="col-6">
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
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("adding employees");
        fs.appendFile("./store/roster.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

// complete html
function completeHtml() {
    const html = `</div>
    </div>
    
</body>
</html>`;
    fs.appendFile("./store/roster.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}