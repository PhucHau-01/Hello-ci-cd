const sayHello = require('./sayHello');

test('says hello correctly', () => {
  expect(sayHello("DevOps")).toBe("Hello, DevOps!");
});
