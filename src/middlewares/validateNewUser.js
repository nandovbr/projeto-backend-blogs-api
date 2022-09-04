// require('dotenv').config();
// const jwt = require('jsonwebtoken');

// const { JWT_KEY } = process.env;

// const { User } = require('../database/models');

const regexEmail = /\S+@\S+\.\S+/;

const newUser = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  if (!regexEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }
  // if (email) {
  //   const user = await User.findOne({ where: { email } });
  //   if (user) {
  //     return res.status(409).json({ message: 'User already registered' });
  //   }
  // }

  next();
};

module.exports = { newUser };
