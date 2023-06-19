const Router = require('express');
const router = new Router();

const user = require('./user');
const institute = require('./institute');
const sticker = require('./sticker');
const councils = require('./councils');
const depDirector = require('./depDirector');
const directors = require('./directorIns');
const chairman = require('./chairman');
const team = require('./team')

router.use('/user', user)
router.use('/team', team)
router.use('/institute', institute)
router.use('/sticker', sticker)
router.use('/council', councils)
router.use('/depDirector', depDirector)
router.use('/director', directors)
router.use('/chairman', chairman)

module.exports = router