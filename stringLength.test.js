const stringLength = require("./stringLength");

test('StringLength --> Count assertion', ()=> expect(stringLength('helli')).toBe(5))

test('StringLength --> Count for strings including white space', () => expect(stringLength('hYt man')).toBe(6))

test('StringLength --> String Character is greater than 1', ()=> expect(stringLength('')).toBe('string characters must be greater than 1 and less than 10'))

test('StringLength --> String Character is less than 10', ()=> expect(stringLength('aabcdefghijklmn')).toBe('string characters must be greater than 1 and less than 10'))
