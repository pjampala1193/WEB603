const mongoose = require('mongoose');

// Database connection
mongoose
  .connect('mongodb://localhost:27017/event_db')
  // OR use:
  // .connect('mongodb://127.0.0.1:27017/event_db')
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log(error);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: [18, 'Age must be 18 or above']
  }
});

const Person = mongoose.model('Person', personSchema);

// final valid example
const person = new Person({
  name: 'John',
  age: 25
});

(async () => {
  try {
    await person.save();
    console.log('Person saved successfully');
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.connection.close();
  }
})();