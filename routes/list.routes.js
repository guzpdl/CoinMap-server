const {getAllCoins, getAllData, searchCoin}  = require('../controller/coin.controller');
const router = require('express').Router();



router.get('/home', getAllCoins)
router.get('/search', searchCoin)

// useless - imported to MD
// router.get('/market', getAllData) 

module.exports = router;

