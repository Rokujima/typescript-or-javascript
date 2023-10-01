const MyService = require('./../src/service.js');

test('Test sayHello method', () => {
  const myService = new MyService();
  expect(myService.sayHello()).toBe('Hello from the service!');
});
