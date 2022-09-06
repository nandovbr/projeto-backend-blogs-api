const { User } = require('../database/models');

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: 'password' },
  });
 
  if (!users) {
    return { code: 400, error: { message: 'Users not found' } };
  }
  return { data: users, code: 200 };
};

module.exports = { getAllUsers };
