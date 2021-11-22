const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema(
  {
    planned: {
      type: Boolean,
      default: false,
      required: true,
    },
    type: {
      enum: ['Income', 'Expense', 'Transfer'],
      required: true,
    },
    acctId: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
  }, 
  { timestamps: true }
);

module.exports = mongoose.model('Transaction', TransactionSchema);