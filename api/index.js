const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/index');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// BEFORE DEPLOYMENT --> [[[  process.env.PORT ||  ]]] 
PORT = 5000;

mongoose.connect(process.env.MONGO_URI, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('Connected to MongoDB'))
  .catch(err => console.log(`========== Connection issue with MongoDB ========== ${err}`));
  
app.use('/api/auth', routes.auth);
app.use('/api/transactions', routes.transactions);
  
app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});