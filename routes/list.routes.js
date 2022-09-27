const {getAllCoins, getAllData}  = require('../controller/coin.controller');
const router = require('express').Router();



router.get('/home', getAllCoins)
router.get('/data', getAllData)

module.exports = router;

