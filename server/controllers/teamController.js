const { TeamOfTheProject } = require('../models/models')
const apiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')

class TeamContoller  {
    async create (req, res, next){
        try {
            const {name, info, lastname, surname} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const person = await TeamOfTheProject.create({name, info, lastname, surname, img: fileName})
            return res.json(person)
        } catch(e){
            next(apiError.badRequest(e.message))
        }
    }
    async getAll (req, res){
        const sticker = await TeamOfTheProject.findAll()
        return res.json(sticker)
    }
}

module.exports = new TeamContoller()