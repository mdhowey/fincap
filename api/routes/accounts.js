const express = require('express');
const router = express.Router();
const Account = require('../models/Account');

/* New Account */
router.post('/', async (req, res) => {
  try {
    const newAccount = await Account.create({
      acctName: req.body.acctName,
      currency: req.body.currency,
      balance: req.body.balance,
      userId: req.body.userId
    });
    const savedAcct = newAccount.save();
    res.status(201).json(savedAcct);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Get All Accounts for User*/
router.get('/', async (req, res) => {
  try {
    console.log('this is hitting');
    res.status(201).json(req.body);
  } catch (err) {
    console.log('this is NOT');
    res.status(500).json(err);
  }
});

module.exports = router;