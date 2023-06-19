const { Chairman } = require("../models/models")
const apiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')

class ChairmanController  {
    async create (req, res, next){
        try {
            const {name, lastname, surename, info, specialization} = req.body
            const {avatar} = req.files
            let fileName = uuid.v4() + ".jpg"
            avatar.mv(path.resolve(__dirname, '..', 'static', fileName))

            const chairman = await Chairman.create({name, lastname, surename, info, specialization, avatar: fileName})
            return res.json(chairman)
        } catch(e){
            next(apiError.badRequest(e.message))
        }
    }
    async getAll (req, res){
        const chairmans = await Chairman.findAll()
        return res.json(chairmans)
    }
}

module.exports = new ChairmanController()