const userModel = require("../models/User.model")


const getUser = (req, res, next) => {
    if(req.user){
        userModel.findById(req.user._id).select('email username').then((user) => {
            if (user) {
                res.status(200).json(user)
              } else {
                res.sendStatus(404);
              }
            })
          } else {
            res.sendStatus(401);
          }
        }


module.exports = {
        getUser
}   