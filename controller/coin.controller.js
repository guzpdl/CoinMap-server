const Coins = require("../service/api-coingecko")

const getAllCoins = (req, res, next) => {
    Coins   
    .getCoinList()
    .then((data) => {
        const newData = data.map(({id,
            symbol,
            name,
            image,
            current_price,
            market_cap,
            market_cap_rank,
            price_change_percentage_1h_in_currency,
            price_change_percentage_24h_in_currency,
            price_change_percentage_7d_in_currency
        }) =>{
            return {
                id,
                symbol,
                name,
                image,
                current_price,
                market_cap,
                market_cap_rank,
                price_change_percentage_1h_in_currency,
                price_change_percentage_24h_in_currency,
                price_change_percentage_7d_in_currency
            }
        })
        res.status(200).json(newData)
    })
    .catch((err)=> console.log(err))
}
const searchCoin = (req, res, next) => {
    Coins   
    .search(req.query.query)
    .then((list) => {
        res.status(200).json(list)
    })
    .catch((err)=> console.log(err))
}

// Import to MD
const getAllData = (req, res, next) => {
    Coins   
    .getData()
    .then((list) => {
        res.status(200).json(list)
    })
    .catch((err)=> console.log(err))
}

module.exports = {getAllCoins, getAllData, searchCoin }