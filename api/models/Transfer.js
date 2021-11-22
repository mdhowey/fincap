const mongoose = require('mongoose');

const TransferSchema = new mongoose.Schema(
  {
    planned: {
      type: Boolean,
      default: false,
      required: true,
    },
    type: {
      type: String,
    },
    toAcctId: {
      type: String,
      required: true,
    },
    toCurrency: {
      type: String,
      required: true,
    },
    fromAcctId: {
      type: String,
      required: true,
    },
    fromCurrency: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
  }, 
  { timestamps: true }
);

module.exports = mongoose.model('Transfer', TransferSchema);