
// const inquirer = require('inquirer');
// const Engineer = require('./lib/Engineer');
// const Manager = require('./lib/Manager')
// // const generatePage = require('./src/page-template');

// let team = []; 

// const promptUser = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is the managers name?'
//         },{
//             type: 'input',
//             name: 'id',
//             message: 'What is the managers ID'
//         },{
//             type: 'input',
//             name: 'email',
//             message: 'What is the managers Email'
//         },{
//             type: 'input',
//             name: 'officeNumber',
//             message: 'What is the the managers office number'
//         }
//     ]).then(answers => {
//         team.push(new Manager(answers.name, answers.id, answers.email, answer.officeNumber))
//         console.log(team)
//     })
// };

// const buildEngineers = (engineerData) => {
//     console.log(`
//     =========================
//     Build your engineer squad
//     =========================
//     `)
    
//     if (!engineerData.engineers) {
//         engineerData.engineers = [];
//     }
    
//     return inquirer.prompt([
//         {
//             type: 'confirm',
//             name: 'confirmEngineer',
//             message: 'Would you like to add an engineer to your team',
//             default: false
//         },{
//             type: 'input',
//             name: 'engineerName',
//             message: 'What is the engineers name'
//         },{
//             type: 'input',
//             name: 'engineerID',
//             message: 'What is the engineers ID'
//         },{
//             type: 'input',
//             name: 'engineerEmail',
//             message: 'What is the engineers email'
//         },{
//             type: 'input',
//             name: 'engineerGithub',
//             message: 'What is the engineers github account?'
//         }
//     ]).then()
// }

// const buildInterns = (internData) => {
//     console.log(`
//     =======================
//     Build your intern squad
//     =======================
//     `)

//     // if (!internData.interns) {
//     //     internData.interns = [];
//     // }
    
//     return inquirer.prompt([
//         {
//             type: 'confirm',
//             name: 'confirmIntern',
//             message: 'Would you like to add an intern to your team',
//             default: false
//         },{
//             type: 'input',
//             name: 'internName',
//             message: 'What is the interns name'
//         },{
//             type: 'input',
//             name: 'internID',
//             message: 'What is the interns ID'
//         },{
//             type: 'input',
//             name: 'internEmail',
//             message: 'What is the interns email'
//         },{
//             type: 'input',
//             name: 'internGithub',
//             message: 'What is the interns github account?'
//         }
//     ])
//     .then()
// }

// const buildTeam = (teamData) => {
//     console.log(`
//     ===============
//     Build your team
//     ===============
//     `)
//     // If there's no 'projects' array property, create one
//     // if (!teamData.members) {
//     //     teamData.members = [];
//     // }

//     return inquirer.prompt([
//         {   
//             type: 'list',
//             name: 'teamMember',
//             message: 'Would you like to add to your team?',
//             choices: ["Engineer", "Intern", "Finish building team"],
//         }
//     ])
//     .then(answer => {
//         console.log(answer)
//         console.info("answer", answer.teamMember)
//         if(answer.teamMember == 'Engineer') {
            
//             buildEngineers(answer)
//         } else if(answer.teamMember == 'Intern') {
//             buildInterns()
//         } else {
//             console.log('done')
//         }
//     })
//     .then(data => {
//         teamData.members.push(data);
//         console.log(teamData.members.push(data))
//         if (data) {
//             return buildTeam(teamData);
//         } else {
//             return teamData;
//         }
//     });

// }

// promptUser()
// .then(buildTeam)
// .then(teamData => {
//     console.log(teamData)
// })
// .catch(error => {
    
// })



