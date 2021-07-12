const genHtml = require("./src/page-template");
// require 3 class constructors
// need Inquirer, Path, fs
// require index.js in src folder
const inquirer = require("inquirer");
const fs = require("fs");
// const path = require("path");
// const addHtml = require("./src/page-template.js");

// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// const OUT_DIR = path.resolve(__dirname, "dist");
// const createPath = path.join(OUT_DIR, "roster.html");

const employees = [];

// function init() {
//   genHtml();
//   addEmployee();
// }

// 5 functions (createManager, createEngineer, createIntern, call as last thing in prev. functions: askNext: asks What do you want to do next--recursion, See results when ready to quit: new function calls fs function...within functions add details)
const addMan= () => {
 return inquirer.prompt([
      {
        type: "input",
        message: "Enter manager's name",
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
        type: "input",
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
        type: "input",
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
      {
        type: "input",
        message: "What is their work phone number?",
        name: "work number",
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
    // .then(function ({ name, role, id, email }) {
    //   let roleDetail = "";
    //   if (role === "Intern") {
    //     roleDetail = "school name";
    //   } else if (role === "Engineer") {
    //     roleDetail = "Github name";
    //   } else {
    //     roleDetail = "work number";
    //   }
    //   inquirer
    //     .prompt([
    //       {
    //         type: "input",
    //         message: `Enter employee's ${roleDetail}`,
    //         name: "roleDetail",
    //       },
    //       {
    //         type: "list",
    //         message: "Would you like to continue adding employees?",
    //         choices: ["yes", "no"],
    //         name: "addMoreEmployees",
    //       },
    //     ])
    //     .then(function ({ roleDetail, addMoreEmployees }) {
    //       let newEmployee;
    //       if (role === "Engineer") {
    //         newEmployee = new Engineer(name, id, email, roleDetail);
    //       } else if (role === "Intern") {
    //         newEmployee = new Intern(name, id, email, roleDetail);
    //       } else {
    //         newEmployee = new Manager(name, id, email, roleDetail);
    //       }
    //       employees.push(newEmployee);
    //       addHtml(newEmployee).then(function () {
    //         if (addMoreEmployees === "yes") {
    //           addMoreEmployees();
    //         } else {
    //           finishHtml();
    //         }
    //       });
    //     });
    // });
}


console.log("adding employees");
  // html +=
// function to create HTML file
const writeFile = data => {
  fs.writeFile("./dist/roster.html", data, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("You successfully wrote to the file!");
    }
  })
};

addEmployee()
.then(employees => {
  return genHtml(employees);
})
.then(html => {
  return writeFile(html);
})
.catch(err => {
  console.log(err);
})
// function writeToFile(fileName, employees, err) {
//   // function (err) {
//     console.log(employees)
//     console.log()
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("You successfully wrote to the file!");
//       fs.writeFileSync(createPath, genHtml(employees), "utf-8")
//     }
//   };
// // initialize app 
// function init() {
//   addEmployee()
//   .then(answers => {
//     writeToFile("roster.html", genHtml(answers))
//   })};
// // addEmployee();
// // genHTML();
// init();
// module.exports = [employees];