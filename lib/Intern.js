const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, email, id, school){
        super(name, email, id)
        this.school = school;
    }

    getRole() {
        return 'Intern'
    }
}

Intern.prototype.getSchool= function () {
    return this.school
}


// generateInternHTML (intern) 

module.exports = Intern;