const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      enum: ['Income', 'Expense'],
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    acctId: {
      type: mongoose.Types.ObjectId,
      ref: 'Account',
    },
    notes: {
      type: String,
    },
    planned: {
      type: Boolean,
      default: false,
      required: true,
    },
  }, 
  { timestamps: true }
);

module.exports = mongoose.model('Transaction', TransactionSchema);