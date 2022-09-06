const router = require('express').Router();
const userController = require('../controllers/userController');
const { validToken } = require('../middlewares/auth');
const { newUser } = require('../middlewares/validateNewUser');

router.post('/', newUser, userController.createUser);
router.get('/', validToken, userController.getAllUsers);

module.exports = router;
