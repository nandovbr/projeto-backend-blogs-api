const router = require('express').Router();
const userController = require('../controllers/userController');
// const { validLogin } = require('../middlewares/auth');
const { newUser } = require('../middlewares/validateNewUser');

router.post('/', newUser, userController.createUser);

module.exports = router;
