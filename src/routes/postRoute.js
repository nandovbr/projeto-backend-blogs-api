const router = require('express').Router();
const postController = require('../controllers/postController');
const { validToken } = require('../middlewares/auth');

router.get('/', validToken, postController.getPosts);

module.exports = router;
