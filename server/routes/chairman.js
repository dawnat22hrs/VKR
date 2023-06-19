const Router = require('express');
const router = new Router();
const ChairmanController = require('../controllers/chairmanController');
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN', 'CHAIRMAN'), ChairmanController.create)
router.get('/', ChairmanController.getAll)

module.exports = router