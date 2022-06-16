const reverseFunction = require('./reverseFunction')


test('check reverse result', ()=> {
    expect(reverseFunction('hello')).toBe('olleh')
})