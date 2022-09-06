const { BlogPost, User, Category } = require('../database/models');

const getPosts = async (_req, res) => {
  const posts = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories',
    }],
  });

  res.status(200).json(posts);
};

module.exports = { getPosts };
