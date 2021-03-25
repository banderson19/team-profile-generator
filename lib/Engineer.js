const Employee = require('./Employee')


class Engineer extends Employee {
    constructor(name, email, phoneNumber, github) {
        super(name, email, phoneNumber)
        this.github = github;
    }
    
}


module.exports = Engineer;