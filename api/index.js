const express = require('express');
const app = express();
PORT = 3000;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology,
})
  .then(console.log('Connected to MongoDB'))
  .catch(err => console.log(`========== Connection issue with MongoDB ========== ${err}`));

// app.use('/', routes.transfer)

app.listen(PORT, () => {
  console.log(`API is running on port on ${PORT}`);
});