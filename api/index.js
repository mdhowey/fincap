const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const cors = require('cors');

PORT = 5000;

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(console.log('Connected to MongoDB'))
  .catch(err => console.log(`========== Connection issue with MongoDB ========== ${err}`));

const db = mongoose.connection;

app.use('/api/auth', routes.auth);
app.use('/api/users', routes.users);
app.use('/api/transactions', routes.transactions);

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});