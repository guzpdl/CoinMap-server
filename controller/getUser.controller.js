const coinModel = require("../models/Coin.model");
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
      .populate('favorite_coins') 
      // .select('favorite_coins')
      .then((userFavs) => {
        res.status(200).json(userFavs);
      })
      .catch(next)
   }     


const updateFavCoins = (req, res, next) => {
  const {id} = req.params
  console.log(id)

  const {favoriteCoins} = req.body
  console.log(favoriteCoins);

  coinModel.findOne({id: favoriteCoins})
  .then((data) => {

    const {_id} = data
    console.log(data);

  
  return userModel.findByIdAndUpdate(id, 
      { $addToSet: { favorite_coins: _id } }
      )
    })
     
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
        updateFavCoins
}   