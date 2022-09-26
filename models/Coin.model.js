const { Schema, model } = require("mongoose");


const CoinSchema = new Schema(

    {
        id: {type: String},
        symbol: {type: String},
        name: {type: String},
                                                                    // description: {type: String},
                                                                    // image: {type: String},
        // market_cap_rank: {type: Number},
        // sentiment_votes_up_percentage: {type: Number},
        // sentiment_votes_down_percentage: {type: Number},
        // current_price: {type: Number}, // USD
        // market_cap: {type: Number},
        // total_volume: {type: Number}, //USD - 24hs
        // price_change_24h: {type: Number},
        // price_change_percentage_24h: {type: Number},x
        // max_supply: {type: Number},
        // circulating_supply: {type: Number},
        comments: [{ type: Schema.Types.ObjectId, ref: 'comments' }],      

      
    },
    {
        timestamps: true,
        versionKey: false,
    }
)
const coinModel = model("coin", CoinSchema);

module.exports = coinModel