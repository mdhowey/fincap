const router = require('express').Router();
const User = require('../models/User');
const Account = require('../models/Account');
const bcrypt = require('bcrypt');

/* Get User */
router.get('/:id', async (req, res) => {
  if(!req.params.id) return console.log('No user found');
  try {
    const user = await User.findById({ _id: req.params.id });

    // return console.log(user);

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
})

/* Update */
router.put('/:id', async(req, res) => {
  if(req.body.userId === req.params.id) {
    if(req.body.password) {
      const salt = await bcrypt.genSalt(12);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true },
      );
      res.status(200).json(updatedUser)
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json('Cannot update user. Not current user.');
  }
});

/* Delete */
router.delete('/:id', async(req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Account.deleteMany({username: user.username });
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