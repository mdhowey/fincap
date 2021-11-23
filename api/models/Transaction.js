const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    planned: {
      type: Boolean,
      default: false,
      required: true,
    },
    type: {
      enum: ['Income', 'Expense', 'Transfer'],
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    acctId: {
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