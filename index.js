const inquirer = require('inquirer');
const fs=require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');

const questions = [
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Project description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Installation instructions?',
      name: 'installation',
    },
    {
        type:'input',
        message:'Usage information?',
        name:'usage'
      },
      {
        type:'license',
        message:'License?',
        name:'license',
        Choices: [
          "MIT",
          "mpl-2.0",
          "ms-pl",
          "none"
        ]
      },
      {
        type:'input',
        message:'contribution',
        name:'contribution'
      },
      {
        type:'input',
        message:'test instructions?',
        name:'test'
      },
      {
        type:'input',
        message:'Questions?',
        name:'questions'
      },
    {
      type:'input',
      message:'What is your GitHub URL',
      name:'gitHubURL'
    },
    {
        type:'input',
        message:'What is your email?',
        name:'email'
      },
  ]

 
function writeToFile(fileName,data){

  fs.writeFile(fileName,data, function(error) {
    if (error) {
      return console.log(error)
    }else {
      console.log("good")
    }
  }
)}

function init() {
inquirer.prompt(questions)
  .then(function(data){
    writeToFile("README.md",generateMarkdown(data));
    console.log(data)
  })
}

init();