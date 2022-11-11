const User = require('../models/user.model')

class AuthController {

    static register = async (req, res) => {

        const user = new User(req.body)
        try {
            await user.save()
            res.status(200).send({
                status: 200,
                message: 'Successfully Registered',
                userData: user
            })
        } catch (error) {
            res.status(400).send({
                status: 400,
                message: error.message
            })
        }
    }

   
    static signin = async (req, res) => {
        try{
          //find the credentials from the database
          const user = await User.findByCredentials(req.body.email , req.body.password)
          //generate a token 
          const token = await user.generateAuthToken()

          res.status(200).send({
              status: 200,
              message: 'Successfully Signin',
              data: {
                userData: user, token 
              }
          })
       }catch(error) {
           res.status(400).send({
               status: 400,
               message: error.message
           })
       }
    }
}

module.exports = AuthController