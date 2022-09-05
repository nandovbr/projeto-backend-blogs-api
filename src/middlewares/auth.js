require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
  const error = new Error();
  error.message = 'Token not found';
  throw error;
}

const validBody = (body, res) => {
  const { email, password } = body;

  if (!email || !password) {
    res.status(400).json({ message: 'Some required fields are missing' });
    return false;
  }

  return true;
};

const createToken = ({ email }) => {
  const token = jwt.sign({ email }, JWT_SECRET);
  return token;
};

const validLogin = async (req, res) => {
  const { email } = req.body;

  if (!validBody(req.body, res)) return;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const { id } = user.dataValues;
  const token = createToken({ email, id });

  return res.status(200).json({ token });
};

const validToken = async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    
    return decoded;
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { 
  validLogin,
  validToken,
};
