// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input

const questions = 
inquirer
    .prompt([
     {  
        type: 'input',
        name: 'project title',
        message: 'what is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'write a brief description of your project'
    },
    {
        type: 'input',
        name: 'use',
        message: 'provide the intended use of your project'
    },
    {
        type: 'input',
        name: 'lessons',
        message: 'what did you learn during this process?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what are the steps required to install?'
    },
    {
        type: 'input',
        name: 'features',
        message: 'please include any features of the project'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'include any tests for the application including solution'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'list any collaborators including GitHub links and tutoritals'
    },
    {
        type: 'input',
        name: 'username',
        message: 'what is your github user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'include file license'

    },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('README saved');
    })
}

// TODO: Create a function to initialize app
 function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data)
    }
    )
}

// Function call to initialize app
//init(); 
