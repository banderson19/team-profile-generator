function Employee (name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;

}

Employee.prototype.getName = function () {
    return this.name
}

Employee.prototype.getId = function () {
    return this.id
}

Employee.prototype.getEmail = function () {
    return this.email
}

module.exports = Employee;