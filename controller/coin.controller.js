const coinModel = require("../models/Coin.model");



const getAllCoins = (req, res, next) => {
    coinModel.find()
    .then((coinsBasicData) => {
        res.status(200)
        .json(coinsBasicData)
    })
    .catch(next);
}

const getOneCoin = (req,res,next) => {
    const {id} = req.params
    coinModel.findById(id)
    .then((coin) => {
        res.status(200).json(coin)
    })
    .catch( next)
}

module.exports = {
    getAllCoins,
    getOneCoin
}
// jc