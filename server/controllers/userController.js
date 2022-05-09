const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const SECRET_KEY = 'the_secret_key'

const generateJwt = (id, email, role) => {
   return jwt.sign(
       {id, email, role},
       SECRET_KEY,
       {expiresIn: '24h'}
   )
}

class UserController {

   async registration(req, res, next){
      const {email, password, role} = req.body
      if(!email || !password) {
         return next(ApiError.badRequest('Impossible login or password'))
      }
      const candidate = await User.findOne({where: {email}})
      if(candidate){
         return next(ApiError.badRequest('User with this email alredy exist'))
      }
      const hashPassword = await bcrypt.hash(password, 5)
      const user = await User.create({email, role, password: hashPassword})
      const basket = await Basket.create({userId: user.id})
      const token = generateJwt(user.id, user.email, user.role)
      // jwt.sign(
      //       {id: user.id, email, role}, 
      //       SECRET_KEY, 
      //       {expiresIn: '20h'}
      // ) 
      return res.json({token})
   } 


   async login(req, res, next){ 
      const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
      // jwt.sign(
      //       {id: user.id, email, role}, 
      //       SECRET_KEY, 
      //       {expiresIn: '20h'}
      // ) 
      return res.json({token})
   }
   async check(req, res){
      const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
   }
}

module.exports = new UserController()