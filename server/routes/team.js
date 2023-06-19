const Router = require('express');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');
const teamController = require('../controllers/teamController');

router.post('/create-person', teamController.create)
router.get('/get-all', teamController.getAll)

module.exports = router