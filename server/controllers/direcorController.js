const { DirecorIns } = require("../models/models")
const apiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')

class DirectorController  {
    async create (req, res, next){
        try {
            const {name, lastname, surename, info} = req.body
            const {avatar} = req.files
            let fileName = uuid.v4() + ".jpg"
            avatar.mv(path.resolve(__dirname, '..', 'static', fileName))

            const director = await DirecorIns.create({name, lastname, surename, info, avatar: fileName})
            return res.json(director)
        } catch(e){
            next(apiError.badRequest(e.message))
        }
    }
    async getAll (req, res){
        const directors = await DirecorIns.findAll()
        return res.json(directors)
    }
}

module.exports = new DirectorController()