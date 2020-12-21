// TODO: Include packages needed for this application
const inquirer = require('inquirer');
var fs = require('fs');

// TODO: Create an array of questions for user input
// Question one - Description
inquirer.prompt([ {
        Question1: {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of your app',
        default: 'no input selected'
    },
        // Question two - table of contents
        Question2: {
        type: 'list',
        name: 'contents',
        message: 'Enter table of contents information',
        default: 'no input selected'
    },

        // Question three - Installation
        Question3: {
        type: 'list',
        name: 'installtion',
        message: 'Installation steps',
        default: 'no input selected'
    },

        // Question four - Usage
        Question4: {
        type: 'input',
        name: 'usage',
        message: 'What is the purpose of this project?',
        default: 'no input selected'
    },

        // Question five - License
        Question5: {
        type: 'list',
        name: 'license',
        message: 'What type of license is used?',
        default: 'no input selected'
    },
        // Question six - Contributing
        Question6: {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?',
        default: 'no input selected'
  },
        // Question seven - Tests
        Question7: {
        type: 'input',
        name: 'test',
        message: 'What tests are used?',
        default: 'no input selected'
  },
        // Question eight - Questions
        Question8: {
        type: 'input',
        name: 'questions',
        message: 'Questions? Enter here',
        default: 'no input selected'
  }} 
])
.then(({
description,
contents,
installation,
usage,
license,
contributors,
test,
questions
})=>{

})

const promptUser = () => {
    return inquirer.prompt([
    ])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init(); 