// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input

inquirer
    .prompt ([
     {  
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'write a brief description of your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'provide the intended use of your project'
    },
    {
        type: 'input',
        name: 'learn',
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
])

    .then((answers) => {
        var genread = `
         # ${answers.title}

  ##Table of Contents
  - [Project Description](#description)
  - [Usage](#usage)
  - [What I Learned](#learn)
  - [Installation Steps](#installation)
  - [Project Features](#features)
  - [Tests](#tests)
  - [Collaborators](#credits)
  - [Contact Information](#usernamer)
  - [Email](#email)
  - [File Lisences](#license)


  ## Description
    ${answers.description}

  ## Usage
    ${answers.usage}
    
  ## Learn
    ${answers.learn}

  ## Steps
    ${answers.installation}

  ## Features
    ${answers.features}

  ## Tests
    ${answers.tests}

    ![A picture of noodles with two hands; one holding chopsticks](\assets\haegeumchops.PNG)

  ## Collaborators
    ${answers.credits}

  ## Contact Information 
    ${answers.username}
    ${answers.email}

  ## Lisences 
    ${answers.lisence}
`;

        fs.writeFile("README.md", genread, (err) =>
        err ? console.log(err) : console.log('You Did It!')
    );
    });
