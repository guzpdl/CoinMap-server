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

   const getFavCoins = (req, res, next) => {
      const {id} = req.params
      userModel
      .findById(id)
      .select('favorite_coins')
      .then((userFavs) => {
        res.status(200).json(userFavs);
      })
      .catch(next)
   }     


const editFavCoins = (req, res, next) => {
  const {id} = req.params

  const {favorite_coins} = req.body
  console.log(favorite_coins);

  userModel.findByIdAndUpdate(id, favorite_coins)
  .then(() => {
    res.sendStatus(204)
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


module.exports = {
        getUser,
        editUser,
        getFavCoins,
        editFavCoins
}   