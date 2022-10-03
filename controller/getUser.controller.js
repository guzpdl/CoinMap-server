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

   const getUserById = (req, res, next) => {
    const {id} = req.params
    console.log(id)

    userModel.findById(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next)
   }     


const editUser = (req, res, next) => {
  const {id} = req.params

  const {username, password, email} = req.body

  userModel.findByIdAndUpdate(id, {username, password, email})
  .then(() => {
    res.sendStatus(204)
  })
  .catch(next)
}

const addFavoriteCoin = (req, res, ext) => {
  

}


module.exports = {
        getUser,
        editUser,
        getUserById
}   