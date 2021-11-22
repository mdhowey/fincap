const express = require('express');
const app = express();
PORT = 5000;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes/index');

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(console.log('Connected to MongoDB'))
  .catch(err => console.log(`========== Connection issue with MongoDB ========== ${err}`));

app.use('/api/auth', routes.auth);

app.listen(PORT, () => {
  console.log(`API is running on port on ${PORT}`);
});