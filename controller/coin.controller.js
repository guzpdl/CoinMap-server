const coinModel = require("../models/Coin.model")
const Coins = require("../service/api-coingecko")

const getAllCoins = (req, res, next) => {
    Coins   
    .getCoinList()
    .then((list) => {
        res.status(200).json(list)
    })
    .catch((err)=> console.log(err))
}
const getAllData = (req, res, next) => {
    Coins   
    .getData()
    .then((list) => {
        res.status(200).json(list)
    })
    .catch((err)=> console.log(err))
}

module.exports = {getAllCoins, getAllData }