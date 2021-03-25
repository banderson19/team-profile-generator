const Manager = require('../lib/Manager');

test('create manager', () => {
    const manager = new Manager('Jake', 'jake@yolo.com', 1234)

    expect(manager.name).toEqual('Jake');
    expect(manager.email).toEqual('jake@yolo.com')
    expect(manager.phoneNumber).toEqual(1234)
})

// test('test methods', () => {
//     const manager = new Manager('Jake', 'jake@yolo.com', 1234)

//     expect(manager.getName()).toEqual('Jake');
// })





