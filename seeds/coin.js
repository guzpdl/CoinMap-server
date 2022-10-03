require('dotenv/config');
const mongoose = require('mongoose');
const coinModel = require('../models/Coin.model');
const Coins = require("../service/api-coingecko")

console.log(process.env)
mongoose
    .connect('mongodb://localhost:27017')
    .then((x) => {        
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    coinModel.deleteMany()
    })
    .then(()=>{
        return Coins
        .getData()
    })
    .then((data)=>{
         return coinModel
        .create(data) 
    })
    .then(() => {
        console.log('created')
    })
    .catch((err) => console.log(err))
    .finally(() => {
        mongoose.disconnect()
    })