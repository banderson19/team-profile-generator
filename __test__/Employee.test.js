const Employee = require('../lib/Employee');

test ('create Employee', () => {
    const employee = new Employee ('Jake', 'jake@yahoo.com', 123)

    expect(employee.name).toEqual('Jake');
    expect(employee.email).toEqual('jake@yahoo.com')
    expect(employee.id).toEqual(123)
})