const Router = require('express');
const router = new Router();
const InstituteController = require('../controllers/instituteController');
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN', 'CHAIRMAN'), InstituteController.create)
router.get('/', InstituteController.getAll)
router.get('/:id', InstituteController.getOne)

module.exports = router