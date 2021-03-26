const Intern = require('../lib/Intern');

test('create manager', () => {
    const intern = new Intern('Jake', 'jake@yolo.com', 1234, 'UofU')

    expect(intern.name).toEqual('Jake');
    expect(intern.email).toEqual('jake@yolo.com')
    expect(intern.id).toEqual(1234)
    expect(intern.school).toEqual('UofU')
})
