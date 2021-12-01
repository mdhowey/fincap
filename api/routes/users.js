const router = require('express').Router();
const User = require('../models/User');
const Transaction = require('../models/Transaction');

/* Get User */
router.get('/:id', async (req, res) => {
  if(!req.params.id) return console.log('No user found');
  try {
    const user = await User.findById({ _id: req.params.id });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Delete */
router.delete('/:id', async(req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Transaction.deleteMany({username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User deleted successfully');
      } catch (err) {
        res.status(404).json('User not found');
      }
    } catch (err) {
      res.status(401).json('Cannot delete user. Not current user.');
    }
  }
});

module.exports = router;