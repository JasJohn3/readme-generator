const writeFile = require('./utils/write-file.js');
const readmeTemplate = require('./src/readme-template');

const inquirer = require('inquirer');

const promptUser = () => {
  const questions = [
    {type: 'input',
    message: 'What is the title of the project?',
    name: 'title'},

    {type: 'input',
    message: 'Describe your project:',
    name: 'description'
    },

    {type: 'input',
    message: 'How do you install your project?',
    name: 'installation'
    },

    {type: 'input',
    message: 'How is your project used?',
    name: 'usage'
    },

    {type: 'input',
    message: 'What tests run with your project?',
    name: 'tests'
    },

    {type: 'input',
    message: 'Enter version for Contributions?',
    name: 'contributing'
    },

    {type: 'input',
    message: 'What is your GitHub user name?',
    name: 'github'
    },

    {type: 'input',
    message: 'What is your email address?',
    name: 'email'
    },

    {
    name: "license",
    type: "list",
    message: "Choose your license:",
    choices: ["MIT","BSD-2-Clause","BSD-3-Clause" ,"Apache-2.0", "GPL-2.0", "GPL-3.0", "LGPL-2.1", "LGPL-3.0", "AGPL-3.0", "ISC", "MPL-2.0", "Unlicense"],
    },
  ];

  return inquirer.prompt(questions);
}

promptUser()
.then(answers => {
  writeFile(readmeTemplate(answers));
}).then(() => {
  console.log('Done!');
  })
.catch(err => {
  console.log(err)
  });