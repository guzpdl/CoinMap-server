const { getDetails, coinData, historicalChart }  = require('../controller/coinDetails.controller');
const router = require('express').Router();



router.get('/:id', getDetails)
router.get('/coins/:id', coinData)
router.get('/chart/:id', historicalChart)


module.exports = router;