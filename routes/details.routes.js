const { getDetails, coinData }  = require('../controller/coinDetails.controller');
const router = require('express').Router();



router.get('/:id', getDetails)
router.get('/coins/:id', coinData)

module.exports = router;