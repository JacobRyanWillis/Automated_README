const inquirer = require('inquirer');
const fs =  require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//  questions array for the user to answer after being prompted.
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description for your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project, are there any?',   
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and example for use here. Include screenshots as needed:',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. Also list 3rd party assets.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write test examples for your application here:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license you are going to use:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please type in your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your E-mail address so people can contact you for questions:',
    }
];
  

//  Writes the README file using FS.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(`File ${fileName} has been generated successfully!`);
    });
  }
  
// Initalizes app, prompts user the questions array then writes README file.
function init() {
    inquirer.prompt(questions)
    .then((answers)=> {
        const fileName = 'README.md';
        const data = generateMarkdown(answers);
        writeToFile(fileName, data);
    })
    .catch((error) => {
        console.error(error);
    });
}

init();


