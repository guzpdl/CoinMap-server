const {getAllCoins, getAllData, searchCoin, getTrending, global}  = require('../controller/coin.controller');
const router = require('express').Router();



router.get('/home', getAllCoins)
router.get('/trending', getTrending)
router.get('/search', searchCoin)
router.get('/global', global)


// useless - imported to MD
router.get('/market', getAllData) 

module.exports = router;

