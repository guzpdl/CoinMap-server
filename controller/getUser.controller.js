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



const editUser = (req, res, next) => {
  const {id} = req.params

  const {username} = req.body

  userModel.findByIdAndUpdate(id, {username})
  .then(() => {
    res.sendStatus(204)
  })
  .catch(next)
}

module.exports = {
        getUser,
        editUser
}   