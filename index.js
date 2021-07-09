// require 3 class constructors
// need Inquirer, Path, fs
// require index.js in src folder
const Inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

// 5 functions (createManager, createEngineer, createIntern, call as last thing in prev. functions: askNext: asks What do you want to do next--recursion, See results when ready to quit: new function calls fs function...within functions add details)
