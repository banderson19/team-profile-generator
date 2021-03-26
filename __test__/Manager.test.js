const Manager = require('../lib/Manager');

test('create manager', () => {
    const manager = new Manager('Jake', 'jake@yolo.com', 1234, 22)

    expect(manager.name).toEqual('Jake');
    expect(manager.email).toEqual('jake@yolo.com')
    expect(manager.id).toEqual(1234)
    expect(manager.officeNumber).toEqual(22)
})



