const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

const message = 'Password [and|or] Username [are|is] incorrect';

/* ==== Routes ==== */

/* Register */
router.post('/register', async(req, res) => {
  try{

    const foundUser = await User.exists({ email: req.body.email });

    if (foundUser) return console.log('User already exists');

    const salt = await bcrypt.genSalt(12);
    const hashed = await bcrypt.hash(req.body.password, salt);
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashed,
    });
    
    const user = await newUser.save();

    const {password, ...otherData} = user._doc;
    res.status(200);
    console.log(otherData);

  } catch(err) {
    res.status(500).json(err.message);
  }
});

/* Login */
router.post('/login', async(req, res) => {
  try{
    const user = await User.findOne({email: req.body.email});
    if (!user) {
      res.status(400).json(message);
      res.redirect('/register');
    }

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      res.status(400).json(message);
      res.send('Invalid user credentials');
    }

    const {password, ...otherData} = user._doc;
    res.status(200).json(otherData);
  } catch (err) {
    res.status(500).json(err.message);
  }
})

/* Logout Route */
router.get('/logout', async function (req, res) {
  try {
    // await req.session.destroy();
    return res.redirect('/login');
  } catch (err) {
    console.log(err.message);
    return res.send(err.message);
  }
});

module.exports = router;