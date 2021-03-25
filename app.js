const inquirer = require('inquirer');
const Manager = require('./lib/Manager')


let team = [];

function init() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'What kind of employee',
            choices: ['manager', 'engineer']
        },{
            type: 'input',
            name: 'name',
            message: 'what is your name'
        }
    ]).then(answers => {
        if (answers.employeeType == 'manager') {
            team.push(new Manager(answers.name, answers.email))
        }
    })
}

function generateHTML (team) {
    var html = '';
    for(var member of team) {
        html += `
        
        `

    }
}