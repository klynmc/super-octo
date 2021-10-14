// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// const questions = () => {
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the name of your project!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How does a user download your app?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What liscense was used? (Required)',
        choices: ['The MIT License', 'The GPL License', 'The Apache License', 'The GNU License', 'N/A'],
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the license that was used.');
              return false;
            }
        }
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What did you contribute to this project?'
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    }
    
]);
// }

 /* questions()
  .then(pageHTML => {
    return writeFile(pageHTML);
  }) */

/*
return `# ${title}
${badge}
${description}
## Table of Contents
- [Installation](installation)
- [Usage](Usage)
- [License](License)
- [Contribution](Contribution)
- [Questions](Questions)
## Installation
## Usage 
## License
## Contribution
## Questions` */

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
