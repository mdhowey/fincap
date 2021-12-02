const router = require('express').Router();
const Transaction = require('../models/Transaction');

/* Get All Transactions */
router.get('/', async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      length: transactions.length,
      data: transactions
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

/* Add Transaction */
router.post('/', async (req, res, next) => {
  try {
    const { title, type, amount, notes, planned } = req.body;
    const transaction = await Transaction.create(req.body);
    return res.status(200).json(transaction);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/* Delete Transaction */
router.post('/:id', async (req, res, next) => {
  try {
    const transaction = await Transaction.findByIdAndRemove(req.params.id);
    if (!transaction) return res.status(404).json(err);
    await transaction.remove();
    return res.status(200).json(transaction);
  } catch (err) {
    return res.status(500).json(err);
  }

});

module.exports = router;