const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let team = [];

const buildTeam =() => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'What kind of employee would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern', 'no more employees']
        }
    ]).then(answers => {
        if (answers.employeeType == 'Manager') {
            buildManager()
        } else if (answers.employeeType == 'Engineer') {
            buildEngineer()
        } else if (answers.employeeType == 'Intern') {
            buildIntern()
        } else {
            console.log(team)
        }
    })
}

const buildManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?'
        },{
            type: 'input',
            name: 'id',
            message: 'What is the managers ID?'
        },{
            type: 'input',
            name: 'email',
            message: 'What is the managers Email?'
        },{
            type: 'input',
            name: 'officeNumber',
            message: 'What is the the managers office number?'
        },{
            type: 'confirm',
            name: 'continue',
            message: 'Would you like to continue to add an employee to your team?',
            default: true
        }
    ]).then(answers => {
        team.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber))
        if(answers.continue) {
            return buildTeam();
        } else {
            console.log(team)
        }
    })
};

const buildEngineer = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineers name?'
        },{
            type: 'input',
            name: 'id',
            message: 'What is the engineers ID?'
        },{
            type: 'input',
            name: 'email',
            message: 'What is the engineers Email?'
        },{
            type: 'input',
            name: 'github',
            message: 'What is the the engineers Github?'
        },{
            type: 'confirm',
            name: 'continue',
            message: 'Would you like to continue to add an employee to your team?',
            default: true
        }
    ]).then(answers => {
        team.push(new Engineer(answers.name, answers.id, answers.email, answers.github))
        if(answers.continue) {
            return buildTeam();
        } else {
            console.log(team)
        }
    })
}

const buildIntern = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?'
        },{
            type: 'input',
            name: 'id',
            message: 'What is the interns ID?'
        },{
            type: 'input',
            name: 'email',
            message: 'What is the interns Email?'
        },{
            type: 'input',
            name: 'school',
            message: 'What school did the intern go to'
        },{
            type: 'confirm',
            name: 'continue',
            message: 'Would you like to continue to add an employee to your team?',
            default: true
        }
    ]).then(answers => {
        team.push(new Intern(answers.name, answers.id, answers.email, answers.school))
        if(answers.continue) {
            return buildTeam();
        } else {
            console.log(team)
        }
    })
}

buildTeam();
function generateHTML (team) {
    var html = '';
    for(var member of team) {
        html += `
<h3>${member.name}</h3>
`
        if (member.getRole() === 'Engineer'){
            html += `<h3>github:${member.github}</h3>`
        } else if (member.getRole() === 'Intern') {
            html += `<h3>school: ${member.school}</h3>`
        }
    }
}