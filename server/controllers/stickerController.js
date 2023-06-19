const { Sticker } = require('../models/models')
const apiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')
const db = require('../db')

class StickerController  {
    async create (req, res, next){
        try {
            const {title, info, isDone} = req.body
            const {logo} = req.files
            let fileName = uuid.v4() + ".jpg"
            logo.mv(path.resolve(__dirname, '..', 'static','sticker', fileName))

            const sticker = await Sticker.create({title, info, isDone, logo: fileName})
            return res.json(sticker)
        } catch(e){
            next(apiError.badRequest(e.message))
        }
    }
    async getAll (req, res){
        const sticker = await Sticker.findAll()
        return res.json(sticker)
    }
    async getOneSticker (req, res){
        const {id} = req.params
        const sticker = await Sticker.findOne(
            {
                where: {id},
            },
        )
        return res.json(sticker)
    }
    async createCode (req, res, next) {
        try {
            const data = {code: req.body.code}
            const sticker = await Sticker.update(data, {where: {id: req.body.id}})
            return res.status(200).json(sticker)
        }
        catch (e){
            next(apiError.badRequest(e.message))
        }
    }
    async editSticker (req, res, next) {
        try {
            const data = {title: req.body.title, info: req.body.info}
            const sticker = await Sticker.update(data, {where: {id: req.body.id}})
            return res.status(200).json(sticker)
        }
        catch (e){
            next(apiError.badRequest(e.message))
        }
    }
    async stickerFlag (req, res, next) {
        try {
            const data = {isDone: req.body.isDone}
            const sticker = await Sticker.update(data, {where: {id: req.body.id}})
            return res.status(200).json(sticker)
        }
        catch (e){
            next(apiError.badRequest(e.message))
        }
    }
}

module.exports = new StickerController()