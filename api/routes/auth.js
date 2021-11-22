const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

const message = 'Password [and|or] Username [are|is] incorrect';

/* ==== Routes ==== m Register */
router.post('/register', async(req, res) => {
  try{

    const salt = await bcrypt.genSalt(12);
    const hashed = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashed,
    });
    
    const user = await newUser.save();

    const {password, ...otherData} = user._doc;
    res.status(200).json(otherData);
    
  } catch(err) {
    res.status(500).json(err);
  }
});

/* Login */
router.post('/login', async(req, res) => {
  try{
    const user = await User.findOne({email: req.body.email})
    !user && res.status(400).json(message)

    const passwordCheck = await bcrypt.compare(req.body.password, user.password)
    !passwordCheck && res.status(400).json(message)

    const {password, ...otherData} = user._doc;
    res.status(200).json(otherData);
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;