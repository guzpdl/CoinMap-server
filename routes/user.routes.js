const { getUser, editUser, getUserById } = require('../controller/getUser.controller');
const valdateToken = require('../middleware/validateToken.middleware')

const router = require('express').Router();


// ------------- GET ------------

router.get('/profile', getUser)

router.get('/profile/:id', valdateToken, getUserById)

// --------------- PUT -------------

router.put('/profile/:id', editUser) 


module.exports = router;