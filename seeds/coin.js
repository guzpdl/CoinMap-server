require('dotenv/config');
const mongoose = require('mongoose');
const coinModel = require('../models/Coin.model');
const Coins = require("../service/api-coingecko")


mongoose
    .connect(process.env.MONGO_URI)
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .then(()=>{
        return Coins
        .getData()
    })
    .then((data)=>{
         coinModel
        .insertMany(data) 
    })
    .then(() => {
        console.log('created')
    })
    .catch((err) => console.log(err))
    .finally(() => {
        mongoose.disconnect()
    })