const express = require('express');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.route('/:id').get(userController.getUser);

router.use(authController.protect);

router.get('/auth', authController.getAuth);
router.get('/me', userController.getMe, userController.getUser);

module.exports = router;
