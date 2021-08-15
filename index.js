const writeFile = require('./utils/write-file.js');

const inquirer = require('inquirer');

const promptUser = () => {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      default: 'World'
    },
    {
      type: 'input',
      name: 'age',
      message: 'What is your age?',
      default: 'World'
    }
  ];

  return inquirer.prompt(questions);
}

promptUser()
.then(answers => {
  writeFile(answers);
}).catch(err => {
  console.log(err)
  });