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
