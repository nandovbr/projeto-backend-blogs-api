const router = require('express').Router();
const categoryController = require('../controllers/categoryController');
const { validToken } = require('../middlewares/auth');

router.post('/', validToken, categoryController.createCategory);
router.get('/', validToken, categoryController.getAllCategories);

module.exports = router;
