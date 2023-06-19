const Router = require('express');
const router = new Router();
const CouncilController = require('../controllers/councilController');
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN', 'CHAIRMAN'), CouncilController.create)
router.get('/', CouncilController.getAll)
router.get('/:id', CouncilController.getOne)


module.exports = router