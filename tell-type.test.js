import 'regenerator-runtime/runtime';
const { default: tellType } = require('./tell-type');
const sum = require('./tell-type');

test('tells type', () => {
  let data = 1
  expect(tellType(data)).toBe("number");
});