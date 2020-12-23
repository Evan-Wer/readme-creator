// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const tableOfContentsArray = ["Yes", "No"]
const licensesArray = ["Apache license 2.0", "ISC", "Microsoft Public License", "MIT", "Open Software License 3.0"]

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([ 
        {
        // Question one - app name/title
        type: 'input',
        name: 'title',
        message: 'What is the name of your app?',
        default: 'Pending user input'
    },

        // Question two - description
        {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of your app?',
        default: 'Pending user input'
    },

        // Question three - Installation
        {
        type: 'input',
        name: 'installation',
        message: 'Installation steps',
        default: 'Pending user input'
    },

        // Question four - Usage
        {
        type: 'input',
        name: 'usage',
        message: 'What is the purpose of this project?',
        default: 'Pending user input'
    },

        // Question five - License
        {
        type: 'list',
        name: 'license',
        message: 'What type of license is used?',
        choices: licensesArray,
    },

        // Question six - Contributing
        {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?',
        default: 'Pending user input'
  },
  
        // Question seven - Tests
       {
        type: 'input',
        name: 'test',
        message: 'What tests are used?',
        default: 'None'
  },
        // Question eight - Git name
       {
        type: 'input',
        name: 'user',
        message: 'What is your github username?',
        default: 'Pending user input'
},
        // Question nine - User email
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        default: 'Pending user input'
},
        // Question 10 - Phone Number
      {
        type: 'number',
        name: 'phone',
        message: 'What is your primary phone number?',
        default: 'Enter your phone number'
}
])
.then(({
title,
description,
contents,
installation,
usage,
license,
contributors,
test,
user,
email,
number
})=>{
    const readMe = `# ${title}

## Description:
  ${description}

## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [contributions](#contribution)
 * [License](#license)
 * [tests](#test)
    
## Installation:
${installation}

## Usage:
${usage}

## Contributors:
${contributors}

## Tests:
${test}

### License:
${license}

## Contact Information:
 * ${user}
 * ${email}
 * ${number}`;
    
    writeToFile(title, readMe);
});
};

function writeToFile(fileName, info) {
    fs.writeFileSync('./README.md', info, (err) => {
        if (err)  throw err;
        }
    )
    console.log("ReadMe successfully created!")};

// Function call to initialize app
init();  
