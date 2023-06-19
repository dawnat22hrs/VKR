const { DepDirector } = require("../models/models")
const apiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')

class DepDirController  {
    async create (req, res, next){
        try {
            const {name, lastname, surename, info} = req.body
            const {avatar} = req.files
            let fileName = uuid.v4() + ".jpg"
            avatar.mv(path.resolve(__dirname, '..', 'static', fileName))

            const depDir = await DepDirector.create({name, lastname, surename, info, avatar: fileName})
            return res.json(depDir)
        } catch(e){
            next(apiError.badRequest(e.message))
        }
    }
    async getAll (req, res){
        const depDirectors = await DepDirector.findAll()
        return res.json(depDirectors)
    }
}

module.exports = new DepDirController()