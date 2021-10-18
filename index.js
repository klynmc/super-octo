// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
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
      message: 'What did you contribute to this project? Ex: Made by so-and-so'
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
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter your usage here:'
    }
    
];


 /* questions()
  .then(pageHTML => {
    return writeToFile(pageHTML);
  })  */

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, function(err) {
    if (err) {
      return console.log(err)
    } else {
      console.log('Your README.md file has been created!')
    }

  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function(data) {
      writeToFile("README.md", generateMarkdown(data));
      console.log(data)
    })
}

// Function call to initialize app
init();
