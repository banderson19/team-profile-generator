function Employee (name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;

    this.getRole = () => {
        return 'Employee'
    }
}


module.exports = Employee;