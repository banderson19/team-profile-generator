const Engineer = require('../lib/Manager');

test('create manager', () => {
    const engineer = new Engineer('Jake', 'jake@yolo.com', 1234)

    expect(engineer.name).toEqual('Jake');
    expect(engineer.email).toEqual('jake@yolo.com')
    expect(engineer.phoneNumber).toEqual(1234)
})
