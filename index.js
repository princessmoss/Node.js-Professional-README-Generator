// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "Title"
    },
    {
        type: "input",
        message: "Description of your project",
        name: "Description"
    },
    {
        type: "input",
        message: "Application to install your project?",
        name: "Installation"
    },
    {
        type: "input",
        message: "Projects usage?",
        name: "Usage"
    },
    {
        type: 'list',
        message: 'What license is this project under?',
        name: 'license',
        default: "MIT",
        choices: ["Apache 2.0", "MIT", "GPLv2", "GPLv3", "BSD 3-clause"]
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
