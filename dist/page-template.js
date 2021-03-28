function generateHTML (team) {
    var html = '';
    for(var member of team) {
        html += `
<h3>${member.name}</h3>
<h3>${member.Id}</h3>
`
        if (member.getRole() === 'Engineer'){
            html += `<h6>github:${member.github}</h6>`
        } else if (member.getRole() === 'Intern') {
            html += `<h6>school: ${member.school}</h6>`
        }
    }
}