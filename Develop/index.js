const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "what is your project name?",
        name: "title",
    },
    {
        type: 'input',
        message: "what is your name?",
        name: "name",
    },
    {
        type: 'input',
        message: "Email?",
        name: "email",
    },
    {
        type: 'input',
        message: "provide a link to GitHub",
        name: "github",
    },
    {
        type: 'input',
        message: "provide a Linkin profile",
        name: "linkedin",
    },


    {
        type: 'input',
        message: 'write a description reguarding your project...',
        name: 'description'
    },
    {
        type: "list",
        message: 'What license would you like to use?',
        choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3","ISC"],
        name: "license",
    },
    {
        type: 'input',
        message: "What are the steps required to install your project?",
        name: "installation",
    },
    {
        type: 'input',
        message: 'Provide instructions for use',
        name: 'usage'
    },
    {
        type: 'input',
        message: "List your collaborators (if any)",
        name: "contributors"
    },
    {
        type: 'input',
        message: 'List features of this project',
        name: 'features'
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err)
          return
        }
        console.log("this was a success");
        //file written successfully
      })
}

// TODO: Create a function to initialize app
function init() {
    //user will see the first question
    inquirer.prompt(questions).then((data) => {
        console.log(data);
    //figure out how to take those responses from the user and write them to a file
    writeToFile("../README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
