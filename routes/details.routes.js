const { getDetails, coinData, makeComment, deleteComment, getComments }  = require('../controller/coinDetails.controller');
const router = require('express').Router();
const validateToken = require('../middleware/validateToken.middleware')

// ---------- GET ----------------

router.get('/:id', getDetails)
router.get('/coins/:id', coinData)
router.get('/coins/comment/:id', getComments)

// -------------- POST ---------------
router.post('/coins/comment/:id', validateToken, makeComment)

// ---------------- DELETE -----------------
router.delete('/coins/comment/delete/:id', validateToken, deleteComment)





module.exports = router;