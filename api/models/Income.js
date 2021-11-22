const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema(
  {
    planned: {
      type: Boolean,
      default: false,
      required: true,
    },
    type: {
      type: String,
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

module.exports = mongoose.model('Income', IncomeSchema);