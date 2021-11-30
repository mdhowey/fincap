const express = require('express');
const router = express.Router();
const Account = require('../models/Account');

/* ==== Routes ==== */

/* == Account == */

/* New Account */
router.post('/newAcct', (req, res) => {
  console.log('req.body', req.body);
  Account.create( req.body, (err, newAcct) => {
    if (err) return console.log(err);
    console.log(newAcct.name);
    return res.redirect('/');
  });
});

/* View Account */
router.get('/:acctId', async (req, res) => {
  try {
    const foundAcct = await Account.findById(req.params.acctId);
      console.log(`Account: ${foundAcct._id}`);
      return res.redirect('/');
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
});

/* Update Account */
router.put('/:acctId', (req, res) => {
  Account.findByIdAndUpdate(
    req.params.acctId,
    {
      $set: req.body,
    },
    {
      new: true,
    },
    (err, updatedAcct) => {
      if (err) return console.error(err);

      return res.redirect('/');
      console.log(`${updatedAcct}`);
    }
  );
});

/* Delete Account */
router.delete('/:acctId', (req, res) => {
  Account.findByIdAndDelete( req.params.acctId, (err, deletedAcct) => {
    if (err) return console.log(err);
    console.log(deletedAcct);
    return res.redirect('/');
  })
});

module.exports = router;