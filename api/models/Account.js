const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema(
  {
    acctName: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  }, 
  { timestamps: true }
);

module.exports = mongoose.model('Account', AccountSchema);