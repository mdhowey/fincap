const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes/index');

PORT = 5000;

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(console.log('Connected to MongoDB'))
  .catch(err => console.log(`========== Connection issue with MongoDB ========== ${err}`));

app.use('/api/auth', routes.auth);
app.use('/api/account', routes.accounts);

app.listen(PORT, () => {
  console.log(`API is running on port on ${PORT}`);
});