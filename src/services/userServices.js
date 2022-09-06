const { User } = require('../database/models');

const getAllUsers = async () => {
  // console.log('entrei userServices');
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  if (!users) {
    return { code: 400, error: { message: 'Users not found' } };
  }

  return users;
};

module.exports = { getAllUsers };
