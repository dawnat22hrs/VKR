const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nickname: {type: DataTypes.STRING, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    surename: {type: DataTypes.STRING},
    group: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "STUDENT"}
}) 

const TeamOfTheProject = sequelize.define('teamOfTheProject', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING},
    info:  {type: DataTypes.TEXT},
})

const Store = sequelize.define('store', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const StickerStore = sequelize.define('stickerStore', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Sticker = sequelize.define('sticker', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    logo: {type: DataTypes.STRING},
    info: {type: DataTypes.TEXT},
    code: {type: DataTypes.TEXT},
    isDone: {type: DataTypes.BOOLEAN, defaultValue: false}
})

const Institute = sequelize.define('institute', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    abbreviation: {type: DataTypes.STRING},
    desc: {type: DataTypes.TEXT},
    symbol: {type: DataTypes.STRING},
})

const DirecorIns = sequelize.define('directorIns', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
    surename: {type: DataTypes.STRING},
    avatar: {type: DataTypes.STRING},
    info:  {type: DataTypes.STRING},
})

const DepDirector = sequelize.define('depDirector', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
    surename: {type: DataTypes.STRING},
    avatar: {type: DataTypes.STRING},
    info:  {type: DataTypes.STRING},
})

const StudCouncil = sequelize.define('studCouncil', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    desc: {type: DataTypes.TEXT},
    symbol: {type: DataTypes.STRING},
})


const Chairman = sequelize.define('chairman', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    surename: {type: DataTypes.STRING},
    avatar: {type: DataTypes.STRING},
    specialization: {type: DataTypes.STRING},
    info:  {type: DataTypes.STRING},
})

User.hasOne(Store)
Store.belongsTo(User)

User.hasOne(TeamOfTheProject)
TeamOfTheProject.belongsTo(User)

Store.hasMany(StickerStore)
StickerStore.belongsTo(Store)

Sticker.hasOne(StickerStore)
StickerStore.belongsTo(Sticker)

Institute.hasMany(User)
User.belongsTo(Institute)

DirecorIns.hasOne(Institute, {as: 'directorIn'})
Institute.belongsTo(DirecorIns, {as: 'directorIn'})

DepDirector.hasOne(Institute, {as: 'depDirector'})
Institute.belongsTo(DepDirector, {as: 'depDirector'})

Chairman.hasOne(Institute)
Institute.belongsTo(Chairman)

StudCouncil.hasOne(Institute)
Institute.belongsTo(StudCouncil)

Chairman.hasOne(StudCouncil)
StudCouncil.belongsTo(Chairman)

module.exports = {
    User,
    Store,
    StickerStore,
    Sticker,
    Institute,
    DirecorIns,
    DepDirector,
    StudCouncil,
    Chairman
}