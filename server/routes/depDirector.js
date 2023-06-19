const Router = require('express');
const router = new Router();
const depDirController = require('../controllers/depDirContoroller');
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN', 'CHAIRMAN'), depDirController.create)
router.get('/', depDirController.getAll)

module.exports = router