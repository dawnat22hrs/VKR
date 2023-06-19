const { User, Store, StickerStore, Sticker } = require('../models/models')
const apiError = require('../error/apiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJWT = (id, nickname, role) => {
    return jwt.sign(
        {id, nickname, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController  {
    async registration (req, res, next){
        const {nickname, email, password, name, surename, group, phone, role} = req.body
        if(!nickname || !password || !name || !surename || !group) {
            return next(apiError.badRequest('Заполните все обязательные поля!'))
        }
        const candidate = await User.findOne({where: {nickname}})
        if(candidate){
            return next(apiError.badRequest('Такой пользователь уже существует!'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({nickname, email, password: hashPassword, name, surename, group, phone, role})
        const store = await Store.create({userId: user.id})
        const token = generateJWT(user.id, user.nickname, user.role)
        return res.json({token, store})
    }
    async login (req, res, next){
        const {nickname, password} = req.body
        const user = await User.findOne({where:{nickname}})
        if(!user) {
            return next(apiError.internal("Пользователь " + nickname + " не найден"))
        }

        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(apiError.internal("Неверный пароль"))
        }

        const token = generateJWT(user.id, user.nickname ,user.role)
        return res.json({token})
    }
    async check (req, res, next){
        const token = generateJWT(req.user.id, req.user.nickname, req.user.role)
        return res.json({token})
    }
    async getAll (req, res){
        const users = await User.findAll()
        return res.json(users)
    }
}

module.exports = new UserController()