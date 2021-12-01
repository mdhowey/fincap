const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      enum: ['Income', 'Expense'],
    },
    amount: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    planned: {
      type: Boolean,
      default: false,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  }, 
  { timestamps: true }
);

module.exports = mongoose.model('Transaction', TransactionSchema);