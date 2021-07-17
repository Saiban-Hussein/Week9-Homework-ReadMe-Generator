const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('./utils/generateMarkdown');
inquirer.prompt([
    {  type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {   type: "input",
        name: "description",
        message: "Please provide your project's description?"
    },
    {  type: "input",
        name: "installation",
        message: "Please provide the installation instructions?"
    },
    {   type: "input",
        name: "usage",
        message: "Please provide the project usage?"
    },
    {   type: "list",
        name: "licence",
        message:"Please choice a licence from the list below:",
        choices: ['Apache 2.0','BSD 2-Clause','BSD 3-Clause','GNU AGPLv3.0','GNU GPLv2.0','GNU GPLv3.0','MIT','Mozilla Public 2.0']
    },
    {   type: "input",
        name: "contributing",
        message: "Please provide the contributing parties?"
    },
    {   type: "input",
        name: "test",
        message: "Please provide the project tests?"
    },
    {   type: "input",
        name: "username",
        message: "What is your github user name?"
    },
]).then((answers)=>{
    fs.writeFile("README.md", generate(answers), (err)=>{
    err?console.log(err):console.log("New README file created with success!")}
    )});

