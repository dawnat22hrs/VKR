const jwt = require('jsonwebtoken')


module.exports = (...roles) => {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }

        try { 
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(403).json({message: "Пользователь не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)

            let hasRole = false
            if(roles.includes(decoded.role)) {
                hasRole = true
            }

            if (!hasRole) {
                return res.status(403).json({message: "У вас нет доступа"})
            }

            next();
        } catch (e) {
            console.log(e)
            return res.status(403).json({message: "Ошибка"})
        }
    }
};