const { Institute, DirecorIns, DepDirector, StudCouncil, Chairman } = require('../models/models')
const apiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')

class InstituteController  {
    async create (req, res, next){
        try {
            let {name, abbreviation, desc, directorIn, depDirector, studCouncil, chairman} = req.body
            const {symbol} = req.files
            let fileName = uuid.v4() + ".jpg"
            symbol.mv(path.resolve(__dirname, '..', 'static', fileName))

            const institute = await Institute.create({name, abbreviation, desc, symbol: fileName})
            

            if(directorIn && depDirector && studCouncil && chairman) {
                directorIn = JSON.parse(directorIn)
                directorIn.forEach(i => {
                    DirecorIns.create({
                        name: i.name, 
                        lastname: i.lastname,
                        surename: i.surename,
                        info: i.info,
                        avatar: i.avatar,
                        directorId: institute.id
                    })
                });

                depDirector = JSON.parse(depDirector)
                depDirector.forEach(i => {
                    DepDirector.create({
                        name: i.name, 
                        lastname: i.lastname,
                        surename: i.surename,
                        info: i.info,
                        avatar: i.avatar,
                    })
                });

                studCouncil = JSON.parse(studCouncil)
                studCouncil.forEach(i => {
                    StudCouncil.create({
                        name: i.name, 
                        desc: i.desc,
                    })
                });
                
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

            return res.json(institute)
        } catch(e){
            next(apiError.badRequest(e.message))
        }
    }
    async getAll (req, res){
        const institutes = await Institute.findAll()
        return res.json(institutes)
    }
    async getOne (req, res){
        const {id} = req.params
        const institute = await Institute.findOne(
            {
                where: {id},
                include: [{model: DirecorIns, as: 'directorIn'},
                         {model: DepDirector, as: 'depDirector'},
                         {model: StudCouncil, as: 'studCouncil'},
                         {model: Chairman, as: 'chairman'}]
            },
        )
        return res.json(institute)
    }
}

module.exports = new InstituteController()