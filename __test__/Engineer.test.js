const Engineer = require('../lib/Engineer');

test('create manager', () => {
    const engineer = new Engineer('Jake', 'jake@yolo.com', 1234, 'github.com')

    expect(engineer.name).toEqual('Jake');
    expect(engineer.email).toEqual('jake@yolo.com')
    expect(engineer.id).toEqual(1234)
    expect(engineer.github).toEqual('github.com')
})
