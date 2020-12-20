// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];
// Question one - description
inquirer
  .prompt([
    {
      type: 'input',
      name: 'Description',
      message: 'Enter a brief description of your app'
    }
  ])
  .then(answers => console.log(answers));
// Question two - table of contents
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'Table of Contents',
      message: 'Enter table of contents information'
    }
  ])
  .then(answers => console.log(answers));
  // Question three - Installation
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'Installtion',
      message: 'Installation steps'
    }
  ])
  .then(answers => console.log(answers));
  // Question four - Usage
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'Usage',
      message: 'What is the purpose of this project?'
    }
  ])
  .then(answers => console.log(answers));

  // Question five - License
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'License Type',
      message: 'What type of license is used?'
    }
  ])
  .then(answers => console.log(answers));

  // Question six - Contributing
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'Contributors',
      message: 'Who contributed to this project?'
    }
  ])
  .then(answers => console.log(answers));

  // Question seven - Tests
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'Test',
      message: 'What tests are used?'
    }
  ])
  .then(answers => console.log(answers));

  // Question eight - Questions
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'Questions',
      message: 'Questions? Enter here.'
    }
  ])
  .then(answers => console.log(answers));

 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();