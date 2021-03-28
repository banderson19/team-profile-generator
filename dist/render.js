const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Manager = require('../lib/Manager')
const path = require('path');
const fs = require('fs');
const templateDirectory = path.resolve(__dirname, '../templates')


function render(team) {
    const html = []
    for(var member of team) {
        console.log(member.getRole())
        if(member.getRole() == 'Engineer') {
            console.log('engineer')
            const engineer = renderEngineer(member)
            html.push(engineer);
        }
         else if (member.getRole() == 'Intern') {
            console.log('Internn')
            const intern = renderIntern(member)
            html.push(intern);
        } else if (member.getRole() == 'Manager') {
            console.log('Managerrrrr')
            const manager = renderManager(member)
            html.push(manager);
        } else {
            console.log(error)
        }

    }
    
    return renderMain(html.join(''))
    
}

renderManager = (member) => {
    let template = fs.readFileSync(path.resolve(templateDirectory, 'manager.html'), 'utf8')
    template = placeHolder(template, 'Name', member.getName())
    template = placeHolder(template, 'Id', member.getId())
    template = placeHolder(template, 'Email', member.getEmail())
    template = placeHolder(template, 'officeNumber', member.getOfficeNumber())

    return template;
}

renderEngineer = (member) => {
    let template = fs.readFileSync(path.resolve(templateDirectory, 'engineer.html'), 'utf8')
    template = placeHolder(template, 'Name', member.getName())
    template = placeHolder(template, 'Id', member.getId())
    template = placeHolder(template, 'Email', member.getEmail())
    template = placeHolder(template, 'Github', member.getGithub())

    return template;
}
renderIntern = (member) => {
    let template = fs.readFileSync(path.resolve(templateDirectory, 'intern.html'), 'utf8')
    template = placeHolder(template, 'Name', member.getName())
    template = placeHolder(template, 'Id', member.getId())
    template = placeHolder(template, 'Email', member.getEmail())
    template = placeHolder(template, 'School', member.getSchool())

    return template;
}

const renderMain =(html)=> {
    let template = fs.readFileSync(path.resolve(templateDirectory,'../index.html'), 'utf8')
    return placeHolder(template, 'Team', html )
}

const placeHolder=(template, placeholder, value) =>{
    const pattern = new RegExp('{{ '+placeholder+' }}' , 'gm') 
    return template.replace(pattern, value)
}



module.exports = render;
