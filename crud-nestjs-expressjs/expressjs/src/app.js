const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const companyRoutes = require('./routes/companyRoutes.js');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use('/', companyRoutes);
app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

module.exports = app;
