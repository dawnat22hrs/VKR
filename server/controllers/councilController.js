const { StudCouncil, Chairman } = require('../models/models')
const apiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')

class CouncilController  {
    async create (req, res, next){
        try {
            const {name, desc, chairman} = req.body
            const {symbol} = req.files
            let fileName = uuid.v4() + ".jpg"
            symbol.mv(path.resolve(__dirname, '..', 'static', fileName))

            const councils = await StudCouncil.create({name, desc, symbol: fileName})

            if(chairman) {
                chairman = JSON.parse(chairman)
                    chairman.forEach(i => {
                    Chairman.create({
                        name: i.name, 
                        lastname: i.lastname,
                        surename: i.surename,
                        info: i.info,
                        avatar: i.avatar,
                        specialization: i.specialization,
                    })
                });
            }
            return res.json(councils)
        } catch(e){
            next(apiError.badRequest(e.message))
        }
    }
    async getAll (req, res){
        const councils = await StudCouncil.findAll()
        return res.json(councils)
    }
    async getOne (req, res){
        const {id} = req.params
        const council = await StudCouncil.findOne(
            {
                where: {id},
                include: [{model: Chairman, as: 'chairman'}]
            },
        )
        return res.json(council)
    }
}

module.exports = new CouncilController()