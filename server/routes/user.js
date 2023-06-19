const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/users', checkRole('ADMIN', 'CHAIRMAN'), UserController.getAll)
router.get('/auth', authMiddleware, UserController.check)

module.exports = router