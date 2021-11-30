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
    balance: {
      type: Number,
      default: 0,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  }, 
  { timestamps: true }
);

module.exports = mongoose.model('Account', AccountSchema);