const router = require('express').Router();
const userController = require('../controllers/userController');
const { validLogin } = require('../middlewares/auth');

router.post('/', validLogin, userController.validLogin);

module.exports = router;
