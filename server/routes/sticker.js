const Router = require('express');
const router = new Router();
const StickerController = require('../controllers/stickerController');
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), StickerController.create)
router.get('/stickers', StickerController.getAll)
router.get('/sticker/:id', StickerController.getOneSticker)
router.put('/create-code', StickerController.createCode)
router.put('/edit', StickerController.editSticker)
router.put('/sticker-flag', StickerController.stickerFlag)

module.exports = router