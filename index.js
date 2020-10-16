// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title", 
        message: "What would you like the title of your project to be?",

    },
    {
        type: "input", 
        name: "description",
        message: "Describe your project"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the instructions for installing this application?"
    },
    {
        type: "input",
        name: "usage",
        message: "Describe how this application can be used"
    },
    {
        type: "input",
        name: "contributing",
        message: "Do you have collaborators aside from yourself? If so, please add their names and GitHub information here."
    },
    {
        type: "input",
        name: "username",
        message: "What is your first and last name?"
    },
    {
        type: "input",
        name: "githubinfo",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "tests", 
        message: "Are there any special instructions required for running tests?"
    },
    {
        type: "list",
        name: "license",
        message: "What license do you have attached to your repo?",
        choices: ["MIT", "Apache2.0", "GNUv3.0", "BFD3", "None"],
    }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(response){
        writeToFile("README.md", generateMarkdown({
            ...response
        }));
    });
}

// function call to initialize program
init();
