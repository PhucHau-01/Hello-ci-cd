const sayHello = require('./index');

test('says hello correctly', () => {
  expect(sayHello("DevOps")).toBe("Hello, DevOps!");
});
