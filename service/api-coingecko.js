const axios = require('axios')

class Coins {
    constructor(){
        this.axios = axios.create({
            baseURL: 'https://api.coingecko.com/api/v3/coins'
        })
    }

    getCoinList(){
        return this.axios
        .get('/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(({data}) => data)
        .catch(e => console.log(e))
    }

    getData(){
        return this.axios
        .get('/list')
        .then(({data}) => data)
        .catch(e => console.log(e))
    }
}

module.exports = new Coins()