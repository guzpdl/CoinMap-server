const coinModel = require("../models/Coin.model")
const details = require("../models/coinDetails.model")
require('mongoose')
const Coins = require("../service/api-coingecko")

const getDetails = (req, res, next) => {
    const {id} = req.params
    coinModel
        .find({id})
        .then((details) => {
            res.status(200).json(details)
        })
        .catch((err) => (console.log(err)))

}

const coinData = (req, res, next) => {
    Coins   
    .changingDetails(req.params.id)
    .then(({
        market_data:{
            current_price:{usd: currentPriceUsd}, 
            market_cap:{usd: marketCapUsd}, 
            total_volume:{usd: volumeUsd}, 
            price_change_24h,
            price_change_percentage_24h,
            max_supply,
            circulating_supply
        },
        description:{en}, 
        image:{thumb}, 
        market_cap_rank, 
        sentiment_votes_up_percentage, 
        sentiment_votes_down_percentage
    }) => {
        // const {current_price} = {usd}
        res.status(200).json({thumb, 
            en,
            market_cap_rank, 
            sentiment_votes_up_percentage, 
            sentiment_votes_down_percentage,
            marketCapUsd, 
            currentPriceUsd, 
            volumeUsd,
            price_change_24h,
            price_change_percentage_24h,
            max_supply,
            circulating_supply
        })
    })
    .catch((err)=> console.log(err))
}

module.exports = {getDetails, coinData}