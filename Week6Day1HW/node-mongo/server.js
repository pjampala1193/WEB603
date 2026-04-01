const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

console.log('Starting server...');
console.log('DATABASE =', process.env.DATABASE);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/models/inventory.model.js');

app.get('/', (req, res) => {
  res.send('Server is working');
});

require('./app/routes/inventory.router.js')(app);

mongoose.connect(process.env.DATABASE)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('DB Error:', err);
  });

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});