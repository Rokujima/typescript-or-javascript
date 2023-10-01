const express = require('express');
const app = express();

const SampleService = require('./service');
const myService = new SampleService();

app.get('/', (req, res) => {
  const message = myService.sayHello();
  res.json({ message });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
