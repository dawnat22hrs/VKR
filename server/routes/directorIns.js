const Router = require('express');
const router = new Router();
const DirectorController = require('../controllers/direcorController');
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN', 'CHAIRMAN'), DirectorController.create)
router.get('/', DirectorController.getAll)

module.exports = router