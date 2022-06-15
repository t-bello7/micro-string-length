const stringLength = require("./stringLength");

test('StringLength --> count assertion', ()=> expect(stringLength('helli')).toBe(5))

test('StringLength --> Count for strings including white space', () => expect(stringLength('hYt man')).toBe(6))

test('empty string', ()=>expect(stringLength('')).toBe(0))

