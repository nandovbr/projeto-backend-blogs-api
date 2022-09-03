require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

const validBody = (body, res) => {
  const { email, password } = body;

  if (!email || !password) {
    res.status(400).json({ message: 'Some required fields are missing' });
    return false;
  }

  return true;
};

const validLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!validBody(req.body, res)) return;

    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = jwt.sign({ email }, JWT_SECRET);

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(400).json({ message: 'Internal server error', error: err.message });
  }
};

module.exports = {
  validLogin,
  validBody,
};
