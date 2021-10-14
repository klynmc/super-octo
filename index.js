// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

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
        message: 'What liscense was used?',
        choices: ['The MIT License', 'The GPL License', 'The Apache License', 'The GNU License', 'N/A'],
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the license that was used.');
              return false;
            }
        }
    }
    
]);
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
